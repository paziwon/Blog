import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, ()=>{
console.log(`we are up on port ${port}`)
});