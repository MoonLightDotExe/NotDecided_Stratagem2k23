const connectToMongo = require('./db.js')
connectToMongo();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const port = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use('/hospital', require('./controllers/hospitalcontroller'));
app.use('/patient', require('./controllers/patientcontroller'));

app.get('/', (req, res)=>{
    res.send("Working!");
})

app.listen(port, () => console.log(`Server Running  on http://localhost:${port}`))