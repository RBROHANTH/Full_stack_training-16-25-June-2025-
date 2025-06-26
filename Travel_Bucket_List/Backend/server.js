const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());
const connectDB = require('./config/db')
const PORT = process.env.PORT;
const bucketListRoute = require('./routes/bucketListrouters');
connectDB();
app.use(express.json({ limit: '100mb' })); // or higher if needed
app.use(express.urlencoded({ limit: '100mb', extended: true })); // for form data
app.use('/api/bucketlist', bucketListRoute)
app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
})