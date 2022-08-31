const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Zadatak = sequelize.define("zadatak",{
        ime:Sequelize.STRING
    })
    return Zadatak;
};
