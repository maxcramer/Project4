const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/project4';
const secret = process.env.SECRET || 'onewheelisgod';

module.exports = {
  dbUri, secret
};
