const VjezbeAjax = (function () {

    var dodajInputPolja = function (DOMelementDIVauFormi, brojVjezbi) {
        if(!(brojVjezbi <1 || brojVjezbi>15)){
            for (var i = 0; i < brojVjezbi; i++) {
                var noviDiv = document.createElement("div");
                var unosLabela = document.createElement("label");
                unosLabela.innerHTML = "Unesite broj zadataka vjezbe" + (i + 1).toString();
                var input = document.createElement("input");
                noviDiv.className = "inputDiv"
                input.setAttribute("type", "number");
                input.setAttribute("value", 4);
                input.setAttribute("name", "z" + i);
                input.setAttribute("id", "z" + i);
                noviDiv.appendChild(unosLabela);
                noviDiv.appendChild(input);
                DOMelementDIVauFormi.appendChild(noviDiv);
            }    
        }
    }

    var posaljiPodatke = function (vjezbeObjekat, callbackFja) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
                callbackFja(null, ajax.response);
            }
            else if (ajax.readyState == 4)
                callbackFja(ajax.status, null)
        }
        ajax.open("POST", "http://localhost:3000/vjezbe", true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(vjezbeObjekat));
    }

    var dohvatiPodatke = function (callbackFja) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
                callbackFja(null, ajax.response)
            }
            else if (ajax.readyState == 4) {
                callbackFja(ajax.status, null)
            }
        }
        ajax.open("GET", "http://localhost:3000/vjezbe/", true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send();
    }

    var iscrtajVjezbe = function(divDOMelement,objekat){
        for (var i = 0; i < objekat.brojVjezbi; i++) {
            var noviDiv = document.createElement("div");
            noviDiv.classList.add('vjezba', 'vjezba'+(i+1))
            
            var noviParagraf = document.createElement("p")
            noviParagraf.className="paragraf";
            noviParagraf.innerHTML="Vjezba "+(i+1).toString();

            noviDiv.appendChild(noviParagraf);
            divDOMelement.appendChild(noviDiv);
        }
    }

    var iscrtajZadatke = function(vjezbaDOMelement,brojZadataka){
        var div = document.createElement("div");
        div.classList.add("zadaci");

        if(brojZadataka==0){
            div.style.height = "55px"
            div.classList.add("zadaciPrazan");
            vjezbaDOMelement.appendChild(div);
        }else{
            for(var i = 0; i < brojZadataka; i++){
                var zadatak = document.createElement("div");
                zadatak.className="zadatak";
                var noviParagraf = document.createElement("p")
                noviParagraf.innerHTML="Zadatak "+(i+1).toString();
                zadatak.appendChild(noviParagraf);
                div.appendChild(zadatak);
            }
            vjezbaDOMelement.appendChild(div);
        }
    }

    return {
        dodajInputPolja: dodajInputPolja,
        posaljiPodatke: posaljiPodatke,
        dohvatiPodatke: dohvatiPodatke,
        iscrtajVjezbe : iscrtajVjezbe,
        iscrtajZadatke : iscrtajZadatke
    }
}());