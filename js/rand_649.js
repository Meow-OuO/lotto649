function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}

function roll() {
  let num = 49;
  let arr = [];

  while (arr.length < 7) {
    let random = rand(num);
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }

  arr.sort(function(a, b) {
    return a - b;
  });

  document.getElementById("lotto649").innerHTML = '開獎號碼:' + "&nbsp;" + arr.slice(0, 6).join(",") + "&emsp;" + '特別號:' + arr[6];
}
