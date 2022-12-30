var text=document.getElementById("textResult")
var op;
var number1;
var number2;

function btn(e){
text.value+=e.innerText
}

function opertion(e){
    op=e.innerText
    number1=parseInt(text.value)
    text.value=""
}
function calc(){
    var result;
number2=parseInt(text.value)

switch(op.trim()){
    case "+":
        result=number1+number2;break;
        case"-":
        result=number1-number2;break;
        case "*":
            result=number1*number2;break;
            case"/":
            result=number1/number2;break;
       
            
}
text.value=result;

}
function x(){
    text.value=""
}
