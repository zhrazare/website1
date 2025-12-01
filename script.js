let age = 19 ;
let first_name = "ali" + 15 ;
let is_male = true ;
let cars = ["benz","bmw","pride"] ;
let person = {age:15 , first_name:"ali", is_male:true};
document.write(person.first_name)
document.write(cars[0])
if (age >18 & is_male)
{
    document.write("welcome!") ;
}
else{
    document.write("get out");
}
for(let index =2 ; index<11 ; index +=2) {
    document.write(index +",") ;
}