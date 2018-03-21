/**
 * Wrapper module for mongoose configuration and schema exports
 */
const mongoose = require('mongoose');
const SkillModel = require('./schemas/skill.model');
const CertificationModel = require('./schemas/certification.model');
const InterestModel = require('./schemas/interest.model');
const LanguageModel = require('./schemas/language.model');

const mongodbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/local';
mongoose.connect(mongodbUrl);

/**
 * Export all schemas
 */
exports.Skill = SkillModel;
exports.Certification = CertificationModel;
exports.Interest = InterestModel;
exports.Language = LanguageModel;