/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

let set = new Set(["a", "e", "i", "o", "u"]);
s=s.split("")
  let i=0;
  let j=s.length-1;
  while(i<j){
    let ch=s[i].toLowerCase()
    let ch1=s[j].toLowerCase()
    if(set.has(ch) && set.has(ch1)){
        let temp=s[i]
        s[i]=s[j]
        s[j]=temp
        i++
        j--
    }
    if(!set.has(ch)){
        i++
    }
    if(!set.has(ch1)){
        j--
    }

  }
  console.log(s.join(''))
  return s.join('')
    
};