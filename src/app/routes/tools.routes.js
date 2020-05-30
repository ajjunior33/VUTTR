const {Router} = require("express");

const tools = Router();

tools.post("/", (req,res) => {
    return res.json({messager:" Hello, world"});
});

module.exports = tools;
