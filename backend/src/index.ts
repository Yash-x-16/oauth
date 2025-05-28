console.log("radhe radhe")
import  express  from "express" 
import { connectDb } from "./db/connectDb"
import authRoutes from "./routes/auth.route"


const app = express()


app.use(express.json())
app.use('/api/auth',authRoutes)


app.listen(3000,()=>{
    connectDb()
    console.log("server is listening on the port 3000 !!")
})