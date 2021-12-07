// Count the number of times a depth measurement increases from the previous measurement

const inp = [199,200,208,210,200,207,240,269,260,263]

function pairwise(arr, func){
    for(var i=0; i < arr.length - 1; i++){
        func(arr[i], arr[i + 1])
    }
}

let inc = 0;
pairwise(inp, (a, b) => {
    if ((b-a) > 0) {
        inc += 1
    }
})

console.log(inc)
