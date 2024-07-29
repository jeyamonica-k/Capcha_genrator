var sub=document.getElementById("submit")
var ref=document.getElementById("refresh")
var head=document.querySelector(".capcha")
var inp=document.querySelector(".input1")

const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
  var result=''
  var len=characters.length
  for(var i=0;i<5;i++){
    result=result+ characters.charAt(Math.floor(Math.random()*len))
  }
  head.append(result)
ref.addEventListener("click",function(){
  head.textContent=""
  const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
  var result=''
  var len=characters.length
  for(var i=0;i<5;i++){
    result=result+ characters.charAt(Math.floor(Math.random()*len))
  }
  head.append(result)
})

sub.addEventListener("click",function(){
 if( head.textContent == inp.value){
  alert("Entered Capcha is valid")
 }
 else{
  alert("Invalid Capcha")
 }
})