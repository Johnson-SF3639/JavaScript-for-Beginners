document.write("<h1>Events </h1>");

function OnMouseOver(){
    var control = document.getElementById('btn');
    control.style.color='red';
    control.style.background='white'
}
function OnMouseOut(){
    var control = document.getElementById('btn');
    control.style.color='white';
    control.style.background='black'
}
function OnClick(){
    if(confirm("Are you want to Submit the Massage.")){
        alert("You Clicked Ok");
        return true;
    }
    alert("You Clicked Canceled");
    return false;
}
function Validation(text){
    var currentId = document.getElementById(text);
    currentId.style.color='white';
    if(currentId.value != ""){
        currentId.style.background='green';
    }else{
        currentId.style.background='red';
    }


}

