import e from "express";
const router = e.Router();
import {
    movieCreate,
    movieDelete,
    movieRead,
    movieUpdate
} from '../Controllers/movies.controllers.js'
// --> crud Operations

//create movie
router.post('/', movieCreate)


// read movies
router.get('/', movieRead)

//update movies
router.put('/:id', movieUpdate)

//delete movies
router.delete('/:id', movieDelete)

export default router;