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
  role: {
    type: String,
    required: true
  },
  photoUrl: String,
  currentEmployer: String,
  currentUrl: String,
  location: String,
  locationMapLink: String,
  skills: [{ name: String, expert: Boolean }],
  interests: [],
  languages: [{ name: String, level: String }],
  certifications: [],
  twitterUrl: String,
  facebookUrl: String,
  linkedinUrl: String,
  googlePlusUrl: String,
  githubUrl: String,
  cvUrl: String
});

module.exports = mongoose.model('Profile', ProfileSchema);
