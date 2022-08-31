let assert = chai.assert;
describe('PosaljiPodatke', function () {
    /////////////////////////////////////////////////////////////////
  it('Testiranje funkcije posaljiPodatke - ispravni podaci poslani', function (done) {
    let rezultat = {
      "brojVjezbi": 2,
      "brojZadataka" : [4,4]
    }
    let ispravanResponse = JSON.stringify({
        brojVjezbi: 2,
        brojZadataka : [4,4]
    });
    VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
        assert.deepEqual(ispravanResponse,data);
        done();
    })
  });

  it('Testiranje funkcije posaljiPodatke - pogresni podaci poslani (brojZadataka)', function (done) {
    let rezultat = {
      "brojVjezbi": 2,
      "brojZadataka" : [4,4,4]
    }
    let ispravanResponse = JSON.stringify({
        status: "error",
        data : "Pogrešan parametar brojZadataka"
    });
    VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
        assert.deepEqual(ispravanResponse,data);
        done();
    })
  });

  it('Testiranje funkcije posaljiPodatke - pogresni podaci poslani (brojVjezbi,brojZadataka)', function (done) {
    let rezultat = {
      "brojVjezbi": 21,
      "brojZadataka" : [4,4,4]
    }
    let ispravanResponse = JSON.stringify({
        status: "error",
        data : "Pogrešan parametar brojVjezbi,brojZadataka"
    });
    VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
        assert.deepEqual(ispravanResponse,data);
        done();
    })
  });

  it('Testiranje funkcije posaljiPodatke - pogresni podaci poslani (brojVjezbi,z0,brojZadataka)', function (done) {
    let rezultat = {
      "brojVjezbi": 21,
      "brojZadataka" : [42,4,4]
    }
    let ispravanResponse = JSON.stringify({
        status: "error",
        data : "Pogrešan parametar brojVjezbi,z0,brojZadataka"
    });
    VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
        assert.deepEqual(ispravanResponse,data);
        done();
    })
  });

});




/////////////////////////////////////////////////////////////////
describe('DohvatiPodatke', function (done) {
    it('Testiranje funkcije DohvatiPodatke', function (done) {

        //treba uhvatit rezultat kao s pocetka testiranja sa ispravnim podacima
        let ispravanResponse = JSON.stringify({
            brojVjezbi: 2,
            brojZadataka : [4,4]
        });
        VjezbeAjax.dohvatiPodatke((err,data) =>{
            assert.deepEqual(ispravanResponse,data);
            done();
        })
        
      });
});

/////////////////////////////////////////////////////////////////
describe('DodajInputPolja', function () {
    it('Testiranje funkcije dodajInputPolja - ispravni podaci poslani', function () {
        let div = document.createElement("div");
        //document.getElementsByClassName('noviDiv')[0]
        VjezbeAjax.dodajInputPolja(div, 4);
        let nova = div.getElementsByClassName('inputDiv')
        assert.equal(nova.length, 4)
    });

    it('Testiranje funkcije dodajInputPolja - prekoracen limit broja vjezbi', function () {
        let div = document.createElement("div");
        div.className="noviDiv";
        VjezbeAjax.dodajInputPolja(div, 16);
        assert.equal(div.getElementsByClassName('inputDiv').length, 0)
    });

});

/////////////////////////////////////////////////////////////////
describe('IscrtajVjezbe', function (done) {
    it('Testiranje funkcije IscrtajVjezbe', function (done) {
        let ispravanResponse = JSON.stringify({
            brojVjezbi: 2,
            brojZadataka : [4,4]
        });
        let glavni = document.getElementById("divZaTestiranje");
        VjezbeAjax.dohvatiPodatke((err,data) =>{
            VjezbeAjax.iscrtajVjezbe(glavni,  JSON.parse(data));
            let brojDivovaPoslijeIscrtavanja = glavni.getElementsByClassName('vjezba');
            assert.equal(2,brojDivovaPoslijeIscrtavanja.length)
            glavni.style.display = "none";
            done();
        })
      });
});

/////////////////////////////////////////////////////////////////
describe('IscrtajZadatke', function () {
    it('Testiranje funkcije IscrtajZadatke', function (done) {
        let ispravanResponse = JSON.stringify({
            brojVjezbi: 2,
            brojZadataka : [4,4]
        });
        let glavni = document.getElementById("divZaTestiranje");
        // let div = document.createElement("div");
        // glavni.appendChild(div)
        //div.className = "testni";
        VjezbeAjax.dohvatiPodatke((err,data) =>{
            VjezbeAjax.iscrtajVjezbe(glavni,  JSON.parse(data));
            let divoviPoslijeIscrtavanja = glavni.getElementsByClassName('vjezba');
            glavni.style.display = "none";
            var objekat = JSON.parse(data);
            var brojZad = objekat.brojZadataka;
            var brojVj = objekat.brojVjezbi;
            for(let i = 0; i < brojVj; i++){
                VjezbeAjax.iscrtajZadatke(divoviPoslijeIscrtavanja[i],  brojZad[i]);
            }
            assert.equal(4,glavni.children.length)
            
            done();
        })
      });
});