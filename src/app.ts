import express from "express"
import cors from "cors"
import { userRoutes } from "./modules/user/user.route"

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/user", userRoutes)

export default app;