import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoutes.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// middleware
app.use(express.json())
const allowedOrigins = [
  'https://book-medico-admin.vercel.app',
  'https://book-medico-frontend.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // For non-browser requests or if origin is undefined, allow it (e.g. server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


// api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('API WORKING')
})

app.listen(port, () => console.log('Server Starts', port))