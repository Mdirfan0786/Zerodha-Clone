const { model } = require("mongoose");
const { userSchema } = require("../schemas/UsersSchema");

const UsersModel = new model("user", userSchema);

module.exports = { UsersModel };
