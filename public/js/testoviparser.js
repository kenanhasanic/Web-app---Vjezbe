var TestoviParser = (function () {
  var dajTacnost = function (json) {
    var objekat = {
      "tacnost": "nekiProcenat",
      "greske": []
    };
    try {
      var json = JSON.parse(json)

      //trazenje tacnosti testova
      var brojTestova = json.stats.tests
      var brojUspjesnihTestova = json.stats.passes
      var procenatTacnosti = brojUspjesnihTestova / brojTestova * 1000;
      procenatTacnosti = Math.round(procenatTacnosti)/10
      procenatTacnosti = JSON.stringify(procenatTacnosti) + "%";

      //broj tacnosti unesen u objekat pod kljucem tacnost
      objekat.tacnost = procenatTacnosti;

      //ako tacnost nije jednaka 100% onda dodajemo naslove u niz greske
      if (json.stats.passes != json.stats.tests) {
        var nizPogresnihTestova = json.failures;
        Object.values(nizPogresnihTestova).forEach(element => {

          //push-anje naslova pogresno uradjenih testova
          objekat.greske.push(element.fullTitle)
        })
      }
      return objekat
    } catch (error) {
      objekat.tacnost = "0%";
      objekat.greske.push("Testovi se ne mogu izvršiti");
      return objekat;
    }


  }
  var porediRezultate = function (rezultat1, rezultat2) {

    var orginalniJsonRez1 = rezultat1
    var orginalniJsonRez2 = rezultat2
    var rezultat1 = JSON.parse(rezultat1)
    var rezultat2 = JSON.parse(rezultat2)


    //testiranje na jednakost testova poslanih json objekata
    var istiRezlutati = true;
    if (rezultat1.stats.tests == rezultat2.stats.tests) {
      Object.values(rezultat1.tests).forEach(elementRez1 => {
        var postojiIsti = false
        Object.values(rezultat2.tests).forEach(elementRez2 => {
          if (elementRez1.fullTitle == elementRez2.fullTitle) {
            postojiIsti = true;
          }
        })
        if (!postojiIsti) {
          istiRezlutati = false;
        }
      })
    } else {
      istiRezlutati = false;
    }

    var objekat = {
      "promjena": "x%",
      "greske": []
    }

    //ako su poslani rezultati jednaki
    if (istiRezlutati) {
      objekat.promjena = TestoviParser.dajTacnost(orginalniJsonRez2).tacnost
      Object.values(rezultat2.failures).forEach(elementRez2 => {
        objekat.greske.push(elementRez2.fullTitle)

      })
      objekat.greske.sort()

      //ako su poslani rezultati razliciti
    } else {
      var rez1NeuspjesniTestovi = []
      var rez2NeuspjesniTestovi = []
      var brojac = 0
      Object.values(rezultat1.failures).forEach(elementRez1 => {
        var postojiIsti = false
        Object.values(rezultat2.tests).forEach(elementRez2 => {
          if (elementRez1.fullTitle == elementRez2.fullTitle) {
            postojiIsti = true;
          }
        })
        if (!postojiIsti) {
          //formiranje niza naslova sa neuspjesnim testovima rezultata1 koji se ne nalaze u rezultatu2
          rez1NeuspjesniTestovi.push(elementRez1.fullTitle)
          brojac++
        }
      })

      //formiranje niza naslova sa neuspjesnim testovima rezultata2
      Object.values(rezultat2.failures).forEach(elementRez2 => {
        rez2NeuspjesniTestovi.push(elementRez2.fullTitle)
      })

      objekat.promjena = (brojac + rezultat2.stats.failures) / (brojac + rezultat2.stats.tests) * 1000
      objekat.promjena = Math.round(objekat.promjena)/10
      objekat.promjena = JSON.stringify(objekat.promjena) + "%";

      //sortiranje nizova
      rez1NeuspjesniTestovi.sort()
      rez2NeuspjesniTestovi.sort()

      //dodavanje u niz greske
      Object.values(rez1NeuspjesniTestovi).forEach(elementRez1 => {
        objekat.greske.push(elementRez1)
      })
      Object.values(rez2NeuspjesniTestovi).forEach(elementRez2 => {
        objekat.greske.push(elementRez2)
      })


    }

    return objekat
  }


  return {
    dajTacnost: dajTacnost,
    porediRezultate: porediRezultate
  }
})();
