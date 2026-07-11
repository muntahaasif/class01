// // Swal.fire({
// //   title: 'successfully done!',
// //   theme: 'dark'
// // })
//               // ASIGNMENT NO 1

// // ques:1
// // alert('Muntaha Asif');

// // ques:2
// // alert('Black');

// // ques:3
// // alert('Welcome to javaScript');
// // alert("Let's get started");

// // ques:4
// // let studentName = 'Muntaha Asif';
// // alert( "student name: " + studentName);

// // ques:5
// // let age = 20;
// // alert("Age: " + age);

// // ques:6
// // let city = ' I lived in Karachi';
// // alert("City: " + city);

// // ques:7
// // let firstName = 'Muntaha';
// // let lastName = 'Asif';
// // alert(firstName + "" + lastName);

// // ques:8
// let str = 'muntaha asif';
// console.log("string:" + " " + str);
// let num = '20';
// console.log("number:" + " " + num);
// let bol = true;
// console.log("boolean:" + " " + bol);

// ques:9
// let stri = 'hello';
// console.log(stri + " is a string");
// let numb = 100;
// console.log(numb + " is a number");
// let boln = true;
// console.log(boln + " is a boolean");
// let boln2 = false;
// console.log(boln2 + " is a boolean");
// let stri2 = "25"
// console.log(stri2 + " is a string");

// ques:10
// let isStudent = true;
// console.log(isStudent);

// ques:11
// let num1 = 10;
// let num2 = 25;
// console.log("addition:" + " " + (num1 + num2));
// console.log("subtraction:" + " " + (num1 - num2));
// console.log("multiplication:" + " " + (num1 * num2));
// console.log("division:" + " " + (num1 / num2));
// console.log("reminder:" + " " + (num1 % num2));

// ques:12
// let num3 =25;
// let num4 = 4;
// console.log("reminder" + " " + (num3 % num4));

// // ques:13
// // calculate (10 + 5) * 2
// //               15   * 2
// // answer is 30 

// // ques:14
// var a= 8;
// var b = 2;
// console.log( "a + b= " + "" + (a + b));
// console.log( "a - b= " + "" + (a - b));
// console.log( "a * b= " + "" + (a * b));
// console.log( "a / b= " + "" + (a / b));
// console.log( "a % b= " + "" + (a % b));

// ques:15
// let x = Number(prompt("enter your 1st  number"));
// let y = Number(prompt("enter your second number"));
// alert("the answer is " + (x + y));


// // ques:16
// var number = 5;
// number  +=3;
// console.log(number);

// ques:17
// var number2 = 20;
// number2 -= 8;
// console.log(number2);

// ques:18
// var number3 = 6;
// number3 *= 4;
// console.log(number3);

// ques:19
// var number4 = 40;
// number4 /= 5;
// console.log(number4);

// ques:20
// var number5 = 17;
// number5 %= 5;
// console.log(number5);

// // ques:21
// var a = 5;
// console.log(a++);
// console.log(a);

// // ques:22
// var b = 5;
// console.log(++b);

// ques:23
// var c = 10;
// console.log(c--);
// console.log(c);

// // ques:24
// var d = 10;
// console.log(--d);

// // ques:25
// var e = 8;
// var f = ++e;
// console.log(e);
// console.log(f);

// // ques:26
// var g = 8;
// var h = g++;
// console.log(g);
// console.log(h);

// ques:27
// var i = 5;
// var j = 10;
// var k = ++i +j--;
// console.log(k);

// // ques:28
// var x = 3;
// x +=5;
// x--;
// console.log(x);

// ques:29
// var numbers = 15;
// console.log(++numbers + numbers++);
//                 // 16     +  16 = 32

// // ques:30
// var name = 'muntaha asif';
// var age = 20;
// var year = 2006;
// alert("my name is " + name + " my age is " + age + " and my birth year is " + year);                

// self study
// let name = prompt("what is your name?");
// alert(name)

// let courseName = prompt("what is your course name?");
// console.log(courseName)

// let num1 = Number(prompt("enter first number"));
// let num2 =   Number(prompt("enter second number"));
// alert(num1 + num2)

// let num3 = Number(prompt("1st number"));
// let num4 = Number(prompt("2nd here"));
// console.log(num3 * num4)

// let herAge = 20;
// let hisAge = 22;
// if(herAge < hisAge){
//     console.log("she is younger than him");
// }

            // ASSIGNMENT NO 2
    // PIZZA ORDER GAME

// let name = prompt("what is your name?");
// let size = prompt("what is your pizza size do you want? small, medium, large");
// let drink = prompt("add your drink name here. coke, pepsi, 7up, fanta");
// let quantity = prompt("how many pizzas do you want?");
// console.log("your name is " + name );
// console.log("your pizza size is " + size);
// console.log("your drink is " + drink);
// console.log("your pizza quantity is " + quantity);

// let totalPizzas = quantity;
// let discount = 10;

// totalPizzas++ ;
// discount-- ;

// console.log("total pizzas are " + totalPizzas);
// console.log("discount is " + discount);

// let num1 = 20;
// let num2 = 30;
// if(num1 < num2){
//     console.log(true);
// }

let name = "muntaha";
let surname = "muntaha";
if(name === surname){
    console.log("name and surname are same")
}
let obtainedMarks = 70;
let totalMarks = 100;
if(obtainedMarks < totalMarks){
    console.log("you are fail");
}else{
    console.log("you are pass");
}
let stdName = "muntaha";
let courseName = "web development";
if(stdName === courseName){
    console.log("student name and course name are same");
}else{
    console.log("student name and course name are not same");
}

let userName = prompt("enter your name");
let totalBill = prompt("enter your total bill");
if(totalBill > 1000){
    console.log("congratulations! you got 10% discount")
}else{
    console.log("sorry! you are not eligible for discount")
}
