import Mock from "mockjs";
var menulist = require("../Data/head.json");
var nearby = require("../Data/list.json");
var neardetail = require("../Data/food.json");
Mock.mock("/lists", menulist);
Mock.mock("/nearby", nearby);
Mock.mock("/neardetail", neardetail);
export default Mock;