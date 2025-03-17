//Similar to arrays

//Object literal
var person={
    firstName:'Ayush',
    lastName: 'Kumar',
    age: '20',
    children: ['Ayan','Krishna'],
    address:{
        street:'280',
        city: 'Bidhuna',
        state:'UP'
    },
    fullName:function(){
        return this.firstName +" "+this.lastName;
    }
}
console.log(person.firstName);
console.log(person.children[0]);
console.log(person.address);
console.log(person.address.state);
console.log(person.fullName());

//Object Constructor-> another way to create single objects
var apple=new Object();
apple.color='red';
apple.shape='round';
apple.describe=function(){
    return 'An apple is the color'+this.color+
    'and is the shape' + this.shape;
}

console.log(apple.describe())


//Constructor pattern-> Simple better way than constructor
function Fruit(name,color,shape){
    this.name=name;
    this.color=color;
    this.shape=shape;
    this.describe=function(){
        return 'A'+this.name+'is the color'+this.color+'and is the shape'+this.shape;
    }

}
var apple=new Fruit('apple','round');
var melon =new Fruit('melon','green','round')
console.log(apple);
console.log(melon);

//Arrays of objects
var users =[
    {
        names: 'John Doe',
        age: 30
    },
    {
        names:'Ayush',
        age: 20
    },
    {
        names:'Aman',
        age: 21
    },

];
console.log(users[0].names);