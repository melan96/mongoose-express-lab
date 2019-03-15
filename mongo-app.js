//const dependencies mongoose
const mongoose = require('mongoose');
const express = require('express');

const app = express();


mongoose.connect('mongodb+srv://melan96:melan96@mongo-todo-yebxu.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
    .then(() => {
        console.log('Connect to database');
    })
    .catch(err => {
        console.log(err);
    })

const userSchema = new mongoose.Schema({

    firstName: String,
    secondName: String,
    user_id: Date,
    birthday: Date
});

const User = mongoose.model('user', userSchema);

// const user = new User({
//     firstName: "fn2",
//     secondName: "sn2",
//     user_id: Date.now(),
//     birthday: new Date('December 18, 1995 03:24:00')
// })

// user.save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// const user2 = new User({
//     firstName: "fn2 - user 2",
//     secondName: "sn2 - user 2",
//     user_id: Date.now(),
//     birthday: new Date('December 18, 1995 03:24:00')
// })

// user2.save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

app.get('/users', (req, res) => {
    User.find({}, (err, doc) => {
        if (!err) {
            res.send(doc);

        } else {
            console.log(err);
        }
    });
});

app.get('/user/:id', (req, res) => {
    const req_id = req.params.id;
    console.log(req_id);
    User.find({ _id: req_id }, (err, docs) => {
        if (!err) {
            res.send(docs);
            console.log("see");
        } else {
            console.log("Error");
            res.sendStatus(404);
        }
    })


})

app.listen(3000);