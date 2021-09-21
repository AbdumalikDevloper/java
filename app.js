var natija = 0;
var sonlar = parseInt(prompt("Nechta son kiritmoqchisiz"));
for(var i = 0; i < sonlar; i = i + 1){
    natija += parseFloat(prompt("Sonni kiriting biz sizga kiritgan sonlriz yig'indisi va O'rta arifmetigini aniqlab beramiz"));
}
var arifmetik = natija / sonlar;
console.log("Kiritgan sonlar yig`indis: " + natija);
console.log("Kiritgan sonlar O'rta arifmetikasi: " + arifmetik);
