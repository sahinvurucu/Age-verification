/*
var ageCheck = window.prompt("Please enter your age:")
var name = window.prompt("Please enter your name:")

if (ageCheck <18) {
    window.alert("You submitet that you are :" + ageCheck + ": years old, " + name + ".");
    window.alert("You most be at least eighteen years old to visit this site.");
    location.href("https://www.jointrine.com/");
}

else if (ageCheck > 18 && ageCheck <101) {
    window.alert("You are old enough to visit the site");
    window.alert("Welcome" + name + "!");

}

else {
    window.alert("You most be honest about your age, "+ name +".");
    location.href("https://www.jointrine.com/");

}

*/

$("button").click(function(){
    var ageCheck = $("#test").val();
if (ageCheck >= 18) {
    $("form").attr("action","https://www.jointrine.com/");
}else{
    alert("i will call your father boy!!")
}
})
