const {validationResult} = require('express-validator');

module.exports = (req, res, next) => {
  const {errors} = validationResult(req);
  if (errors && errors.length > 0) {
    res.status(500).send(errors);
  } else {
    next();
  }
};
