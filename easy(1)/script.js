// Create function takes in array and outputs two arrays of odd and even
let array = [2, 4, 7, 11, 15, 16]


function oddOrEven(array) {
    let oddArr = new Array;
    let evenArr = new Array;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArr.push(array[i])
        } else {
            oddArr.push(array[i])
        }
    }
    
    console.log(`Even array: ${evenArr}`)
    console.log(`Odd array: ${oddArr}`)

} 

oddOrEven(array);