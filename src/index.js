
const barDisplay = document.getElementById('display')
function addBars(){
    barDisplay.innerHTML=""
    for(let i =0; i < 100; i++){
        const size = Math.floor(Math.random()*100)
        const ele = document.createElement('div')
        ele.classList.add('bar')
        ele.style.width = `${10}px`
        ele.style.height = `${size}px`
        document.getElementById('display').appendChild(ele)
    }
}

function insertionSort(){
    bars = document.getElementsByClassName('.bar')
    for (let i = 1; i < bars.length; i++) {
        let current = bars[i];
        let j = i-1;
        while ((j > -1) && (current.style.height < bars[j].style.height)) {
            bars[j+1] = bars[j];
            j--;
            bars[j+1] = current;
        }
    }
}
barDisplay.addEventListener('click',addBars)
document.getElementById('sort').addEventListener('click',insertionSort)