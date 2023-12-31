import express from "express"
import cors from "cors"
import { postRouter } from "./routers/postRouter"
import dotenv from 'dotenv'
import { userRouter } from "./routers/userRouter"
import { commentRouter } from "./routers/commentRouter"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
});

/* app.listen(Number(process.env.PORT), () => {
console.log(`Servidor rodando na porta ${process.env.PORT}`)
}) */

app.use("/posts", postRouter)
app.use("/user", userRouter)
app.use("/posts/comment", commentRouter)