// Require express and body-parser
const express = require("express")

// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing
app.use(express.json())

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

// Set up a test endpoint
app.get("/test", (req, res) => {
    res.send("Hello, World!")
})
