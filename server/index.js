require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes= require('./routes/users');
const authRoutes= require("./routes/auth");
const merchantRoutes = require("./routes/merchant");

connection()

app.use(express.json())
app.use(cors());

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/merchants",merchantRoutes);

const port =process.env.PORT||4000;
app.get("/", )
app.listen(port,()=> console.log(`Listening on port ${port}...`));
