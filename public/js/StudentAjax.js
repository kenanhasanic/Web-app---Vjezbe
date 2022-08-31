const StudentAjax = (function () {

    var dodajStudenta = function(student,fnCallback){
        
        var objekat = {ime: student.ime, prezime: student.prezime, index: student.index, grupa: student.grupa}
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
                fnCallback(null, ajax.response)
            }
            else if (ajax.readyState == 4) {
                fnCallback(ajax.status, null)
            }
        }
        ajax.open("POST", "http://localhost:3000/student", true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(objekat));
    } 
    
    
    
    var postaviGrupu = function(index,grupa,fnCallback) {
        var objekat = {grupa: grupa.grupa}
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
                fnCallback(null, ajax.response)
            }
            else if (ajax.readyState == 4) {
                fnCallback(ajax.status, null)
            }
        }
        ajax.open("PUT", "http://localhost:3000/student/" + index.toString(), true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(objekat));
    }
    
    
    
    
    var dodajBatch = function (csvStudenti,fnCallback){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
                fnCallback(null, ajax.response)
            }
            else if (ajax.readyState == 4) {
                fnCallback(ajax.status, null)
            }
        }
        ajax.open("POST","http://localhost:3000/batch/student",true);
        ajax.setRequestHeader("Content-Type", "text/plain");
        ajax.send(csvStudenti);
    }


    return{
        dodajStudenta : dodajStudenta,
        postaviGrupu : postaviGrupu,
        dodajBatch : dodajBatch
    }

}());