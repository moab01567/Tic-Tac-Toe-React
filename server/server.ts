import express from "express"
import dotenv from "dotenv"

dotenv.config({path:"../.env"})

const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.get("/hello",(req, res) => {
    res.send({massage:"hello"})
})


app.use("/", express.static("../client/dist"));
app.use("**",express.static("../client/dist"));

app.listen(PORT)