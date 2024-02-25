function rand(max) {
  return Math.floor(Math.random() * max)+1;
}

function roll() {
	let num = 49;
	let arr = [];
	let random = rand(num);
	
	for (i = 1; i <= 6; i++) {
		arr.push(random);
		while (arr.includes(random)) {
			random = rand(num);
		}
	}
	document.getElementById("lotto649").innerHTML='開獎號碼:'+"&nbsp;"+arr.sort(function(a, b){return a-b});
}
