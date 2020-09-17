require('dotenv').config();
const express = require('express');
const morgan = require(morgan);

const app = express();

app.use(morgan("dev"));
app.use(express.json());




const port = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT ${PORT}`);
})