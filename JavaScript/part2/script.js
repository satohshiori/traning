/**
 * パート2
 * オブジェクト・配列
 * 
 * ・出力にはconsole.log()を使用します。
 * ・すでに記述されている要素は変更禁止です。
 */

/**
 * 問題1
 * すでに記述されているオブジェクトを利用して、「こんにちは。今日のお昼はラーメンです。」と出力しましょう。
 */

const object = {
    greeting: {
        morning: 'おはようございます。',
        afternoon: 'こんにちは。'
    },
    today: '今日のお昼は',
    food: {
        noodle: 'ラーメン',
        soba: 'そば'
    },
    conclude: 'です。'
};
console.log(object.greeting.afternoon + object.today + object.food.noodle + object.conclude);
/**
 * 問題2
 * すでに記述されている配列を利用して、「コーヒー」「コーラ」「緑茶」をそれぞれ出力しましょう。
 */

const array = ['そば茶', 'コーヒー', 'コーラ', '紅茶', '緑茶', '水'];
console.log(array[1]);
console.log(array[2]);
console.log(array[4]);
/**
 * 問題3
 * 下記の文字列が出力されるように、オブジェクトを定義しましょう。
 * 「ジントニックはジンを45ml、トニックウォーターを120ml混ぜ合わせ、最後にライムを入れます。」
 * ヒント：分割代入
 */
const recipe = {
    ginTonic: {
        gin: {
            name: 'ジン',
            amount: '45'
        },
        tonic: {
            name: 'トニックウォーター',
            amount: '120'
        },
        lime: {
            name: 'ライム'
        }
    }
};
const {
    gin,
    tonic,
    lime
} = recipe.ginTonic;
console.log(`ジントニックは${gin.name}を${gin.amount}ml、${tonic.name}を${tonic.amount}ml混ぜ合わせ、最後に${lime.name}を入れます。`);
/**
 * 問題4
 * 下記の文字列が出力されるように、配列を定義しましょう。
 * 「バナナ・いちご・りんご」
 */

const fruits = ['みかん', 'バナナ', 'いちご', 'りんご'];
console.log(`${fruits[1]}・${fruits[2]}・${fruits[3]}`);
/**
 * 問題5
 * 定義されているオブジェクト「car」を操作して、下記の３行が出力されるようにしましょう。
 * 「フェラーリ：イタリア」
 * 「BMW：ドイツ」
 * 「アウディ：ドイツ」
 */

/** ↓変更禁止ゾーン↓ */
const car = {
    ferrari: {
        name: 'フェラーリ',
        country: 'イタリア'
    },
    bmw: {
        name: 'BMW',
        country: 'ドイツ'
    }
};
/** ↑変更禁止ゾーン↑ */
car.audi = {
    name: 'アウディ',
    country: 'ドイツ'
};
/** ↓変更禁止ゾーン↓ */
console.log(`${car.ferrari.name}：${car.ferrari.country}`);
console.log(`${car.bmw.name}：${car.bmw.country}`);
console.log(`${car.audi.name}：${car.audi.country}`);
/** ↑変更禁止ゾーン↑ */
/**
 * 問題6
 * push()関数を利用して、定義されている配列に値を追加し、下記の文字列が出力されるようにしましょう。
 * 「バスケットボール・テニス・野球・サッカー」
 */

/** ↓変更禁止ゾーン↓ */
const sport = ['バスケットボール', 'テニス'];
/** ↑変更禁止ゾーン↑ */
sport.push('野球', 'サッカー');
/** ↓変更禁止ゾーン↓ */
console.log(`${sport[0]}・${sport[1]}・${sport[2]}・${sport[3]}`);
/** ↑変更禁止ゾーン↑ */