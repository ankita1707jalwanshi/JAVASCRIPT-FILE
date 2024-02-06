

// function login (){   //declare
//     alert("yes");
// }

function login(){

//user define function
    var name =document.getElementById('name').value;
    var string = "heloooooooooo " +name;  //concate
    document.getElementsByClassName('login')[0].innerHTML=string;
    alert(name);
}