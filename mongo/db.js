/**
 * Wrapper module for mongoose configuration and schema exports
 */
const mongoose = require('mongoose');
const HistoryModel = require('./schemas/history.model');
const ProfileModel = require('./schemas/profile.model');
const PortfolioModel = require('./schemas/portfolio.model');

const mongodbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/local';
mongoose.connect(mongodbUrl);

/**
 * Export all schemas
 */
exports.History = HistoryModel;
exports.Profile = ProfileModel;
exports.Portfolio = PortfolioModel;