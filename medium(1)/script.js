// Create a function called vowelChecker
function vowelChecker(a) {
    let vowelArr = ["a", "e", "i", "o", "u"];

    // Use the includes method to check argument to vowelArr
    let trueOrFalse = vowelArr.includes(a);

    // True
    if (trueOrFalse) {
        console.log("This is a vowel")
    }
    // False
    else {
        console.log("This is not a vowel")
    }


    // for (let i = 0; i < vowelArr.length; i++) {
    //     if (a === vowelArr[i]) {
    //         return console.log(`This is a vowel.`)
    //     } else {
    //         console.log(`This is not a vowel.`)
    //     }
    // }



}

vowelChecker('z')
// Function takes in an argument and outputs whether or not it is a vowel
