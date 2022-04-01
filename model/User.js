import mongoose from "mongoose";

//Defining schema
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  join: { type: Date, default: Date.now },
  // profilepicture: { type: String, required: true, trim: true },
});

// console.log(studentSchema.path("age"));

// compiling schema
const userModel = mongoose.model("user", userSchema);
//here model is created by mapping collection(user + s will add) to schema (userSchema)
export default userModel;
