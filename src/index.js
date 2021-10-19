function addBars(){
    const slider = document.getElementById('myRange')
    const bars = +slider.value;
    for(let i =0; i < bars; i++){
        
    }
}
const form = document.getElementById('addBarForm')
form.addEventListener('submit',addBars)