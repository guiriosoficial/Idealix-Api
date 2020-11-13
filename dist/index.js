"use strict";

require("reflect-metadata");

var _typeorm = require("typeorm");

var _User = require("./entity/User");

(0, _typeorm.createConnection)().then(async connection => {
  console.log("Inserting a new user into the database...");
  const user = new _User.User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;
  await connection.manager.save(user);
  console.log("Saved a new user with id: " + user.id);
  console.log("Loading users from the database...");
  const users = await connection.manager.find(_User.User);
  console.log("Loaded users: ", users);
  console.log("Here you can setup and run express/koa/any other framework.");
}).catch(error => console.log(error));