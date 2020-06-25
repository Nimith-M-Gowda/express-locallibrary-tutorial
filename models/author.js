const { Mongoose } = require("mongoose");
let moment = require('moment')
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let AuthorSchema = new Schema({
    first_name : {type : String , required : true , maxlength : 1000},
    family_name : {type : String , required : true , maxlength : 1000},
    date_of_birth :{type : Date},
    date_of_death : {type : Date}
});

//Virtuals for author full name
AuthorSchema.virtual('name').get(function(){
    let full_name =  ' ';
    if(this.first_name && this.family_name){
        full_name = this.first_name +' , '+this.family_name ;
    }  
    else if (this.full_name || this.family_name){
        full_name = ' ';
    }
    return full_name
});
AuthorSchema.virtual('lifespan').get(function() {
    var lifetime_string = '';
    if (this.date_of_birth) {
      lifetime_string = moment(this.date_of_birth).format('MMMM Do, YYYY');
    }
    lifetime_string += ' - ';
    if (this.date_of_death) {
      lifetime_string += moment(this.date_of_death).format('MMMM Do, YYYY');
    }
    return lifetime_string;
  });

AuthorSchema.virtual('url').get(function() {
    return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Author',AuthorSchema)
