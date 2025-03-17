function doClick(){
    alert('You Clicked!')
}
function changeText(id){
    id.innerHTML='You Clicked!';
}
function changeTEXT(){
    var heading=document.getElementById('heading');
    heading.innerHTML='You Clicked';
}
function showDate(){
   var time= document.getElementById('time');
    time.innerHTML =Date();
}
function clearDate(){
    var time=document.getElementById('time');
    time.innerHTML='';
}