const { Router } = require("express"); 

const MovieNotesController = require("../controllers/MovieNotesController")

const movieNotesRoutes = Router();

const movieNotesController = new MovieNotesController();

movieNotesRoutes.get("/", movieNotesController.index);
movieNotesRoutes.get("/:id", movieNotesController.show);
movieNotesRoutes.post("/", movieNotesController.create);
movieNotesRoutes.put("/:id", movieNotesController.update);
movieNotesRoutes.delete("/:id", movieNotesController.delete);

module.exports = movieNotesRoutes;