/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let set1=new Set('qwertyuiop')
    let set2=new Set('asdfghjkl')
    let set3=new Set('zxcvbnm')
    let ans=[]
    for(var word of words){
        let oneword=word.toLowerCase()
        let set
        if(set1.has(oneword[0])){
            set=set1
        }
          if(set2.has(oneword[0])){
            set=set2
        }
          if(set3.has(oneword[0])){
            set=set3
        }
    var valid = true
        for(var ch of oneword){
           if(!set.has(ch)){
               valid = false;
              break
           }
        }
        if(valid){
            ans.push(word)
        }
    }
    console.log(ans)
return ans
    
};