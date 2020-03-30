/*Everything in Moongo starts with a schema. A schema maps to the MongoDB collection that defines the shape of the documents within that collection

Each contact collection has the shape of the Contact schema
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This indicates the shape of the documents that will be entring the database
const contactSchema = new Schema({
   firstName:
   {
      type: String,
      required: true
   },
   lastName:
   {
      type: String,
      required: true
   },
   email:
   {
      type: String,
      required: true
   },
   phone:
   {
      type: Number,
   },
   subject:
   {
      type: String,
      required: true
   },
   message:
   {
      type: String,
      required: true
   },
   dateCreated:
   {
      type: Date,
      default: Date.now()
   }
});

const contactModel = mongoose.model('Contact', contactSchema);

module.exports = contactModel;
/*
To use the contactSchema we need to convert it into a Model, to do so, we pass it into mongoose.model 
*/
