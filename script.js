function buttonclick(val){
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=""

}
function equalClick(){
    let text=document.getElementById("screen").value
    let result=eval(text)
    document.getElementById("screen").value=result
   document.getElementById("screen").value=parseFloat(result);
}
function deleteLast(){
    let screen=document.getElementById("screen")
    screen.value=screen.value.slice(0,-1)
}