//1.დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10-ის ჩათვლით. გამოიყენეთ while და for ციკლები.
let number1=0;
while(number1<=10){
    console.log(number1);
    number1++;
}
for (let number1 = 0 ; number1 <= 10 ; number1 ++){
    console.log(number1);

}
//2.დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.
for (let i = 1 ; i<= 20; i++ ){
    if (i % 2===0){
        console.log(i);
    }
}
//3.დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" 
//იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.
let number2=Number(prompt("შეიყვანე რიცხვი:"));

let text="";

for (let i = 0; i<number2;i++){ 
    text+="hello";
    text+="\n";
}
console.log(text);
//4.დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
let sum1 = 0;
for (let number=1; number<=100; number++){
    sum1=sum1+number;
}
console.log(sum1);
//5.დაწერეთ პროგრამა, რომელიც გამოთვლის კენტი რიცხვების ჯამს 1-დან 100-მდე და დაბეჭდავს შედეგს.
let sum = 1;
for (let number = 1; number<=100; number+=2){
    sum=sum+number;
    console.log(number);
}
console.log(sum);

//6.დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. 
//განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.
let number3 = Number(prompt("secret number Between 1 and 10"));
let secretNumber=4;
while(number3!==secretNumber){
    number3=Number(prompt("secret number Between 1 and 10"));
}
console.log(number3);