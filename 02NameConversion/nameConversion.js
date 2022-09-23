const btn = document.getElementById("convert-btn");

function checker(){
let ans=document.getElementById("text").value;
document.getElementById("camel-case").innerHTML= convert_toCamelCase(ans);
document.getElementById("pascal-case").innerHTML=convert_toCamelCase(ans).toUpperCase();
document.getElementById("snake-case").innerHTML=toSnakeCase(ans);
document.getElementById("screaming-snake-case").innerHTML=toSnakeCase(ans).toUpperCase();
document.getElementById("kebab-case").innerHTML=toKabebCase(ans);
document.getElementById("screaming-kebab-case").innerHTML=toKabebCase(ans).toUpperCase();

}
function convert_toCamelCase(s)
{
 let len = s.length;

 var str="";
 for (var i = 0; i < len; i++)
 {

  if (s[i] == ' ')
  {
    str=str+ ' ';
   str+= s[i+1].toUpperCase();
   i++;
   
  }
  else{
  
   str+= s[i];
   }
 }
 return str;
}

const toSnakeCase = (str = '') => {
    const strArr = str.split(' ');
    const snakeArr = strArr.reduce((acc, val) => {
       return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join('_');
 };

 const toKabebCase = (str = '') => {
    const strArr = str.split(' ');
    const kabebArr = strArr.reduce((acc, val) => {
       return acc.concat(val.toLowerCase());
    }, []);
    return kabebArr.join('-');
 };


btn.addEventListener("click", checker);


