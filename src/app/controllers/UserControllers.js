const Users = require("../models/user");

class UserControllers {
  // get /user lấy toàn bộ tài khoản
  user(req, res, next) {
    Users.find({})
      .then((users) => {
        if (!users) {
          console.log("No users found."); // Log for debugging
          return res.json([]); // Return an empty array if no users
        }
  
        console.log("Users found:", users); // Log for debugging
        res.json(users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error); // Log for debugging
        next(error);
      });
  }
  

  createepe(req, res, next) {
    res.render("createemployee");
  }
  createpmr(req, res, next) {
    res.render("createmanager");
  }


  // post/ tạo tài khoản mới
   createUser(req, res, next) {
    const { userName, password, role, location } = req.body;

  const newUser = new Users({
    userName,
    password,
    role,
    location,
  });
  newUser.save()
    .then(savedUser => {
      // Respond with the saved user
      res.json(savedUser);
    })
    .catch(error => {
      // Handle errors
      console.error(error);
      next(error);
    });
   }


   finds(req, res, next)  {
    const { role } = req.query;
  
    // Create a conditions object based on provided query parameters
    const conditions = {};
  
    if (role) {
      conditions.role = role;
    }
   
    // Find users that match the specified conditions
    Users.find(conditions)
      .then(users => {
        // Respond with the found users
        res.json(users);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
        next(error);
      });
  }
}

module.exports = new UserControllers();
