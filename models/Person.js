const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  profilepic: {
    type: String,
    default:
      "https://thumbs.dreamstime.com/b/portrait-young-businessman-standing-posing-hand-hip-person-formal-waistcoat-male-character-design-164735493.jpg",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Person = mongoose.model("myPerson", PersonSchema);
