const Users = require("../models/users")


class UserControllers {
    // get /user
    user(req, res, next) {
        Users.find({})
        .then(users => res.json(users))
        .catch(next)
    }

    createepe(req, res, next) {
        res.render('createemployee');
    }
    createpmr(req, res, next) {
      res.render('createmanager');
  }
    // post/ user/ pointmanager tạo tài khoản mới
    createemployee(req, res, next) {
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
        // res.json(req.query.pointManagerId)
        // res.send(req.body)

    }

    createpointmanager(req, res, next) {
      const pointManagerId = req.params.pointManagerId;
       const newPointManagerData = req.body;
       Users.updateOne(
        { 'managedAccounts._id': pointManagerId },
        {
          $push: {
            'managedAccounts': newPointManagerData,
          },
        },
        )
          .then(() => {
            res.status(200).send('Employee added to pointManager successfully');
          })
          .catch((error) => {
            console.error('Error adding Employee to pointManager:', error);
            res.status(500).send('Internal Server Error');
          });
      // res.json(req.query.pointManagerId)
      // res.send(req.body)

  }

}

module.exports = new UserControllers;