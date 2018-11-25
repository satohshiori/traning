/**
 * パート2
 * jQuery応用1 初期化・タブ
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 */

/**
 * 問題1
 * 初期表示で下記のような状態になるようにしましょう。
 * ・#loremIpsumNav要素内の１番めの.nav-link要素にのみactiveクラスを追加する。
 * ・#loremIpsumBody要素内の１番めの.card-body要素のみ表示されるようにする。
 * 
 * 問題2 
 * #loremIpsumNav要素の各リンクを押下した際に下記の動作をするようにしましょう。
 * ・#loremIpsumBody要素内の、押下されたリンクと対応する.card-body要素を表示し、対応しない.card-body要素を非表示にする。
 * ・押下されたリンクに.activeクラスを追加し、押下されていないリンクの.activeクラスを削除する。
 */
$(() => {
  const active = 'active';
  const paragraph = $('.nav-link');
  const card = $('.card-body');

  const clickParagraph = function (num) {
    paragraph.removeClass(active).eq(num).addClass(active);
    card.hide().eq(num).show();
  };
  clickParagraph(0);
  paragraph.on('click', function () {
    const index = paragraph.index(this);
    clickParagraph(index);
  });
});