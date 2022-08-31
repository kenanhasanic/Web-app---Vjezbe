window.onload = function () {
    VjezbeAjax.dohvatiPodatke(vratiVjezbeObjekat);
}

function vratiVjezbeObjekat(error, data) {
    if (error == null) {
        VjezbeAjax.iscrtajVjezbe(document.getElementsByClassName('container-vjezbe')[0], JSON.parse(data));
        var paragrafi = document.getElementsByClassName('paragraf');
        var vjezbeDivovi = document.getElementsByClassName('vjezba');
        var objekat = JSON.parse(data);
        var brojZad = objekat.brojZadataka;
        for(let i = 0; i < paragrafi.length; i++){
            paragrafi[i].addEventListener("click", function(){
                if(document.getElementsByClassName('vjezba')[i].getElementsByClassName('zadaci').length == 0)
                    VjezbeAjax.iscrtajZadatke(vjezbeDivovi[i],brojZad[i])
                else{
                    if(document.getElementsByClassName('vjezba')[i].getElementsByClassName('zadaciPrazan').length!=0){
                        document.getElementsByClassName('vjezba')[i].getElementsByClassName('zadaci')[0].style = "";
                        document.getElementsByClassName('vjezba')[i].getElementsByClassName('zadaci')[0].style.height = "55px";
                    }else{
                        document.getElementsByClassName('vjezba')[i].getElementsByClassName('zadaci')[0].style = "";
                    }
                }
                for(let j = 0; j < vjezbeDivovi.length; j++){
                    if(j==i) continue;
                    for(let k = 0; k < document.getElementsByClassName('vjezba')[j].getElementsByClassName('zadaci').length; k++){
                        document.getElementsByClassName('vjezba')[j].getElementsByClassName('zadaci')[k].style.display = "none";
                    }
                }
            });
        }
    } else return error.responseText;
}