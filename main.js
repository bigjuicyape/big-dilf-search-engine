
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("input").value; 
  name = name.toLowerCase();
  if (name === "Po"|name === "kung fu panda"|name === "panda") {
    document.getElementById("name1").innerHTML = "Poo";
    document.getElementById("quote").innerHTML = "Buddy i am the dragon warrior";
    document.getElementById("img").src = "img/po.png";
  } else if (name === "walt"|name === "walter white") {
    document.getElementById("name1").innerHTML = "Walter White";
    document.getElementById("quote").innerHTML = "...";
    document.getElementById("img").src = "img/200w.gif";
  } else if (name === "mike"|name === "finger"|name === "mike ehrmantraut") {
    document.getElementById("name1").innerHTML = "Mike";
    document.getElementById("quote").innerHTML = "Put your dick away Walter.";
        document.getElementById("img").src = "img/mike.gif";
} else if (name === "gus"|name === "gustavo"|name === "gustavo fring"|name === "gus fring") {
  document.getElementById("name1").innerHTML = "Gustavo Fring";
  document.getElementById("quote").innerHTML = "Last chance to look at me hector!";
      document.getElementById("img").src = "img/gustavo-fring-flexing.gif";
} else if (name === "hector"|name === "hector salamanca") {
  document.getElementById("name1").innerHTML = "Hector Salamanca";
  document.getElementById("quote").innerHTML = "";
      document.getElementById("img").src = "img/200.gif";
    } else if (name === "hank"|name === "hank schrader") {
      document.getElementById("name1").innerHTML = "Hank Schrader";
  document.getElementById("quote").innerHTML = "sussy baka, walt you sussy baka.  sussy baka, walt you sussy baka.  sussy baka, walt you sussy baka.  ";
      document.getElementById("img").src = "img/hank.gif";
}  else if (name === "saul"|name === "saul goodman"|name === "jimmy"|name === "jimmy mcgill"|name === "slippin' jimmy") {
  document.getElementById("name1").innerHTML = "Jimmy McGill";
document.getElementById("quote").innerHTML = "Almost there.  He needs more ripening before hes a big dilf";
  document.getElementById("img").src = "img/saul.gif";
}  else {
  document.getElementById("name1").innerHTML = "Thats not a dilf";
document.getElementById("quote").innerHTML = "Durrrr.  GFhgfhhhghfhhgfhgjjgfhg.  gfhjgfhjh.";
  document.getElementById("img").src = "img/download7.png";
}  
}