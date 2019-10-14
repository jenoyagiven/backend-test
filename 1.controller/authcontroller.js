const db = require("../database/index")

module.exports = {
    // MOVIE
    getMovie:(req, res) => {
        db.query(`select * from movies`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },

    addMovie:(req, res)=> {
        db.query(`insert into movies.nama, movies.tahun, movies.description values "${req.body.nama}", "${req.body.Tahun}", "${req.body.description}"`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
 },
 editMovie:(req, res)=> {
     db.query(`update movies set nama = "${req.body.nama}", description = "${req.body.description}", tahun = "${req.body.tahun}"
     where id = "${req.body.id}"`, (err, result) => {
        if(err) throw err
        res.send(result)
     })  
 },

 deleteMovie:(req, res) => {
     db.query(`delete from movies where id = "${req.params.id}`, (err, result) => {
         if(err) throw err
         res.send(result)
     })

 },
//  CATEGORIES
getCategories:(req, res) => {
    db.query(`select * from categories`, (err, result) => {
        if(err) throw err
        res.send(result)
    })
},

addCategories:(req, res)=> {
    db.query(`insert into categories.nama values "${req.body.nama}"`, (err, result) => {
        if(err) throw err
        res.send(result)
    })
},

editCategories:(req, res)=> {
    db.query(`update categories set nama = "${req.body.nama}"
    where id = "${req.query.id}"`, (err, result) => {
       if(err) throw err
       res.send(result)
    })  
},

deleteCategories:(req, res) => {
    db.query(`delete from categories where id = "${req.params.id}`, (err, result) => {
        if(err) throw err
        res.send(result)
    })

},

// movcat
getMovCat : (req, res) => {
    db.query(`select m.nama as movie, c.nama as category from movcat mc join movies m on m.id = mc.idmovie join categories c on c.id = mc.idcategory`, (err, result) => {
        try {
            if(err) throw err
            res.send(result)
        } catch (err) {
            console.log(err)
        }
    })
},

addMovCat : (req, res) => {
    let sql = `insert into movcat values ((select id from movies where nama = '${req.body.Name}'), (select id from categories where nama = '${req.body.nama}'))`
    db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
    })
},

deleteMovCat : (req, res) => {
    let sql = `delete from movcat where idmovie = ${req.query.idmovie} and idcategory = ${req.query.idcategory}`
    db.query(sql, (err, result) => {
            if(err) throw err
            res.send(`Successfully delete connection`)
        })
}


}