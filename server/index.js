const express = require("express");
const db = require("../db/db");
const { json } = require("body-parser");
const dual = require("./dual");
const single = require("./single");
const compare = require("./compare");
const drama = require("./drama");

const app = express();
app.use(json());

app.get("/api/test", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "test retrieved",
    test: db.test
  });
});

// Single Layer Queries

app.get("/api/types", single.allTypes);

app.get("/api/types/name/:name", single.byName);

app.get('/api/types/role/:role', single.byRole);

app.get("/api/types/aspect/:aspect", single.byAspect);

app.get("/api/types/drive/:drive", single.byDrive);

app.get("/api/types/method/:method", single.byMethod);

app.get("/api/types/shadow/:shadow", single.byShadow);

// Two layer queries || DUAL QUERIES

app.get("/api/types/dual", dual.combineTwo);

//Two layer queries || RETURN COMBO

app.get("/api/types/compare", compare.compareTwo);

// DRAMA QUERIES

app.get("/api/drama", drama.allDrama);
app.get("/api/drama/common", drama.commonDrama);
app.get("/api/drama/uncommon", drama.uncommonDrama);

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
