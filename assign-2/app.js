// Chapter4

// Q1

// var car , bike , Rickshaw;

// //Q2

// //5 legal variables

// var userName;
// var myVar;
// var $money;
// var full_name;
// var userAlert;

// //5 illegal variables

// var 123;
// var user Name;
// var alert;
// var var;
// var full-name;

// Q3

// a
// document.write("<h1> Rules for naming JS variables </h1>");


// b
// document.write("<p> Variable names can only contain letters,numbers,$ and full_Name. </P>");


// c
// document.write("<p> Variables must begin with a letter,$ or_name. </p>");


// d
// document.write("<p> Variable names are case  sensitive. </p>");


// e
// document.write("<p> Variable names should not be JS Keywords. </p>");




// CHAPTER5

// Q1

// var a = 3;
// var b = 5;
// var result = a + b;

// document.write(" Sum of " + a + " and " + b + " is " + result);

// Q2

// Subsraction

// var c = 5;
// var d = 3;
// var result2 = c - d;

// document.write(" Subsraction of " + c + " and " + d + " is " + result2 );


// Multiplication


// var e = 5;
// var f = 3;
// var result3 = e * f;

// document.write(" Multiplication of " + e + " and " + f + " is " + result3);


// Divide


// var g = 15;
// var h = 3;
// var result4 = g / h;

// document.write(" Division of " + g + " and " + h + " is " + result4);



// //Modulus


// var i = 5;
// var j = 3;
// var result5 = i % j;

// document.write(" Modulus of " + i + " and " + j + " is " + result5);


// Q3


// a

// var value;

// document.write("<h1>Variable after declaration is undefined </h1>");

// value = 5;

// document.write("<p>" + "Initial Value:" + value + "</p>");

// value++;

// document.write("<p>" + " Value after increment is " + value + "</p>");

// value = value + 7;

// document.write("<p>" + " Value after addition is " + value + "</p>");

// value--;

// document.write("<p>" + " Value after decrement is " + value + "</p>");

// value = value % 3;

// document.write("<p>" + " The remainder is " + value + "</p>");


// Q4

// var oneMovieTicket = 600 ;

// var numberOfTickets = 5;

// var totalCost = oneMovieTicket * numberOfTickets;

// document.write(" Total Cost to buy 5 tickets to a movie is " + totalCost + "PKR")


// Q5

// document.write("<p> The Table of 5 </p>")
// var table = 5 * 1;
// document.write("<p>" + " 5 x 1 = "  + table + "</p>")
// table = 5 * 2;
// document.write("<p>" + " 5 x 2 = "  + table + "</p>")
// table = 5 * 3;
// document.write("<p>" + " 5 x 3 = "  + table + "</p>")
// table = 5 * 4;
// document.write("<p>" + " 5 x 4 = "  + table + "</p>")
// table = 5 * 5;
// document.write("<p>" + " 5 x 5 = "  + table + "</p>")
// table = 5 * 6;
// document.write("<p>" + " 5 x 6 = "  + table + "</p>")
// table = 5 * 7;
// document.write("<p>" + " 5 x 7 = "  + table + "</p>")
// table = 5 * 8;
// document.write("<p>" + " 5 x 8 = "  + table + "</p>")
// table = 5 * 9;
// document.write("<p>" + " 5 x 9 = "  + table + "</p>")
// table = 5 * 10;
// document.write("<p>" + " 5 x 10 = "  + table + "</p>")

// Q6

// var celcius = "22°C";
// var res = (22 * 9/5) + 32;

// document.write("<p>" + celcius + " is " +  res + "°F" + "</p>");

// var ferenheit = "71.6°F";
// var res2 = (71.6 - 32) * 5/9;

// document.write("<p>" + ferenheit + " is " + res2 + "°C" + "</p>" )


// Q7
// document.write("<h1>Shopping Cart </h1>")
// var item1 = 750;
// document.write("<p>" + "Price of item 1 is " + item1 + "</p>" )
// var  item2 = 100;
// document.write("<p>" + "Price of item 2 is " + item2 + "</p>" )
// var item1Quantity = 3;
// document.write("<p>" + "Quantity of item 1 is " + item1Quantity + "</p>" )
// var item2Quantity = 7;
// document.write("<p>" + "Quantity of item 2 is " + item2Quantity + "</p>" )
// var shippingCharges = 200;
// document.write("<p>" + "Shipping Charges " + item1 + "</p>" )

// var total = (item1 * item1Quantity) + (item2 * item2Quantity) + shippingCharges;
// document.write("<p>" + " Total cost of your order is " + total + "</p>");

// Q8
// document.write("<h1>MarkSheet</h1>");
// var total_Marks = 1100;
// document.write("<p>" + "Total marks:" + total_Marks + "</p>");
// var marks_Obtained = 900;
// document.write("<p>" + "Total marks:" + marks_Obtained + "</p>");
// var percentage = (marks_Obtained * 100) / total_Marks;
// document.write("<p>" + "Percentage:" + percentage + "%" + "</p>");

//Q9

// document.write("<h1>Currency in PKR</h1>");
// var $Usdollar1 = 279.25;
// var $Usdollar = 10;
// var SaudiRiyal1 = 74.46;
// var SaudiRiyal = 25;
// var total_currency =($Usdollar1 * $Usdollar) + (SaudiRiyal1 * SaudiRiyal);
// document.write("Total Currency in PKR:" + total_currency);


//Q10


// var num = 15;

// num = (15 + 5 )* 10 / 2;

// document.write(num);



//Q11


// var currentYear = 2024;
// var birthYear = 2004;
// var Age = currentYear - birthYear;

// document.write(Age)


//Q12

// document.write("<h1> The Geometrizer </h1>")

// var radiusOfCircle = 25;
// document.write("<p>" + " The Radius of a Circle: " + radiusOfCircle + "</p>");
// var circumference = 2 * 3.142 * radiusOfCircle;// "2πr";
// document.write("<p>" + " The Circumference is:" + circumference + "</p>");

// var area = 2 * 3.142 * (radiusOfCircle * radiusOfCircle);// "πr<sup>2</sup>";


// document.write("The area is: " + area);


//Q13


// document.write("<h1> Life Time Supply Calculator</h1>");

// var favourite_snack = "Potato Stick";

// document.write("<p>" + "Favourite Snack: " + favourite_snack + "</p>");

// var currentAge = 15;

// document.write("<p>" + "Current Age: " + currentAge+ "</p>");

// var Estimated = 65;

// document.write("<p>" + "Estimated Maximum Age: " + Estimated + "</p>");

// var amount_perday = 3 ;

// document.write("<p>" + "Amount perday: " + amount_perday + "</p>");

// var total_amount = (Estimated - currentAge) * amount_perday; 

// document.write("<p>" + "You will need  " + total_amount + " to last you until the ripe old age of " + Estimated + "</p>");



//Chapter 6-9

//Q1

// var a1 = 10;

// document.write("<p> Result: </p>")
// document.write("<p style='border-bottom:1px dotted black;width:15%;padding: 0px 0px 15px 0px;'>" + " The value of a1 is: " + a1 + "</p>");

// ++a1;

// document.write("<p >" + " The value of ++a1 is: " + a1 + "</p>");
// document.write("<p >" + " Now the value of a1 is: " + a1 + "</p>");

// a1++;

// document.write("<p > The value of a1++ is: 11 </p>");
// document.write("<p >" + " Now The value of a1 is: " + a1 + "</p>");

// --a1;

// document.write("<p>" + " The value of --a1 is: " + a1 + "</p>");
// document.write("<p>" + " Now The value of a1 is: " + a1 + "</p>");

// a1--;

// document.write("<p > The value of a1-- is: 11 </p>");
// document.write("<p>" + " Now The value of --a1 is: " + a1 + "</p>");





//Q2



// var p = 2;
// document.write("<p>" + " p is : " + p + "</p>");
// var q = 1;
// document.write("<p>" + " q is : " + q + "</p>");

// var Output= --p - --q + ++q + q--;
// document.write("<p>" + "result is : " + Output + "</p>");


// document.write("<h3> Explanation : </h3>");

// document.write("<p> --p ; </p>");
// document.write("The value is : 1");

// document.write("<p> --p - --q ; </p>");
// document.write("The value is : 1");


// document.write("<p> --p - --q + ++q ; </p>");
// document.write("The value is : 3");

// document.write("<p> --p - --q + ++q + q-- ; </p>");
// document.write("The value is : 3");




//


// //Q3

//     var userName = prompt("Please enter your name:");
//     if (userName !== null) {
//         alert("Hello, " + userName + "! Welcome!");
//     };