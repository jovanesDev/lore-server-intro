const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const { gastosRouter } = require("./routes/gastos");
const {  balanceRouter } = require("./routes/balance");
const puerto = 7878;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use("/api/gastos",gastosRouter);
app.use("/api/balance",balanceRouter)

app.listen(puerto,()=> {
    console.log(`el app esta correindo en el puerto : ${puerto}`)
})