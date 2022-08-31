var element = document.getElementById("dugmeZaPostavku")
element.addEventListener("click", function(){ 
    if(!(document.getElementById("brojVj").value <1 || document.getElementById("brojVj").value>15)){
        VjezbeAjax.dodajInputPolja(document.getElementById("brojZadataka"), document.getElementById("brojVj").value);
        element.disabled = true;
    }
});

var element2 = document.getElementById("dugme");
element2.addEventListener("click", function(){ 

    var lista = [];
    var broj = parseInt(document.getElementById("brojVj").value);
    for(var i = 0; i < document.getElementById("brojVj").value; i++){
        var brojZadataka = document.getElementById("z"+i).value;
        lista.push(brojZadataka);
    }  
    var objekat = {"brojVjezbi" : broj,"brojZadataka" : lista}

    VjezbeAjax.posaljiPodatke(objekat,(err,data)=>{});
});
