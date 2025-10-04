module.exports = {
  secret: process.env.SECRET || require('crypto').randomBytes(32).toString('hex')
};
