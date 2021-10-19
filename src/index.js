
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
    const bars = document.getElementsByClassName('.bar')
    for(let i=1; i < bars.length; i++){
        let current = bars[i]
        bars[i].style.backgroundColor="red"
        let j = i-1
        while(j>=0 && current.style.height < bars[j].style.height){
            bars[j+1] = bars[j]
            j--
        }
        bars[j+1] = current
    }

}
barDisplay.addEventListener('click',addBars)