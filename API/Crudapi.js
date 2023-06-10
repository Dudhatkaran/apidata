const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

const schemalist = require('../MODEL/Schema');


//              post api

router.post('/add-todo', async (req, res) => {
    try {
        const todoAdd = await schemalist.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        })
        return res.send(todoAdd);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})



//              get api

router.get('/list-todo', async (req, res) => {
    try {
        const listTodo = await schemalist.find({});
        return res.send(listTodo);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})


//             edit api

router.get('/get-edit-todo/:id', async (req, res) => {
    try {
        const getdata = await schemalist.findById(req.params.id);
        return res.send(getdata);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})


//             update api

router.put('/update-todo/:id', async (req, res) => {
    try {
        const updatedata = await schemalist.findByIdAndUpdate(req.params.id, req.body);
        return res.send(updatedata);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
});


//              delete api

router.delete('/delete-todo/:id', async (req, res) => {
    try {
        const removeStudent = await schemalist.findByIdAndDelete(req.params.id);
        console.log(removeStudent);
        res.send({ message: 'The data was removed' })
    } catch (error) {
        return res.send(error)
    }
})





module.exports = router;