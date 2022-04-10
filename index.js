import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./config/db.js"
// import products from './data/products.js'
import productsRoute from './routes/productRoutes.js'

// import { MongoClient } from 'mongodb';
// const ObjectId = require("mongodb").ObjectId;


const app = express();

dotenv.config();

connectDB()


app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.use('/products',productsRoute)
// const uri =`mongodb+srv://CaptureEye:Yx2kGxytO0li0Jbr@cluster0.nhm74.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// async function run() {
//     try {
//         await client.connect();
//         console.log('connected to database')

//     }
//     finally {
//         // await client.close()
//     }
// }
// run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("from node js");
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
