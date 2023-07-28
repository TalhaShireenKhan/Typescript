let myname = { myname : "Talha Khan"}
let age = { age : 22 }

console.log(myname)


let greetings: string = ("Hello Talha")

greetings.toLowerCase()
let isLoggedIn  = true


//any

let hero;

function getHero(){
    return true
}

hero = getHero

//specifying the type

let me: string;

function getMe(){
    return "false"
}

me = getMe() 

//mulitple types

//function signUp (nameg, email, isPaid){}

//signUp(1, 2, 3)

function signUp(name: string, email:string, isPaid: boolean){}

signUp("Talha Khan", "talha@gamil.com", false)

const hEro = ["blackadam", "thor", "wanda"]

hEro.map((hero): string => {
    return hero
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

if (true){
let User = "khattak"
User = "shireen khan"

const mycity = "kwl"
// mycity = "khanewal"

var length = 25
length = 35 
}

// console.log(mycity);
console.log(length)

let value; 
console.log("value will be value", value)

let para =
"This is a paragraph" +
myname +
"why this is a paragraph"

console.log(para)

let data = `C
o
p
y
my name so this is it.`
{
let num1 = 25
let num2 = "22"

console.log(num1 + num2)
}

{
let num1 = 25
let num2 = 22

console.log(num1 - num2)
}

{
    let num1 = 25
    let num2 = 22
    
    console.log(num1 / num2)
    }

{
let num1 = 25
let num2 = 22

console.log(num1 - num2)
}

{
    let num1 = 25
    let num2 = 22
    
    console.log(num1 * num2)
    }

    {
        let num1 = 25
        let num2 = 22
        
        console.log(num1 != num2)
        }

        {
            let num1 = 25
            let num2 = 22
            
            console.log(num1 > num2 && num1 < 150)
            }

            {
                let num1 = 25
                let num2 = 22
                
                console.log(num1 || num2 <150)
                }

