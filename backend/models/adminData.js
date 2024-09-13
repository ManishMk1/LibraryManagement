const mongoose=require('mongoose')
const { Schema } = mongoose;

const admin = new Schema({
  name:String,
  userId:String,
  email:String,
  password:String,
});
const Admin=mongoose.model('Admin',admin);
module.exports={
  Admin
}