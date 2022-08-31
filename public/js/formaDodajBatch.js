window.onload = function () {
    var element = document.getElementById("dugme");
    element.addEventListener("click", function(){ 
    
        var element1 = document.getElementById("csv")
        StudentAjax.dodajBatch(element1.value,(err,data)=>{
            var element1 = document.getElementById("ajaxstatus");

            element1.innerHTML = JSON.parse(data).status;
        });
    });
}


