document.write("<h1>Cookies </h1>");
window.onload = function(){
    if(document.cookie.length !=0){
        var nameValueArray = document.cookie.split("=");
        document.getElementById('ddlname').value =nameValueArray[1];
        document.bgColor=nameValueArray[1];
    }
}

function setColorCookies(){
    var selectColor = document.getElementById("ddlname").value;
    if(selectColor != "Select Color"){
        document.bgColor = selectColor;
        document.cookie="Color ="+selectColor+";expires=Fir, 5 Aug 2023 01:00:00 UTC;"
    }
}