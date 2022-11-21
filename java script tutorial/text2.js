var youlikemeat = true;

if (youlikemeat){

    document.write("you like meat!");

} else{

    document.write("you hate meat!");

}

var myage = 49;

if (myage > 30){

    document.write("you are over 30");

} else if(myage > 20){
    document.write("you are over 20");

} else if(myage > 10){
    document.write("you are over 10");

} else{
    document.write("you are not over 10");

}

<h1>For loops code</h1>

var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++) {

    console.log("This is link number" + i);

}

document.write("all links are looped");


var links = document.getElementsByTagName("a");

for (link = 1; link <= links.length; link++) {

    console.log("This is link number" + link);

}



function getaverage (a,b){

    var average = (a + b) / 2;
    console.log(average);

}

getaverage(7,8)

{
   var a = 7;
   var b = 5;

   console.log(a + b);
   console.log(typeof (a + b) );
}


string
{
    var mystring = 'I\'m a "fun" string':

    console.log(mystring.length);
}

{
    var string1 = "abc";
    var string2 = "ABC";

    console.log(string1 === string2)
}


