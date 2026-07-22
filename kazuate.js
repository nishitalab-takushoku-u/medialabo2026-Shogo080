// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let owari = false;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
kaisu++;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  document.querySelector("#kaisu").textContent = kaisu + 1;
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  yoso = Number(document.querySelector("#yoso").value);
  // ここから: 正解判定する
  let result = document.querySelector("#result");
  // 　　　　  正解/不正解のときのメッセージを表示する
  if (kaisu > 3 || owari) {
    result.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (yoso === kotae) {
    result.textContent = "正解です．おめでとう!";
    owari = true;
  } else if (kaisu === 3) {
    result.textContent = "まちがい．残念でした．答えは " + kotae + " です．";
    owari = true;
  } else if (yoso < kotae) {
    result.textContent = "まちがい．答えはもっと大きいですよ";
  } else {
    result.textContent = "まちがい．答えはもっと小さいですよ";
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
document.querySelector("#btn").addEventListener("click", hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
