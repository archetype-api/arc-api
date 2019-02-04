const db = require("../db/db");
module.exports = {
  combineTwo: (req, res, next) => {
    let primary = db.types.filter((e, i) => {
      return (
        e.name.includes(req.query.primary.toLowerCase()) ||
        e.alias.includes(req.query.primary.toLowerCase())
      );
    })[0];

    let secondary = db.types.filter((e, i) => {
      return (
        e.name.includes(req.query.secondary.toLowerCase()) ||
        e.alias.includes(req.query.secondary.toLowerCase())
      );
    })[0];

    let link = () => {
      let difference =
        Math.max(primary.archetype_id, secondary.archetype_id) -
        Math.min(primary.archetype_id, secondary.archetype_id);
      if (difference % 2 === 0) {
        return db.types.filter(
          e =>
            e.archetype_id ==
            db.wheel[primary.archetype_id][secondary.archetype_id]
        )[0];
      } else {
        return primary;
      }
    };
    let dualArchetype = {
      primary: primary.name,
      link: link().name,
      secondary: secondary.name,
      drive: primary.drive,
      method: secondary.method,
      aspect: link().aspect,
      role: link().role,
      shadow: link().shadow
    };
    res.status(200).send({
      success: "true",
      message: `archetype of ${req.query.primary}-${
        req.query.secondary
      } retrieved`,
      types: dualArchetype
    });
  }
};
