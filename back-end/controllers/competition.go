package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// CompetitionHandler responds to requests to the /competition endpoint
func CompetitionHandler(c *gin.Context) {
	// Implement your logic here
	// For now, it just sends a simple confirmation message

	c.JSON(http.StatusOK, gin.H{
		"message": "Competition page visited successfully",
	})
}
