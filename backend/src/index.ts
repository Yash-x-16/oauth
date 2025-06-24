console.log("radhe radhe")
import  express  from "express" 
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDb } from "./db/connectDb"
import authRoutes from "./routes/auth.route"
import messageRoute from "./routes/message.route"



const app = express() 

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
  }));
dotenv.config()
app.use(express.json()) 
app.use(cookieParser())


const port = process.env.PORT


app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoute)


app.listen(port,()=>{
    connectDb()
    console.log("server is listening on the port : ",port)
})