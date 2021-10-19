
const barDisplay = document.getElementById('display')
function addBars(){
    barDisplay.innerHTML=""
    for(let i =0; i < 20; i++){
        const size = Math.floor(Math.random()*100) + 1
        const ele = document.createElement('div')
        ele.classList.add('bar')
        ele.style.width = `${80/20}vw`
        ele.style.height = `${size*3}px`
        document.getElementById('display').appendChild(ele)
    }
}

const insertionSort = async ()=> {
    //Gets all of the bars to sort
    const bars = document.querySelectorAll('.bar')
    //First one doesn't need to be sorted
    bars[0].style.backgroundColor = 'green'
    //Outer loops to go the length of the bar nodelist to sort it
    for(let i =0; bars.length; i++){
        //Gets the height of the current bar to sort
        let current = bars[i].style.height
        //initalize variable for the while loop
        let j= i-1
        //bar being looked at is red
        bars[i].style.backgroundColor ="red"
        //Slight dealy
        await new Promise(resolve =>{
            setTimeout(()=>{
                resolve()
            },100)
        })
        //Loops until current heigt is greater than a value in the bar nodelist or no more values are left to check
        while(j >= 0 && parseInt(bars[j].style.height) > parseInt(current)){
            //Compared variables are red
            bars[j].style.backgroundColor="red"
            //Change height or shifting the nodelist right by 1
            bars[j +1].style.height = bars[j].style.height
            j--
            //Slight delay
            await new Promise(resolve =>{
                setTimeout(()=>{
                    resolve()
                },100)
            })
            //Change all sorted portions to green
            for(var k=i;k>=0;k--){
                bars[k].style.backgroundColor = "green"
              }
        }
        //Add sorting element where it shoud go
        bars[j+1].style.height = current
        //Show sorted
        bars[i].style.backgroundColor="green"
    }
}

const selectionSort = async () =>{
    //Gets all bar elements to sort
    const bars = document.querySelectorAll('.bar')
    //First loop for sorting using selection sort
    for(let i =0; bars.length; i++){
        //Gets the minimum value (default is current sorting value and index)
        let min = bars[i].style.height
        let minIndex = i
        //Index being sorted will be red
        bars[i].style.backgroundColor="red"

        //Slight delay
        await new Promise(resolve =>{
            setTimeout(()=>{
                resolve()
            },100)
        })
        //Loops through the list to find the smallest value
        for(let j = i+1; j < bars.length; j++){
            //Values being checked turn red
            bars[j].style.backgroundColor="red"
            //If a value is smaller than the current minimum
            if(parseInt(min) > parseInt(bars[j].style.height)){
                //Store as new minimum
                min = bars[j].style.height
                minIndex = j
            }
            //Slight delay
            await new Promise(resolve =>{
                setTimeout(()=>{
                    resolve()
                },100)
            })
            //Chnage values back to skyblue
            bars[j].style.backgroundColor="skyblue"
        }
        //Swap variables to have minimum value in correct index
        bars[minIndex].style.height = bars[i].style.height
        bars[i].style.height = min
        bars[i].style.backgroundColor="green"
    }
}
barDisplay.addEventListener('click',addBars)
document.getElementById('selectionSort').addEventListener('click',selectionSort)
document.getElementById('insertionSort').addEventListener('click',insertionSort)
