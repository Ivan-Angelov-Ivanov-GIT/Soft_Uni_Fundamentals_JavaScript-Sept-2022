//function invokation (call - извикване) - фукциите могат да се викат преди да се дефинират. Функции от тип expression немогат да се викат предварително
solve();


// function declaration - каквото правим обикновенно
function solve(){
console.log(`function declaration`);
}

//functione expression

 let func = function (){
    console.log(`function expression`);
 } func();

 //functione expression with named function

 let func2 = function fancyName(){
    console.log(`Fuction expresion with named function`);
 }

//function expression with parameters
const sum = function (a,b){
   console.log(a+b);
} sum (1,2);



//Функция която вика други функции в себе си

function main (){
    solve();
    func();
    func2();
}

solve();
func();
func2();

//Return Statement (виж слайд 21)- При намиране на return фукцията връща дадената стойност извън фукцията и също така я спира

function stepen(a,b){
   console.log(a ** b);

   return;

   console.log(`after return`);

} stepen(2,8);

console.log(`after function call`); //return ще върне това (стойността на функцията), може и да му се зададе променлива с let, която да се вкара във функцията


//return boolean

function pass(grade){
   return grade >= 3;
} 

if (pass (2.9)){
   console.log(`Sudent pass the exam`);
} else {
   console.log(`Sudent didn\'t pass the exam`);
}