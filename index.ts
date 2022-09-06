const express = require("express")

const main = async () => {

    const app = express()

    app.get("/",(req, res) => {
        res.send("hello")
    })
    app.listen("3000", ()=> "listening to port 3000")
}