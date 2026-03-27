const input = document.getElementById('display');

const buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',()=>{
        // 
        if(button.innerHTML === '='){

            string= eval(string);
            input.value = string;
            console.log(string);
            
        }
//   if button clicked on AC it returns all the value to 0
        else if(button.innerHTML === 'AC'){
            
            string = '';
            console.log(string)
            input.value = string;
            // console.log('the button make 0',string)
        }
        //  if we clicked on DEL it will delete the last value of the string
        else if(button.innerHTML === 'DEL'){
            string = string.slice(0,-1);
            console.log(string)
            input.value = string;
        }
//  if we click on any other button it will add the value of that button to the string and show it in the input field
        else{
        string += button.innerHTML;
        input.value =  string;
        console.log(string);
    }

    })
});
