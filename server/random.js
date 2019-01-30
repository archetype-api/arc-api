const db = require("../db/db");

const getRandomInt = int => {
  return Math.floor(Math.random() * Math.floor(int));
};

module.exports = {
  random: (req, res, next) => {
    let id = getRandomInt(12);
    id += 1;
    let random = db.types.filter((e, i) => {
      return e.archetype_id === id;
    });

    res.status(200).send(random);
  }
};
