import express from "express"
import dotenv from "dotenv"
dotenv.config({path:"../.env"})
const app = express()
const PORT = process.env.PORT
const ORIGIN = process.env.ORIGIN
app.use(express.json())


app.get("/hello",(req, res) => {
    res.send({massage:"hello"})
})


app.use(express.static("../client/dist"));
app.get("/*",(req, res) => {
    if(ORIGIN) res.redirect(ORIGIN);
    else console.log("Missing ENV ORIGIN");
})

app.listen(PORT)
