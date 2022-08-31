let chai = require('chai')
let assert=require('chai').assert
let server = require('../../index.js')
let http = require('http')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
let should = require('chai').should()
const db = require('../js/db.js');

// function resetiranjeBaze(done) {
//     db.Grupa.destroy({
//         truncate: true,
//     });
//     db.Student.destroy({
//         truncate: true,
//     });
//     db.Zadatak.destroy({
//         truncate: true,
//     });
//     db.Vjezba.destroy({
//         truncate: true,
//     });
//     done();
// }

describe('Testiranje', function(){
    //  before(resetiranjeBaze)

    it('Test dodavanja studenta koji ne postoji u bazi', function(done){
        chai.request(server)
        .post('/student')
        .set('content-type', 'application/json')
        .send({
            ime: "Kenan",
            prezime: "Hasanic",
            index: "18672",
            grupa: "grupa1"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Kreiran student!")
            done()
        })
    });

    it('Test dodavanja studenta koji postoji u bazi', function(done){
        chai.request(server)
        .post('/student')
        .set('content-type', 'application/json')
        .send({
            ime: "Kenan",
            prezime: "Hasanic",
            index: "18672",
            grupa: "grupa1"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Student sa indexom 18672 već postoji!")
            done()
        })
    });


    it('Testiranje rute postaviGrupu ukoliko student postoji!', function(done){
        chai.request(server)
        .put('/student/18672')
        .set('content-type', 'application/json')
        .send({
            grupa: "grupa2"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Promjenjena grupa studentu 18672")
            done()
        })
    });

    it('Testiranje rute postaviGrupu ukoliko student ne postoji!', function(done){
        chai.request(server)
        .put('/student/186722')
        .set('content-type', 'application/json')
        .send({
            grupa: "grupa2"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Student sa indexom 186722 ne postoji!")
            done()
        })
    });

    
});
