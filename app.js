import express from "express";
import dbconnection from "./DB/dbconnection.js";
import web from "./routes/web.js";
const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// ? mongoose dbc func called
dbconnection(DATABASE_URL);

// ? setting the templete engine
app.set("view engine", "views");

//As req.body’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. so we have to use in built middleware urlencoded
app.use(express.urlencoded({ extended: true }));

// ?app level middleware is used for router
app.use("/", web);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
