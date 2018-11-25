/**
 * パート3
 * jQuery応用2 ツールチップ
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 */

$(() => {

  /**
   * Q1
   * #tooltip要素が常にマウスの右10px、下10pxの位置に表示されるようにしましょう。
   * 
   * Hint
   * ・#tooltip要素の位置はCSSのtopとleftで操作できます。
   */
  const tooltip = $('#tooltip');
  $(window).mousemove(function (e) {
    tooltip.css({
      top: e.pageY + 10,
      left: e.pageX + 10
    });
  });
  /** 
   * Q2 
   * #tooltip要素が#loremIpsumBody上にある時のみ表示されるようにしましょう。
   * ただし、下記の要件を満たすこと。
   * ・表示の際のopacityの最大値は0.9
   * ・表示、非表示の際はanimate()を使用し、200ミリ秒をかけてopacityを変化させること。
   * ・表示、非表示を連続させた際も滑らかにanimateすること。
   * 
   * Hint
   * ・stop()メソッドをうまく活用しましょう。
   */
  const reset = tooltip.css('opacity');
  $('#loremIpsumBody').mouseover(function () {
    tooltip.stop().animate({
      opacity: 0.9
    }, 200)
  }).mouseout(function () {
    tooltip.stop().animate({
      opacity: reset
    }, 200)
  });

});