const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const { json } = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./public/js/db.js');
const { student } = require('./public/js/db.js');
const { status } = require('express/lib/response');

app.use(express.static('public'));
app.use(express.static('public/html'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/images'));
app.use(express.text());

app.post("/student", function (req, res) {
    let imeStudenta = req.body.ime;
    let prezimeStudenta = req.body.prezime;
    let indexStudenta = req.body.index;
    let grupaStudenta = req.body.grupa;
    db.student.findOne({ where: { index: indexStudenta } }).then(function (student) {
        let studentIzBaze = student;
        db.grupa.findOne({ where: { ime: grupaStudenta } }).then(function (grupa) {
            if (studentIzBaze == null) {
                let novaGrupa = { ime: grupaStudenta };
                var novi = { ime: imeStudenta, prezime: prezimeStudenta, index: indexStudenta, grupa: grupaStudenta };
                if (grupa == null) {
                    db.grupa.create(novaGrupa).then(function (k1) {
                        novi.grupaId = k1.dataValues.id;
                        db.student.create(novi).then(function (k) {
                            return new Promise(function (resolve, reject) {
                                //////////
                                console.log("napravilo studenta")
                                resolve(k);
                            });
                        });
                        return new Promise(function (resolve, reject) {
                            ///////////////
                            console.log("napravilo grupu");
                            resolve(k1);
                        });
                    });
                    res.status(200).json({ status: "Kreiran student!" });
                } else {
                    novi.grupaId = grupa.dataValues.id;
                    db.student.create(novi).then(function (k) {
                        return new Promise(function (resolve, reject) {
                            //////////
                            console.log("napravilo studenta")
                            resolve(k);
                        });
                    });
                    res.status(200).json({ status: "Kreiran student!" });
                }
            } else {
                res.status(200).json({ status: 'Student sa indexom ' + indexStudenta + ' već postoji!' });
            }
        });
    });
});//kraj


app.put("/student/:index", function (req, res) {

    let indexStudenta = req.params.index;
    let grupaStudenta = req.body.grupa;

    db.student.findOne({ where: { index: indexStudenta } }).then(function (student) {
        let studentIzBaze = student;
        db.grupa.findOne({ where: { ime: grupaStudenta } }).then(function (grupa) {
            if (studentIzBaze != null) {
                let novaGrupa = { ime: grupaStudenta };
                if (grupa == null) {
                    db.grupa.create(novaGrupa).then(function (k1) {
                        student.set({ grupaId: k1.dataValues.id });
                        student.save();
                        return new Promise(function (resolve, reject) {
                            ///////////////
                            console.log("napravilo grupu");
                            resolve(k1);
                        });
                    });
                    res.status(200).json({ status: "Promjenjena grupa studentu " + indexStudenta });
                } else {
                    student.set({ grupaId: grupa.dataValues.id });
                    student.save();
                    res.status(200).json({ status: "Promjenjena grupa studentu " + indexStudenta });
                }
            } else {
                res.status(200).json({ status: 'Student sa indexom ' + indexStudenta + ' ne postoji!' });
            }
        });
    });

});//kraj

app.post('/batch/student', function (req, res) {

    var nizStudenata = req.body.split('\n');
    var postojeciStudenti = [];
    var promisi = [];
    var indexiStudenataKojiPostoje = [];
    var unikatniIndexi = [];
    for (let index = 0; index < nizStudenata.length; index++) {
        let postoji = false;
        var studentParametri = nizStudenata[index].split(",");
        for (let j = 0; j < unikatniIndexi.length; j++) {
            if (studentParametri[2] == unikatniIndexi[j]) {
                postoji = true;
            }
        }
        indexiStudenataKojiPostoje.push(studentParametri[2]);
        if (!postoji) unikatniIndexi.push(studentParametri[2]);
    }

    for (let i = 0; i < nizStudenata.length; i++) {
        var nizAtributaStudenta = nizStudenata[i].split(",");
        let studentIzNiza = { ime: nizAtributaStudenta[0], prezime: nizAtributaStudenta[1], index: nizAtributaStudenta[2], grupa: nizAtributaStudenta[3] }
        promisi.push(db.student.findOne({ where: { index: studentIzNiza.index } }).then(function (studentIzBaze) {
            if (studentIzBaze != null) {
                postojeciStudenti.push(studentIzNiza);
            }
            else {
                var studentZaKreiranje = { ime: studentIzNiza.ime, prezime: studentIzNiza.prezime, index: studentIzNiza.index };
                db.grupa.findOne({ where: { ime: studentIzNiza.grupa } }).then(function (grupaIzBaze) {
                    if (!grupaIzBaze) {
                        var novaGrupa = { ime: studentIzNiza.grupa };

                        db.grupa.create(novaGrupa).then(function (kreiranaGrupa) {
                            studentZaKreiranje.grupaId = kreiranaGrupa.dataValues.id;
                            db.student.create(studentZaKreiranje).then(function (kreiranStudent) {
                                return new Promise(function (resolve, reject) { resolve(kreiranStudent); });
                            })
                            return new Promise(function (resolve, reject) { resolve(kreiranaGrupa); });
                        })
                    }
                    else {
                        studentZaKreiranje.grupaId = grupaIzBaze['id'];
                        db.student.create(studentZaKreiranje).then(function (kreiranStudent) {
                            return new Promise(function (resolve, reject) { resolve(kreiranStudent); });
                        })
                    }
                });
            }
        }))
    }
    Promise.all(promisi)
        .then(results => {
            if (postojeciStudenti === undefined || postojeciStudenti.length == 0) {
                res.status(200).json({ status: "Dodano " + unikatniIndexi.length + " studenata!" });
            }
            else {
                var m = nizStudenata.length - postojeciStudenti.length;
                var output = "";
                let counter = 0;
                for (var j = 0; j < indexiStudenataKojiPostoje.length; j++) {
                    if (postojeciStudenti.find(element => element.index == indexiStudenataKojiPostoje[j])) {
                        if (counter != postojeciStudenti.length - 1) {
                            output = output + indexiStudenataKojiPostoje[j] + ",";
                        }
                        else {
                            output = output + indexiStudenataKojiPostoje[j];
                        }
                        counter++;
                    }
                }
                res.status(200).json({ status: "Dodano " + m + " studenata, a studenti " + output + " već postoje!" });
            }
        });
});



//koristim npr kad hocu u divu ispisat vjezbe kolko ih ima i pozovem get i dobijem podatke
app.get('/vjezbe/', function (req, res) {
    db.vjezba.findAll().then((sveVjezbe) => {
        db.zadatak.findAll().then((sviZadaci) => {
            let brojZadataka = [];
            for (let i = 0; i < sveVjezbe.length; i++) {
                var brojac = 0;
                for (let j = 0; j < sviZadaci.length; j++) {
                    if (sveVjezbe[i].id == sviZadaci[j].vjezbaId) {
                        brojac++;
                    }
                }
                brojZadataka.push(brojac);
            }
            res.json({ brojVjezbi: sveVjezbe.length, brojZadataka: brojZadataka });
        })
    })




    // fs.readFile('vjezbe.csv', (err, data) => {
    //     var string = data.toString().split(',');
    //     var brojUkupnihVjezbi = 0;
    //     var nizZadatakaPoVjezbi = [];


    //     for (var i = 0; i < string.length; i++) {
    //         if (i == 0) {
    //             brojUkupnihVjezbi = parseInt(string[i]);
    //         } else {
    //             nizZadatakaPoVjezbi.push(parseInt(string[i]));
    //         }
    //     }


    //     var x = "";
    //     var greska = false;
    //     var trebaZarez = false;

    //     if (brojUkupnihVjezbi < 0 || brojUkupnihVjezbi > 15) {
    //         x += "brojVjezbi";
    //         greska = true;
    //         trebaZarez = true;
    //     }

    //     for (var i = 0; i < nizZadatakaPoVjezbi.length; i++) {
    //         if (nizZadatakaPoVjezbi[i] < 0 || nizZadatakaPoVjezbi[i] > 10) {
    //             if (trebaZarez) {
    //                 x += ",";
    //             }
    //             x += "z" + (i).toString();
    //             greska = true;
    //             trebaZarez = true;
    //         }
    //     }

    //     if (brojUkupnihVjezbi != nizZadatakaPoVjezbi.length) {
    //         if (trebaZarez) {
    //             x += ",";
    //         }
    //         x += "brojZadataka";
    //         greska = true;
    //         trebaZarez = true;

    //     }


    //     if (greska == true) {
    //         res.json({ status: "error", data: "Pogrešan parametar " + x });
    //     }

    //     res.json({ brojVjezbi: brojUkupnihVjezbi, brojZadataka: nizZadatakaPoVjezbi });
    // }) 
});

app.post('/vjezbe', function (req, res) {
    var brojVjezbi = req.body.brojVjezbi;
    var brojZadataka = req.body.brojZadataka;

    var x = "";
    var greska = false;
    var trebaZarez = false;

    if (brojVjezbi < 0 || brojVjezbi > 15) {
        x += "brojVjezbi";
        greska = true;
        trebaZarez = true;
    }

    for (var i = 0; i < brojZadataka.length; i++) {
        if (brojZadataka[i] < 0 || brojZadataka[i] > 10) {
            if (trebaZarez) {
                x += ",";
            }
            x += "z" + (i).toString();
            greska = true;
            trebaZarez = true;
        }
    }

    if (brojVjezbi != brojZadataka.length) {
        if (trebaZarez) {
            x += ",";
        }
        x += "brojZadataka";
        greska = true;
        trebaZarez = true;

    }

    if (greska == true) {
        console.log("poslalo pogresan parametar")
        res.send({ status: "error", data: "Pogrešan parametar " + x });
        return;
    }

    for (let i = 0; i < brojVjezbi; i++) {
        var vjezbaZaKreiranje = { ime: "vjezba" + (i + 1).toString() }
        db.vjezba.create(vjezbaZaKreiranje).then((vjezba) => {
            for (let j = 0; j < brojZadataka[i]; j++) {
                var zadatak = { ime: "zadatak" + (j + 1).toString() }
                zadatak.vjezbaId = vjezba.dataValues.id;
                db.zadatak.create(zadatak);
            }
        })
    }
    res.send({ brojVjezbi: brojVjezbi, brojZadataka: brojZadataka });

    // let upis = brojVjezbi.toString() + ","
    // for (let i = 0; i < brojZadataka.length; i++) {
    //     if (i == brojZadataka.length - 1)
    //         upis += brojZadataka[i]
    //     else
    //         upis += brojZadataka[i] + ","
    // }
    // fs.writeFile('vjezbe.csv', upis, (err) => {

    //     if (greska != true)
    //         console.log("poslalo tacan parametar")
    //     res.send({ brojVjezbi: brojVjezbi, brojZadataka: brojZadataka });
    //     return;
    // })
});


db.sequelize.sync({ force: true }).then((req) => {
    app.listen(3000, () => { console.log("Dignut server!") });
});

module.exports = app