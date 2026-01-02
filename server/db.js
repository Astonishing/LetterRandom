const mongoose = require("mongoose");

const DbUri = "mongodb+srv://raqeebpython_db_user:FPLnXyM5LJ_76UF@cluster0.mjgifhp.mongodb.net/letterDb";

mongoose
  .connect(DbUri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));
