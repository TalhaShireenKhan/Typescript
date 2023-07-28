var myname = { myname: "Talha Khan" };
var age = { age: 22 };
console.log(myname);
var greetings = ("Hello Talha");
greetings.toLowerCase();
var isLoggedIn = true;
//any
var hero;
function getHero() {
    return true;
}
hero = getHero;
//specifying the type
var me;
function getMe() {
    return "false";
}
me = getMe();
//mulitple types
//function signUp (nameg, email, isPaid){}
//signUp(1, 2, 3)
function signUp(name, email, isPaid) { }
signUp("Talha Khan", "talha@gamil.com", false);
var hEro = ["blackadam", "thor", "wanda"];
hEro.map(function (hero) {
    return hero;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
if (true) {
    var User = "khattak";
    User = "shireen khan";
    var mycity = "kwl";
    // mycity = "khanewal"
    var length = 25;
    length = 35;
}
// console.log(mycity);
console.log(length);
var value;
console.log("value will be value", value);
var para = "This is a paragraph" +
    myname +
    "why this is a paragraph";
console.log(para);
var data = "C\no\np\ny\nmy name so this is it.";
{
    var num1 = 25;
    var num2 = "22";
    console.log(num1 + num2);
}
{
    var num1 = 25;
    var num2 = 22;
    console.log(num1 - num2);
}
{
    var num1 = 25;
    var num2 = 22;
    console.log(num1 / num2);
}
{
    var num1 = 25;
    var num2 = 22;
    console.log(num1 - num2);
}
{
    var num1 = 25;
    var num2 = 22;
    console.log(num1 * num2);
}
{
    var num1 = 25;
    var num2 = 22;
    console.log(num1 != num2);
}
{
    var num1 = 25;
    var num2 = 22;
    console.log(num1 > num2 && num1 < 150);
}
{
    var num1 = 25;
    var num2 = 22;
    console.log(num1 || num2 < 150);
}
