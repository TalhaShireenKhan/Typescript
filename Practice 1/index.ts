/* types of variables */
{
let myName = "khan"

const aGe = 24

var email = "khan@gmail.com"
}

// data types
{
let myName = "khan" //string type

let aGe = 24 //number type

let isEmail = false //boolean

let unassigned; //undefined

let nothing = null //null
}
{
let myName = 'talha'
var hello = "Hello" + myName

console.log (hello)
}

// arithmetic operators
{
    let a = 3
    let b = 6

    console.log(a+b) //addition
}

{
    let a = 3
    let b = 6

    console.log(a-b) //subtraction
}

{
    let a = 3
    let b = 6

    console.log(a/b) //divition
}

{
    let a = 3
    let b = 6

    console.log(a*b) //multiplication
}

{
    let a = 3
    let b = 6

    console.log(a%b) //modulus
}

{
    let a = 3
    let b = 6

    console.log(a**b) //exponentiation
}

//assignment operators

{
    let a = 3
    let b = 6
}

{
    let a = 3
    a += 5; //addition (8)
}

{
    let a = 3
    a -= 5; //subtraction (-2)
}

{
    let a = 3
    a *= 2; //multiplication (6)
}

{
    let a = 3
    a /= 3; //divition (1)
}

{
    let a = 10
    a %= 3; //modulus
}

//comparison operators

{
    let a = 3
    let b = 6

    console.log(a == b) //false (equality)
}

/*{
    let a = 3
    let b = "6"

   console.log(a === b) //false (strict equality) also check type of variable

export {}
}*/ 

{
    let a = 3
    let b = 6

    console.log(a!=b) //true (inquality)
}

{
    let a = 3
    let b = 6

    console.log(a!==b) //true (inquality) also check type of variable
}

{
    let a = 3
    let b = 6

    console.log(a<=b) //true
}

{
    let a = 3
    let b = 6

    console.log(a>=b) //false
}

{
    let a = 3
    let b = 6

    console.log(a>=b) //false
}

{
    let a = 3
    let b = 6

    console.log(a>b) //false
}

{
    let a = 3
    let b = 6

    console.log(a<b) //true
}

// logical operators

{
    let a = 6
    let b = 10

    console.log(a>10 && b<=10) /*false
    (returns true if both of the operators are true)*/
}

{
    let a = 15
    let b = 23

    console.log(a>10 || b>=10) /*true
    (returns true if one the operator is true)*/
}

{
    let a = 265

    console.log(!a) //false (if t ans is true it returns false & vice versa)
}

//functions

{
    function add(a , b):number{
        return a+b
    }
    const result = add(35, 25)
    console.log(result)
}

{
    const multiply = function (a,b){
        return (a*b)
    }
    const result = multiply (35 ,25)
}

{
    function greetings (nam:string) {

    console.log("hello" + greetings)
    }
}

{
    //arrow functions
    let sum1 = (a , b):number => {
        return a + b
    }
    console.log(sum1(35 , 25))
}

{
    let sum2 = (a , b):number => a+b
    console.log(sum2(35 , 25))
}

//if , else , else if statments

// if statement is used when condition1 is correct
{
    let age = 18
    if (age >= 18) {
        console.log("you are an adult")
    }
}

//else is used when condition1 is false but condition2 is correct

{
    let age = 18
    if (age >= 18){
        console.log('you are an adult')
    } else { 
        console.log('you are still not a grown up adult')
    }
}

//else if statement is used when all of the preivos statement is false

{
    let grade = 85
    if (grade >= 90){
        console.log('excellent')
    } else if (grade >= 80){
        console.log('good jon')
    } else if (grade >= 70){
        console.log("need imporvement")
    } else if (grade >=60){
        console.log('poor condition')
    }
}

// array to store mupltiple variables

{
    let name = ['talha' , 'shireen' , 26]
    console.log(name[0]) //output (talha)
    console.log(name[1]) //output (shireen)
    console.log(name[2]) //output (26)
    // this is beacuse array in typscript starts form 0
}
