console.log("radhe radhe")
import  express  from "express" 
import { connectDb } from "./db/connectDb"
import authRoutes from "./routes/auth.route"
import dotenv from "dotenv"


const app = express()
dotenv.config()

const port = process.env.PORT

app.use(express.json())
app.use('/api/auth',authRoutes)


app.listen(port,()=>{
    connectDb()
    console.log("server is listening on the port : ",port)
})