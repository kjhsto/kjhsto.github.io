/* 敵へダメージの合計 */
var damage=0;
/* 敵へダメージ */
var num=0;

/* クリックしたときのカウント加速 */

/*$(window).on('load',function(){
    init();
});*/

/*init(){
}*/

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

/*敵をクリックしたときの得られる数*/
enemy_tag=$(".enemy");

$(enemy_tag[0]).on('click', function(){count(1);});
$(enemy_tag[1]).on('click', function(){count(2);});

/* 一分ごとにクッキー保存 */
setInterval("count(1)",60000);

/*クッキー保存と読み込み関数*/
function save_cookie(){
  $.cookie("KEY", "Y", { expires: 10000 });
}

$("#save").on('click', function(){save_cookie();});

function load_cookie(){
  load = $.cookie("KEY");
  alert(load);
}

$("#load").on('click', function(){load_cookie();});