function rand(max) {
  return Math.floor(Math.random() * max)+1;
}

function roll() {
let arr = [];
let random = rand(49);

for (i = 1; i <= 6; i++) {
                arr.push(random);
                while (arr.includes(random)) {
                    random = rand(49);
                }	
            }
			
document.getElementById("lotto649").innerHTML='開獎號碼:'+arr.sort(function(a, b){return a-b})
}
