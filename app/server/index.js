const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const addApiRoutes = require("./routes/add");
const getApiRoutes = require("./routes/get");



//init paser body to get body of request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.json());
app.use(cors());

app.use("/add", addApiRoutes);
app.use("/get", getApiRoutes);


app.listen(process.env.PORT || '8005', () => {
    console.log(`server is running at http://localhost:${process.env.PORT || 8005}`);
})