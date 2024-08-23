import e from "express";
const router = e.Router();
import {
  movieCreate,
  movieDelete,
  movieRead,
  movieUpdate,
} from "../Controllers/movies.controllers.js";

// --> CRUD Operations

// Create movie
router.post("/", movieCreate);

// Read movies
router.get("/", movieRead);

// Update movies
router.put("/:id", movieUpdate);

// Delete movies
router.delete("/:id", movieDelete);

export default router;
