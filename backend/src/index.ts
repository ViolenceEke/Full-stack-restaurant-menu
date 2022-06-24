import express from 'express'
import {FoodRoutes} from './routes/food'
import bodyParser from 'body-parser';

const app = express()
const router = express.Router();
const port = process.env.PORT

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

app.use('/food', FoodRoutes(router))

app.get('/', (_, res) => {
  res.status(200).send("OK")
})
app.listen(port, () => console.log(`Running on port ${port}`))