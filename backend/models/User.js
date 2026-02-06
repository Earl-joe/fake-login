import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email:     { type:String, required:true, unique:true },
  password:  { type:String, required:true },        // we’ll hash it

}, { timestamps:true });

export default mongoose.model("User", UserSchema);