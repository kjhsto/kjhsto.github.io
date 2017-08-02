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
  $("#rireki").html("<span margin-right=\"5px\">"+nownow()+"</span>"+tex+"<br>"+past);
  $("#rireki").scrollTop(0);
}

/* クリックしたときのカウント加速 */
function count(num) {
  damage = damage + parseInt(num);
  $("#box2").html(damage);
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
    $("#box2").html(damage);
  }else{
    damage = parseInt($.cookie("DAMAGE_CO"));
    $("#box2").html(damage);
  }
}

//大きすぎる数値は略記する
//自作略記エンジン c jyll
// 999→999 , 1234→1.234k , 65432→65.43k , 10^9→1g
function formatNumeral(num, roundto){

  //キロ、メガ、ギガ... aa,bb,cc は仮表記
  var SUFFIXES = ["","k","m","g","t","p","e","z","y","aa","bb","cc","dd","ee","ff","gg","hh"]

  //10^x 9999→3, 10000→4
  var digit = Math.floor(Math.log(num) * Math.LOG10E);

  //どの接尾辞になるかのインデックス
  var index = Math.floor(digit/3);

  //23000 → (2.3 * 10) * k としたい 1000単位で丸めたあまりの指数 
  var mod = digit % 3;

  // 切り捨て丸め計算 + modぶんの乗算
  // 123456 → 123 にしたい("k"はこれまでに計算済)
  // 123456 → 1.23456 → 123.456 → 123
  // 浮動小数の計算誤差を回避するために指数計算をいっぺんに行っているので読みにくい
  var app = Math.floor(num*Math.pow(10,roundto) / Math.pow(10,digit)) / Math.pow(10,roundto-mod); 

  // 123 + "k" → "123k" にフォーマットして返す
  return  app+ SUFFIXES[index];
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