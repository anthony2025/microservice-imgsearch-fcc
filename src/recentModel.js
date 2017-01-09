const mongoose = require('mongoose')

// _id is implicit by default on all mongoose schemas
const recentTermSchema = new mongoose.Schema({
  term: {type: String, required: true},
  time: {type: Date, required: true}
})

// gets rid of _id and __v when printing to json
  .set('toJSON', {transform: function (doc, ret) {
    delete ret._id
    delete ret.__v
    return ret
  }})

module.exports = mongoose.model('RecentTerm', recentTermSchema)
