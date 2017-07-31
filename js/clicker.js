/* 敵へダメージの合計 */
var damage=0;
/* 敵へダメージ */
var num=0;

/*初期化関数だよ*/
function init(){
  load_damage();
}

/* クリックしたときのカウント加速 */
function count(num) {
  damage = damage + parseInt(num);
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

/*クッキー保存と読み込み関数*/
/*function save_cookie("保存したい名前",数値or文字列)*/
function save_cookie(key,num){
  $.cookie(key, num, { expires: 10000 });
}

$("#save").on('click', function(){save_cookie("DAMAGE_CO",damage);});

/* 30秒ごとにクッキー保存 */
setInterval("save_cookie(\"DAMAGE_CO\",damage)",30000);

/*ダメージをロードするよ*/
function load_damage(){
  if($.cookie("DAMAGE_CO") === undefined){
    damage = 0;
    target = document.getElementById("canvas_up");
  target.innerHTML = damage;
  }else{
    damage = parseInt($.cookie("DAMAGE_CO"));
    target = document.getElementById("canvas_up");
  target.innerHTML = damage;
  }
}

/*初期化するよ*/
$(window).on("load",function(){
    init();
});