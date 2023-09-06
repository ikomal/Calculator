const display=document.getElementById("content")
const input=document.querySelectorAll("input")

input.addEventListener(()=>
{
    input.value=display.value
})