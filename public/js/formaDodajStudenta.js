window.onload = function () {
    var element = document.getElementById("dugme");
    element.addEventListener("click", function(){ 
    
        var element1 = document.getElementById("ime")
        var element2 = document.getElementById("prezime")
        var element3 = document.getElementById("index")
        var element4 = document.getElementById("grupa")
        var objekat = {"ime": element1.value, "prezime": element2.value, "index": element3.value, "grupa": element4.value}
    
        StudentAjax.dodajStudenta(objekat,(err,data)=>{
            var element1 = document.getElementById("ajaxstatus");

            element1.innerHTML = JSON.parse(data).status;
        });
    });
}


