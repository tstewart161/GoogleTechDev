// Given a string S and a set of words D, find the longest word in D that is a subsequence of S.

// For example, given the input of S = "abppplee" and D = {"able", "ale", "apple", "bale", "kangaroo"} 
// the correct output would be "apple"

let S = "abppplee"
let D = ["able", "ale", "apple", "bale", "kangaroo"]

let subsequence = (S, D) => {
    //strategy:
    //set max length and a max word
    //iterate over D
    //if the length is less than max length, next word
    //else, iterate over S and D at the same time, making sure S contains all the letters of D
    //if fail, next word
    //else, set the max length to the counter on D and the max word to D
    //reset variables
    //return max word
    //Time Complexity: ~O(D*S)
    //Space Complexity: O(1) 

    let maxLength = 0;
    let maxWord = "";

    for(let i = 0; i < D.length; i++) {
        let k = 0;
        let currentLength = D[i].length;

        if (currentLength > maxLength && currentLength <= S.length) {
            for(let j = 0; j < S.length; j++) {
                if (S[j] === D[i][k]) {
                    k++;
                }
            }
            if (k > maxLength) {
                maxLength = k;
                maxWord = D[i];
            }
        }
    }
    return maxWord;
}

console.log(subsequence(S, D));