module.exports = function check(str, bracketsConfig) {
  let count = 0;
  let result;
  for(i = 0; i < str.length; i++){
    if(str[i] == "("){
      count++;
    } else if(str[i] == ")"){
        if (count = 0){
          result = false;
        }else{
          count--;
        }
    }
  }
  if(count == 0){
    result = true;
  }
  return true; 
}
