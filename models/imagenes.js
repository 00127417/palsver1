var mongoose = require('mongoose');
var schema = mongoose.Schema;

var img_schema = new schema({
    post:{type: String},
    title:{type: String},
    path: {type: String}
});

var Imagen = mongoose.model("Imagen",img_schema);

module.exports = Imagen;