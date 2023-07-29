/* types of variables */
{
    var myName = "khan";
    var aGe = 24;
    var email = "khan@gmail.com";
}
// data types
{
    var myName = "khan"; //string type
    var aGe = 24; //number type
    var isEmail = false; //boolean
    var unassigned = //undefined
     void 0; //undefined
    var nothing = null; //null
}
{
    var myName = 'talha';
    var hello = "Hello" + myName;
    console.log(hello);
}
// arithmetic operators
{
    var a = 3;
    var b = 6;
    console.log(a + b); //addition
}
{
    var a = 3;
    var b = 6;
    console.log(a - b); //subtraction
}
{
    var a = 3;
    var b = 6;
    console.log(a / b); //divition
}
{
    var a = 3;
    var b = 6;
    console.log(a * b); //multiplication
}
{
    var a = 3;
    var b = 6;
    console.log(a % b); //modulus
}
{
    var a = 3;
    var b = 6;
    console.log(Math.pow(a, b)); //exponentiation
}
//assignment operators
{
    var a = 3;
    var b = 6;
}
{
    var a = 3;
    a += 5; //addition (8)
}
{
    var a = 3;
    a -= 5; //subtraction (-2)
}
{
    var a = 3;
    a *= 2; //multiplication (6)
}
{
    var a = 3;
    a /= 3; //divition (1)
}
{
    var a = 10;
    a %= 3; //modulus
}
//comparison operators
{
    var a = 3;
    var b = 6;
    console.log(a == b); //false (equality)
}
/*{
    let a = 3
    let b = "6"

   console.log(a === b) //false (strict equality) also check type of variable

export {}
}*/
{
    var a = 3;
    var b = 6;
    console.log(a != b); //true (inquality)
}
{
    var a = 3;
    var b = 6;
    console.log(a !== b); //true (inquality) also check type of variable
}
{
    var a = 3;
    var b = 6;
    console.log(a <= b); //true
}
{
    var a = 3;
    var b = 6;
    console.log(a >= b); //false
}
{
    var a = 3;
    var b = 6;
    console.log(a >= b); //false
}
{
    var a = 3;
    var b = 6;
    console.log(a > b); //false
}
{
    var a = 3;
    var b = 6;
    console.log(a < b); //true
}
// logical operators
{
    var a = 6;
    var b = 10;
    console.log(a > 10 && b <= 10); /*false
    (returns true if both of the operators are true)*/
}
{
    var a = 15;
    var b = 23;
    console.log(a > 10 || b >= 10); /*true
    (returns true if one the operator is true)*/
}
{
    var a = 265;
    console.log(!a); //false (if t ans is true it returns false & vice versa)
}
//functions
{
    function add(a, b) {
        return a + b;
    }
    var result = add(35, 25);
    console.log(result);
}
{
    var multiply = function (a, b) {
        return (a * b);
    };
    var result = multiply(35, 25);
}
{
    function greetings(nam) {
        console.log("hello" + greetings);
    }
}
{
    //arrow functions
    var sum1 = function (a, b) {
        return a + b;
    };
    console.log(sum1(35, 25));
}
{
    var sum2 = function (a, b) { return a + b; };
    console.log(sum2(35, 25));
}
//if , else , else if statments
// if statement is used when condition1 is correct
{
    var age = 18;
    if (age >= 18) {
        console.log("you are an adult");
    }
}
//else is used when condition1 is false but condition2 is correct
{
    var age = 18;
    if (age >= 18) {
        console.log('you are an adult');
    }
    else {
        console.log('you are still not a grown up adult');
    }
}
//else if statement is used when all of the preivos statement is false
{
    var grade = 85;
    if (grade >= 90) {
        console.log('excellent');
    }
    else if (grade >= 80) {
        console.log('good jon');
    }
    else if (grade >= 70) {
        console.log("need imporvement");
    }
    else if (grade >= 60) {
        console.log('poor condition');
    }
}
// array to store mupltiple variables
{
    var name_1 = ['talha', 'shireen', 26];
    console.log(name_1[0]); //output (talha)
    console.log(name_1[1]); //output (shireen)
    console.log(name_1[2]); //output (26)
    // this is beacuse array in typscript starts form 0
}
