const mongoose=require('mongoose');
function connection() {
    mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => console.log("DB is Connected")).catch(err => console.log(err));

}
module.exports={
    connection
}
