window.onload = function () {
    var element = document.getElementById("dugme");
    element.addEventListener("click", function(){ 
    
        var element1 = document.getElementById("grupa")
        var element2 = document.getElementById("index")
        var objekat = {"grupa": element1.value}
    
        StudentAjax.postaviGrupu(element2.value,objekat,(err,data)=>{
            var element1 = document.getElementById("ajaxstatus");

            element1.innerHTML = JSON.parse(data).status;
        });
    });
}


