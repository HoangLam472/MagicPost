const Users = require("../models/users")


class UserControllers {
    // get /user
    user(req, res, next) {
        Users.find({})
        .then(users => res.json(users))
        .catch(next)
    }

    create(req, res, next) {
        res.render('create');
    }

    // post/ user
    createuser(req, res, next) {
        const pointManagerId = req.params.pointManagerId;
         const newEmployeeData = req.body;
         Users.updateOne(
            { 'managedAccounts._id': pointManagerId },
            { $push: { 'managedAccounts.$.managedEmployees': newEmployeeData } }
          )
            .then(() => {
              res.status(200).send('Employee added to pointManager successfully');
            })
            .catch((error) => {
              console.error('Error adding Employee to pointManager:', error);
              res.status(500).send('Internal Server Error');
            });
        // res.send(req.body)
    }

}

module.exports = new UserControllers;