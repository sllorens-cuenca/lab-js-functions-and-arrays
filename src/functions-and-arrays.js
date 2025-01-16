// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    const result = num1 > num2 ? num1 : num2;
    return result;

    // return Math.max(num1, num2);

}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longWord = '';

    if (arr.length === 0) {
        return null;
    }

    arr.forEach(function (word) {
        if (word.length > longWord.length) {
            longWord = word;
        }
    })
    return longWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let result = 0;

    if (arr.length === 0) {
        console.log("hi1")
        return 0;
    } else if (arr.length === 1) {
        return arr[0];
    }

    arr.forEach(function (num) {
        result += num;
    })
    return result;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return sumNumbers(arr) / arr.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, searchingWord) {

    if (arr.length === 0) {
        return null;
    }

    // arr.forEach(function (word,) {
    //     console.log(word)
    //     if (word === searchingWord) {
    //         return true;
    //     }
    // })
    // return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchingWord) {
            return true;
        }
    }
    return false;
}
