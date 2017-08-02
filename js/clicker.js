/* 敵へダメージの合計 */
var damage=0;
/* 敵へダメージ */
var num=0;

/*現在時刻*/
function nownow(){
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  var w = now.getDay();
  var wd = ["日", "月", "火", "水", "木", "金", "土"];
  var h = now.getHours();
  var mi = now.getMinutes();
  var s = now.getSeconds();
  return (("0"+h).slice(-2) + ":" + ("0"+mi).slice(-2) + ":" + ("0"+s).slice(-2));
}

/*ログを飛ばすよ*/
function log_tatakai(tex){
  past = $('#rireki').html();
  $("#rireki").html(nownow()+"　"+tex+"<br>"+past);
}

/* クリックしたときのカウント加速 */
function count(num) {
  damage = damage + parseInt(num);
  var target = document.getElementById("canvas_up");
  target.innerHTML = damage;
}

//クッキー保存関数
function cookie_check(){
if (navigator.cookieEnabled)  // cookieが使えるか確認
{log_tatakai("▽クッキーが有効です！データが保存できるよ！");
}
else
{
log_tatakai("▽クッキー無効！データが消えちゃうよ(´・ω・`)");
}
}

/*敵をクリックしたときの得られる数*/
enemy_tag=$(".enemy");

$(enemy_tag[0]).on('click', function(){count(1);});
$(enemy_tag[1]).on('click', function(){count(2);});

/*クッキー保存と読み込み関数*/
/*function save_cookie("保存したい名前",数値or文字列)*/
function save_cookie(key,num){
  $.cookie(key, num, { expires: 10000 });
  log_tatakai("▽ここまでの活躍をセーブしました！");
}

$("#save").on('click', function(){save_cookie("DAMAGE_CO",damage);});

/* 30秒ごとにクッキー保存 */
setInterval("save_cookie(\"DAMAGE_CO\",damage)",60000);

/*ダメージをロードするよ*/
function load_damage(){
  if($.cookie("DAMAGE_CO") === undefined){
    damage = 0;
    var target = document.getElementById("canvas_up");
  target.innerHTML = damage;
  }else{
    damage = parseInt($.cookie("DAMAGE_CO"));
    var target = document.getElementById("canvas_up");
  target.innerHTML = damage;
  }
}

/*初期化関数だよ*/
function init(){
  load_damage();
  cookie_check();
}

/*初期化するよ*/
$(window).on("load",function(){
    init();
});