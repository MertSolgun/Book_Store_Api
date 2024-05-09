const passEncrypt = require("../helpers/passEncrypt");
const user = require("../models/User");
const token = require("../models/Token");

module.exports = {
  list: async (req, res) => {
    const data = await user.find();
    res.status(200).send({
      data,
    });
  },
  delete: async (req, res) => {
    const data = await user.deleteOne({ _id: req.params.id });
    res.status(204).send({ data });
  },
  register: async (req, res) => {
    const data = await user.create(req.body);
    res.status(201).send({ data });
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
      const registerData = await user.findOne({ username, password });
      if (registerData && registerData.password == passEncrypt(password)) {
        //check-token

        let tokenData = await token.findOne({ userId: registerData._id });

        if (!tokenData) {
          const tokenKey = passEncrypt(registerData._id + Date.now());
          tokenData = await token.create({
            userId: registerData._id,
            token: tokenKey,
          });
        }
        res.status(200).send({
          token: tokenData.token,
          registerData,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong Username or Password.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please enter username and password.");
    }
  },
  logout: async (req, res) => {
    const auth = req.headers.authorization || null;
    const tokenKey = auth ? auth.split(" ") : null;

    let deleteUser = null;

    if (tokenKey && tokenKey[0] == "Token") {
      deleteUser = await token.deleteOne({ token: tokenKey[1] });
    }
    res.status(204).send({
      message: "Logout: Token Deleted",
      deleteUser,
    });
  },
};
