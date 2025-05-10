
function calculatePercentage(str){
    try{
        let value = eval(str);
        return value? value/100:'';
    } catch{return ''
        
    }
}



let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=> {
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string
    }
    else if(e.target.innerHTML == 'C'){
        string = ''
        document.querySelector('input').value = string
    }
    else if(e.target.innerHTML == '⌫'){
        string = string.slice(0,-1);
        document.querySelector('input').value = string;
    }
      else if(e.target.innerHTML == '%'){
        // string = calculatePercentage(string);
         string = string.replace(/(\d+(\.\d+)?)(?!.*\d)/, (match) => (parseFloat(match) / 100));
        document.querySelector('input').value = string;
    }
    else{
console.log(e.target);
string += e.target.innerHTML;
document.querySelector('input').value = string;
    }
})
})
