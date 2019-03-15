const Express = require('express');
const bodyparser = require('body-parser');
const app = Express();



//add bodyparser middleware
app.use(bodyparser.json());

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

//update user
app.put('/update/:id', (req, res) => {

    const requestID = req.params.id;

    let putuser = userList.filter((res) => {
        return res.user_id == requestID
    })[0];
    const index = userList.indexOf(putuser);
    const key = Object.keys(req.body);
    console.log("--> " + key);
    key.forEach(k => {
        putuser[key] = req.body[key];
    });

    userList[index] = putuser;
    res.send(putuser);

});


app.delete('/delete/:id', (req, res) => {
    const removeID = req.params.id;

    userList.forEach(elem => {
        if (elem.user_id == removeID) {
            const index = userList.indexOf(elem);
            console.log("remove index -> " + index);
            userList.splice(index, 1);
            res.send(elem);
        } else {

        }



    });
});



app.listen(3000);
