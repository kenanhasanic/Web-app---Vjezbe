const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Vjezba = sequelize.define("vjezba",{
        ime:Sequelize.STRING
    })
    return Vjezba;
};
