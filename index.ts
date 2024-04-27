import Express, { Application, Request, Response  } from "express";
import bodyparser from 'body-parser';

const app: Application = Express() // Application object over which our server will be working on
const port = 8000 //Server port

app.use(bodyparser.json()) //Using body-parser for JSON parsing and other stuffs
app.use(
    bodyparser.urlencoded({
    extended: true,
  })
)

app.listen(port,()=>{
    console.log('Listening to port',port)
    initDB();
})