# Flask Recipe Server

## Introduction
This server uses Flask and LlamaCpp via the LangChain library to provide recipes for various foods.

## Prerequisites
- Python 3 (I am using the v3.9.6)

## Setup
1. Install Flask: `pip install flask`
2. Install LangChain: `pip install langchain`
3. Download the LlamaCpp model (9.9GB) from [here](https://huggingface.co/TheBloke/CodeLlama-13B-GGUF/blob/main/codellama-13b.Q6_K.gguf) and place it in the same folder as your script.

## Running the Server
1. Run the command: `python3 server.py`.

## Usage 
### (It's just one GET request on http://localhost:5000/get_recipe)
To fetch a recipe, use:
`curl "http://localhost:5000/get_recipe?food=[food item]"`

Replace `[food item]` with your desired food, e.g., `banana pancakes`.