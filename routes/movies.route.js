import e from "express";
const router = e.Router();

// CRUD Operations

//create movie
router.post('/',(req, res)=>{
    res.send('create movies')
    console.log("post movies")
})


// read movies
router.get('/',(req, res)=>{
    res.send('read movies')
    console.log("get movies")

})

//update movies
router.put('/:id',(req, res)=>{
    res.send('update movies')
    console.log("put movies")

})

//delete movies
router.delete('/:id', (req, res)=>{
    res.send('delete movies')
    console.log("delete movies")

})

export default router;