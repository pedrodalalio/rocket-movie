const { Router } = require("express"); 

const MovieTagsController = require("../controllers/MovieTagsController")

const movieTagsRoutes = Router();

const movieTagsController = new MovieTagsController();

movieTagsRoutes.get("/", movieTagsController.index);
movieTagsRoutes.get("/:id", movieTagsController.show);
movieTagsRoutes.post("/", movieTagsController.create);
movieTagsRoutes.put("/:id", movieTagsController.update);
movieTagsRoutes.delete("/:id", movieTagsController.delete);

module.exports = movieTagsRoutes;