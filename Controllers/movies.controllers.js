export const movieRead = (req, res) =>{
    res.send('read movies')
    console.log("get movies")
}

export const movieCreate = (req, res) =>{
    res.send('create movies')
    console.log("post movies")
}

export const movieUpdate = (req, res) =>{
    res.send('update movies')
    console.log("put movies")
}

export const movieDelete = (req, res) =>{
    res.send('delete movies')
    console.log("delete movies")
}