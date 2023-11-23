package middlewares

import (
	"cen/backend/utils/token"
	"encoding/csv"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
)

var (
	CompCounterLock sync.Mutex
	CompCounter     = make(map[string]int) // Map with date as key
)

func initCompetitionCSVWriter() *csv.Writer {
	file, err := os.OpenFile("competition_log.csv", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Failed to open competition csv file: %v", err)
	}
	writer := csv.NewWriter(file)

	if info, _ := file.Stat(); info.Size() == 0 {
		headers := []string{"Date", "VisitCount"}
		if err := writer.Write(headers); err != nil {
			log.Fatalf("Failed to write headers to competition csv file: %v", err)
		}
		writer.Flush()
	}
	return writer
}

func ReadCompetitionLog() {
	file, err := os.Open("competition_log.csv")
	if err != nil {
		log.Fatalf("Failed to open competition csv file for reading: %v", err)
	}
	defer file.Close()

	reader := csv.NewReader(file)
	for {
		record, err := reader.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalf("Failed to read competition csv file: %v", err)
		}

		date, countStr := record[0], record[1]
		count, _ := strconv.Atoi(countStr)
		CompCounter[date] = count
	}
}

// Function to write the CompCounter map to the CSV file
func WriteCompetitionLog() {
	file, err := os.Create("competition_log.csv")
	if err != nil {
		log.Fatalf("Failed to open competition csv file for writing: %v", err)
	}
	defer file.Close()

	writer := csv.NewWriter(file)
	writer.Write([]string{"Date", "VisitCount"}) // Writing headers

	for date, count := range CompCounter {
		writer.Write([]string{date, strconv.Itoa(count)})
	}
	writer.Flush()
}

func CompetitionLogger() gin.HandlerFunc {
	return func(c *gin.Context) {
		currentDate := time.Now().Format("2006-01-02")
		CompCounterLock.Lock()
		CompCounter[currentDate]++
		CompCounterLock.Unlock()

		c.Next()
	}
}

var (
	csvLock sync.Mutex
	writer  *csv.Writer
)

func initCSVWriter() {
	// Initialize the CSV writer in a separate function
	file, err := os.OpenFile("gin.csv", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Failed to open csv file: %v", err)
	}

	writer = csv.NewWriter(file)

	// Write headers if file is new
	if info, _ := file.Stat(); info.Size() == 0 {
		headers := []string{"Method", "URI", "Client IP", "User Agent", "Duration"}
		if err := writer.Write(headers); err != nil {
			log.Fatalf("Failed to write headers to csv file: %v", err)
		}
		writer.Flush()
	}
}

func LoggerToCSV() gin.HandlerFunc {
	// Initialize the CSV writer
	initCSVWriter()

	return func(c *gin.Context) {
		start := time.Now()

		// Process request
		c.Next()

		// Prepare log entry as a CSV row
		record := []string{
			c.Request.Method,
			c.Request.RequestURI,
			c.ClientIP(),
			c.Request.UserAgent(),
			time.Since(start).String(),
		}

		// Synchronize access to the CSV writer
		csvLock.Lock()
		defer csvLock.Unlock()

		// Write the log entry to CSV
		if err := writer.Write(record); err != nil {
			log.Printf("Failed to write to csv file: %v", err)
		} else {
			writer.Flush() // Flush after every write
			if err := writer.Error(); err != nil {
				log.Printf("Error flushing csv writer: %v", err)
			}
		}
	}
}

func JwtAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		err := token.TokenValid(c)
		if err != nil {
			c.String(http.StatusUnauthorized, "Unauthorized")
			c.Abort()
			return
		}
		c.Next()
	}
}

func LoggerToFile() gin.HandlerFunc {
	file, err := os.OpenFile("gin.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Failed to log to file, using default stderr: %v", err)
	}
	logger := log.New(file, "", log.LstdFlags)

	return func(c *gin.Context) {
		start := time.Now()

		// Process request
		c.Next()

		// Log the request and response details
		logger.Printf("%s %s %s %s %s",
			c.Request.Method,
			c.Request.RequestURI,
			c.ClientIP(),
			c.Request.UserAgent(),
			time.Since(start),
		)
	}
}
