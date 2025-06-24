const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());
const connectDB = require('./config/db')
const PORT = process.env.PORT;
const egRouter = require('./routes/egRouter');
const todoRoute = require('./routes/todorouters');
connectDB();
app.use(express.json())
app.use('/eg', egRouter)
app.use('/todo', todoRoute)
app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
})