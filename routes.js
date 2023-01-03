    const express = require('express')
    const routes = express.Router()

    routes.get('/', (req, res)=>{
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)

            conn.query('SELECT * FROM lenguajes', (err, rows)=>{
                if(err) return res.send(err)

                res.json(rows)
            })
        })
    })

    routes.post('/', (req, res)=>{
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)

            conn.query('INSERT * INTO lenguajes set ?', [req.body],(err, rows)=>{
                if(err) return res.send(err)

                res.json(rows)
            })
        })
    })

    routes.delete('/:id'. (req, res)=>{
        re.getConnection((err, conn)=>{
            if (err) return res.send(err);
            conn.query('DELETE FROM lenguajes WHERE id=?', [req.params.id], (err, rows)=>{
                if (err) return res.send(err);

                res.send('Registro Eliminado')
            })
        })
    })

    routes.put('/:id', (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err);
            conn.query('UPDATE lenguajes set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
                if (err) return res.send(err);
    
                res.send('Registro Actualizado!');
            });
        });
    });
    module.exports = routes