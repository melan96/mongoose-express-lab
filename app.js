const Express = require('express');

const app = Express();


//render static content
app.use('/static', Express.static(__dirname + '/public/static-content'));

const user = {
    firstName: String,
    secondName: String,
    user_id: Date.now(),
    birthday: Date
}

const userList = [];
setTimeout(() =>
    userList.push({
        firstName: "fn",
        secondName: "sn",
        user_id: Date.now(),
        birthday: new Date('December 17, 1995 03:24:00')
    }), 230);
userList.push({
    firstName: "fn2",
    secondName: "sn2",
    user_id: Date.now(),
    birthday: new Date('December 18, 1995 03:24:00')
});


app.get('/getusers', (req, res) => {


    if (userList.length != null) {

        userList.forEach(element => {
            let userList = [];
            userList.push(element);
            console.log(element.user_id);

        });
        res.send(userList);

    } else {
        res.status(404);
    }
})

app.get('/user/:id', (req, res) => {
    let userID = req.params.id;

    userList.forEach(elem => {
        if (elem.user_id == userID) {
            res.send(elem);
        }
    });
})





app.listen(3000);