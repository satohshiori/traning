/**
 * パート4
 * jQuery応用3 スライドショー
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 */

$(() => {

    /**
     * Q
     * ".slider__btn" 要素が押下された際、下記の動作をするようにしましょう。
     * 1. data()メソッドを利用し、押下されたボタンのdata-ctrl属性を取得する。
     * 2. 取得したdata-ctrl属性が'next'の場合".slider__list"内の次の画像を表示し、異なる場合前の画像を表示する。
     * （1.jpg が表示された状態でnextボタンを押下した場合 2.jpg が、 2.jpg が表示された状態でprevボタンを押下した場合 1.jpg が表示される。）
     * 3. 別画像を表示する際は、500ミリ秒をかけてアニメーションしながらスライドさせる。
     * 4. ただし、最初（最後）の画像が表示された状態でprev（next）ボタンを押下した場合は、最後（最初）の画像が表示されること。
     * 
     * 動作については、./sample/slider.gif を参考にしてください。
     * 
     * Hint
     * • 画像位置の調整には、".slider__list"要素のCSSのleftを書き換えましょう。
     */
    const btnPrev = $('.slider__btn--prev').data('ctrl');
    const btnNext = $('.slider__btn--next').data('ctrl');
    const sliderList = $('.slider__list');
    const listWidth = -sliderList.children().width();
    let count = 0;
    const listLength = sliderList.find('li').length;
    const slide = function (num) {
        sliderList.animate({
            left: listWidth * num
        }, 500);
    };

    $('.slider__btn').on('click', function (e) {
        const btnData = $(e.target).data('ctrl');
        if (btnData === btnNext) {
            ++count;
            if (count >= listLength) {
                count = 0;
            }
        } else if (btnData === btnPrev) {
            --count;
            if (count < 0) {
                count = listLength - 1;
            }
        }
        slide(count);
    });
});