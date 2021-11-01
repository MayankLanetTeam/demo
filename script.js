'use strict'
const po = `Have the function MinWindowSubstring(strArr) 
take the array of strings stored in strArr, which will
 contain only two strings, the first parameter being 
 the string N and the second parameter being a string K 
 of some characters, and your goal is to determine the
  smallest substring of N that contains all the 
  characters in K. 
  For example: if strArr is ["aaabaaddae", "aed"] 
  then the smallest substring of N that contains the 
  characters a, e, and d is "dae" located at the end of the string. 
  So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje`

function MinWindowSubstring(strArr) { 

  // code goes here  
  const [str, kArr] = [strArr[0], strArr[1].split('')]
  let len = kArr.length
  console.log(str, kArr, len)
  for (let j = len; j <= str.length; j++){
    for(let i = 0; i < str.length; i++){
      let subString = str.substr(i, j)
      if (subString.length === j && isContained(kArr, subString.split(''))){
        return subString
      }
    }
  }
  return 'Not Found'; 
}
function isContained(kArr, subArr){
  let flag = 0
  for(let char of kArr){
    if (subArr.includes(char)){
      subArr.splice(subArr.indexOf(char), 1)
    }
    else {
      flag = 1
      break 
    }
  }
  if (flag === 1) return false
  return true
} 
// console.log(MinWindowSubstring(['caae', 'cae']));
const largestSubsequence = function(arr){
  const n = arr.length
  let largest = 0
  let result = []
  for(let i = 0; i < n - 1; i++){
    let val = arr[i]
    let sample = [val]
    for(let j = i + 1; j < n; j++){
      if(val <= arr[j]){
        sample.push(arr[j])
        val = arr[j]
      }
    }
    if(sample.length > largest){
      largest = sample.length
      result = sample
      if(sample.length === n - i) break
    }
  }
  return result
}
// console.log(largestSubsequence([5, 7, 10, 11, 2, 1, 3, 4, 5, 9, 12]));
const codeNameValidation = `
Have the function CodelandUsernameValidation(str) 
take the str parameter being passed and determine if 
the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
Examples
Input: "aa_"
Output: false`
function CodelandUsernameValidation(str) { 

  // code goes here
  for(let s of str){
    if(/^[a-zA-Z0-9()]$/.test(s) || s === '_') continue
    else return false
  }
  if(str.length >= 4 && str.length <= 25 && /^[a-zA-Z()]$/.test(str[0]) && str[str.length - 1] !== '_')
    return true
  return false
}
// const str = 'jfk12jsk__773l'
// keep this function call here 
// console.log(CodelandUsernameValidation(str));
const Ques = `TreeConstructor(strArr) take the array of
 strings stored in strArr, which will contain pairs of 
integers in the following format: (i1,i2), where i1 
represents a child node in a tree and the second integer
 i2 signifies that it is the parent of i1. For example: 
 if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this
  forms the following tree:



which you can see forms a proper binary tree. Your program should,
 in this case, return the string true because a 
 valid binary tree can be formed. If a proper binary 
 tree cannot be formed with the integer pairs, then 
 return the string false. All of the integers within the 
 tree will be unique, which means there can only be
  one node in the tree with the given integer value.
Examples
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true
Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false`
function TreeConstructor(strArr) { 

  // code goes here  
  const parentArr = []
  const tree = {}
  const childArr = []
  for (let str of strArr){
    let [a, b] = str.split(',')
    const child = parseInt(a.substr(1))
    const parent = parseInt(b.slice(0, -1))
    //One child can not have two parents
    if (childArr.includes(child)) 
      return false
    else 
      childArr.push(child) 
    if (tree[parent]){
      parentArr.push(parent)
      if (tree[parent].length >= 2) return false // No parent can have more than two child
      else tree[parent].push(child)
    }
    else{
      tree[parent] = [child]
      parentArr.push(parent)
    }
  }
  if(parentArr){
    const arr = [...new Set(parentArr)]
    let count = 0
    for (let i = 0; i < arr.length; i++){
      if(childArr.includes(arr[i])){
        count++;
      }
    }
    if (arr.length - count > 1) return false
  }
  return true
}
// keep this function call here 

// console.log(TreeConstructor(["(5,6)", "(6,3)", "(2,3)", "(12,5)"]));
// ["(2,3)", "(1,2)", "(4,9)", "(9,3)", "(12,9)", "(6,4)"]
const str = 'hello'
for(let i = 0; i<str.length; i++){
  if(str[i] === 'e'){
    console.log('E')
  }
  for (let j = 0; j<1; j++){
    if()
    console.log('h')
  }
}