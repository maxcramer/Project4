const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/project4';
const secret = process.env.SECRET || 'onewheelisgod';
const port = process.env.PORT || 4000;

module.exports = {
  dbUri, secret, port
};
