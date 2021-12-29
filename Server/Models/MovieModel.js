const mongoose = require("mongoose");
const schema = mongoose.Schema;
const movieSchema = new schema({
    name:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true

    },
    image:{
        type:String,
        required:true

    },
    genres:{
        type:String,
        required:true

    },
    url:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("movies",movieSchema);