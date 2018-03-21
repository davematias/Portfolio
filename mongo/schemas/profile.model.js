/**
 * Schema for the user general profile
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  roles: Array,    
  kind: {
    type: String,
    required: true
  },
  location: String,
  locationMapLink: String,
  topSkills: Array,
  twitterLink: String,
  facebookLink: String,
  linkedinLink: String,
  googlePlussLink: String,
  githubLink: String
});

module.exports = mongoose.model('Profile', ProfileSchema);
