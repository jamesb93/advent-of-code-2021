let fish = [3,4,3,1,2]
const days = 80

for (let i=0; i < days; i++) {
    fish.forEach((f, i) => {
        if (f <= 0) {
            fish[i] = 6
            fish.push(8)
        } 
        else {
            fish[i] = f-1
        }
    })
}


console.log(`After ${days} days there are ${fish.length} fishes`)