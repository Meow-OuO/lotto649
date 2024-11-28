function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}

function roll() {
  let num = 49; // 生成 1 到 49 的隨機數字
  let arr = [];

  // 生成 6 個不重複的正常號碼
  while (arr.length < 6) {
    let random = rand(num);
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }

  // 生成特別號，並確保不與正常號碼重複
  let specialNumber;
  do {
    specialNumber = rand(num);
  } while (arr.includes(specialNumber));

  // 將正常號碼排序
  arr.sort(function(a, b) {
    return a - b;
  });

  // 將正常號碼和特別號結合
  arr.push(specialNumber);

  // 顯示結果
  document.getElementById("lotto649").innerHTML = '開獎號碼:' + "&nbsp;" + arr.slice(0, 6).join(",") + "&nbsp;" + '特別號:' + arr[6];
}
