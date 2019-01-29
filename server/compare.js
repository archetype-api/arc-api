const db = require("../db/db");

module.exports = {
  compareTwo: (req, res, next) => {
    let primary = db.types.filter((e, i) => {
      return (
        e.name.includes(req.query.primary) ||
        e.alias.includes(req.query.primary)
      );
    });

    let secondary = db.types.filter((e, i) => {
      return (
        e.name.includes(req.query.secondary) ||
        e.alias.includes(req.query.secondary)
      );
    });

    let comparison = {
      primary: primary,
      secondary: secondary
    };

    res.status(200).send(comparison);
  }
};
