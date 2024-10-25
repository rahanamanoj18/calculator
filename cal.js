// display
function displaycontent(content){
    result.value +=content
}
function calcScreenClear(){
    result.value = ""
}
function calcOutput(){
    result.value = eval(result.value)
}
function removelasDigit(){
    result.value = result.value.slice(0,-1)
}