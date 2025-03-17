if(1==1){
    console.log('This is true');
}
var var1=3;
var var2=4;
if(var1==var2 && var1==1 || var2==4){
    console.log('This is true');
}
else{
    console.log('This is false');
}

//switch case
var fruit='apple';

switch(fruit){
    case "banana":
        alert('I hate bananas');
    case "apple":
        alert('I love apples');
            break;
    case "orange": 
        alert('oranges are ok');
    default:
        alert('I love all other fruits');
        break;    
}