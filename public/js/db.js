const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt2118672","root","password",{host:"localhost",dialect:"mysql",logging:false});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.grupa = require("./Grupa.js")(sequelize);
db.student = require("./Student.js")(sequelize);
db.vjezba = require("./Vjezba.js")(sequelize);
db.zadatak = require("./Zadatak.js")(sequelize);

//relacije
// Veza 1-n vise knjiga se moze nalaziti u biblioteci
db.vjezba.hasMany(db.zadatak,{as:'zadaciVjezbe'});
db.grupa.hasMany(db.student,{as:'studentiGrupe'});

// Veza n-m autor moze imati vise knjiga, a knjiga vise autora
// db.autorKnjiga=db.knjiga.belongsToMany(db.autor,{as:'autori',through:'autor_knjiga',foreignKey:'knjigaId'});
// db.autor.belongsToMany(db.knjiga,{as:'knjige',through:'autor_knjiga',foreignKey:'autorId'});


module.exports=db;