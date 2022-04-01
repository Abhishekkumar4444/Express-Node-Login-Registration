import userModel from "../model/User.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

class Usercontroller {
  static home = (req, res) => {
    res.render("index.ejs");
  };
  static register = (req, res) => {
    res.render("register.ejs");
  };

  // !creating new documnet using model without hash password

  // static createuserdoc = async (req, res) => {
  //   try {
  //     const doc = new userModel({
  //       firstname: req.body.firstname,
  //       lastname: req.body.lastname,
  //       email: req.body.email,
  //       phone: req.body.phone,
  //       address: req.body.address,
  //       password: req.body.password,
  //     });
  // *saving document
  //     let result = await doc.save();
  //     console.log(result);
  //* after saving the doc it will redirect to login page

  //     res.redirect("./login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //  ! creating new documnet using model with hash password

  static createuserdoc = async (req, res) => {
    const hashpassword = await bcrypt.hash(req.body.password, saltRounds);
    try {
      const doc = new userModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: hashpassword,
      });
      // *saving document
      let result = await doc.save();
      console.log(result);
      //*after saving the doc it will redirect to login page

      res.redirect("./login");
    } catch (error) {
      console.log(error);
    }
  };
  static login = (req, res) => {
    res.render("login.ejs");
  };
  static verifylogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email });

      if (result != null) {
        // ? comapring user given pass and hash password saved idn db

        const ismatchpass = await bcrypt.compare(password, result.password);
        if (result.email === email && ismatchpass) {
          console.log(result);
          res.send(`<h1>Dashboard------- ${result}</h1>`);
        } else {
          res.send("<h1>Email or Password not matched </h1>");
        }
      } else {
        res.send("<h1>User is not Registered</h1>");
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export default Usercontroller;
