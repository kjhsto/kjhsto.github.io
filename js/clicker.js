/* 敵へダメージの合計 */
var damage=0;
/* 敵へダメージ */
var num=0;

/* クリックしたときのカウント加速 */
function count(num) {
  damage = damage + num;
  target = document.getElementById("canvas_up");
  target.innerHTML = damage;
}

if (navigator.cookieEnabled)  // cookieが使えるか確認
{
  document.getElementById("canvas_down").innerHTML = "▽クッキーが有効です！データが保存できるよ！";
}
else
{
  document.getElementById("canvas_down").innerHTML = "▽クッキー無効！データが消えちゃうよ(´・ω・`)";
}

//function cookie_upload(){
//  document.cookie = 'data=' + encodeURIComponent( damage );
//}

/* 一分ごとにクッキー保存 */
setInterval("count(1)",60000);