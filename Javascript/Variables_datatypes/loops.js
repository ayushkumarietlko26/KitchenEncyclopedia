console.log('HELLO');
//for loop
for(var i=0;i<10;i++){
    console.log(i);
}

//while loop
var i=0
while(i<10){
    console.log(i);
    i++;
}

//for each loop
var numbers=[33,54,76,34,2,6];

numbers.forEach(function(number){
    console.log(number);
});

//arrays with for loop
for(var i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}