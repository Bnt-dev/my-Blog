const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const CardControllers = require("./controllers/CardController");

router.get("/cards", CardControllers.browse);
// router.get("/ninjas/:id", ninjasControllers.read);
// router.put("/ninjas/:id", ninjasControllers.edit);
// router.post("/ninjas", ninjasControllers.add);
// router.delete("/ninjas/:id", ninjasControllers.destroy);

module.exports = router;
