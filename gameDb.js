var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dog_app");

var mapSchema = new mongoose.Schema({
    name: String,
    level: Number,
    floors: {
        colors: Number,
        layout: Number 
    },
    background: {
        colors: Number,
        envObjects: {
            count: Number,
            id: Number
        }
    },
    monsters: [{
        count: Number,
        id: Number
    }],
    
});
var floorColorsSchema = new mongoose.Schema({
    name: String,
    id: Number,
    colorPrimary: {
        red: Number,
        green: Number,
        blue: Number
    },
    colorSecondary: {
        red: Number,
        green: Number,
        blue: Number
    }
});
var floorLayout = new mongoose.Schema({
    name: String,
    id: Number,
    floor: [{
       xLeft: Number,
       xRight: Number,
       yHeight: Number,
       yThickness: Number
    }],
});
var backgroundColorsSchema = new mongoose.Schema({
    name: String,
    id: Number,
    colorPrimary: {
        red: Number,
        green: Number,
        blue: Number
    },
    colorSecondary: {
        red: Number,
        green: Number,
        blue: Number
    }
});
var backgroundObjects = new mongoose.Schema({
    //clouds etc
});
var floorsObjects = new mongoose.Schema({
    //rocks etc
});