const { model, models, Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema( {
  name: {type: String, required: true},
  parent: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: [{type:Object}]
})

export const Category = models?.Category || model('Category', categorySchema);