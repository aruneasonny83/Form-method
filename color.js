var change = document.querySelector("#btnchange") 
var colorArray = ["yellow","blue","red","green","black","orange","red","violet"]


  change.addEventListener("click",()=>{

  var number = Math.floor(Math.random()*10+1)

  document.body.style.backgroundColor = colorArray[number]; 
  console.log(colorArray[number]);
 })