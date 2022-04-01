import mongoose from "mongoose";

const dbconnection = async (DATABASE_URL) => {
  const DB_OPTIONS = {
    dbName: "userdb",
  };
  try {
    await mongoose.connect(DATABASE_URL, DB_OPTIONS); // mongoose is connected to mongodb
    console.log("mongosse is connected.....");
  } catch (err) {
    console.log(err);
  }
};

export default dbconnection;
