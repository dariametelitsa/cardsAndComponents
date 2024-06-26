export const cardsCount = (cards: Array<string>) => {
    return cards.reduce((sum, el) => {
        if (/^[b-zB-Z]+$/.test(el)) {
            return sum + 10;
        }
        if (/^[aA]+$/.test(el)) {
            return (sum + 11) <= 21 ? (sum + 11) : (sum + 1);
        }
        return sum + +el;
    }, 0);
}

// function disemvowel(str: string) {
//     return str.replace(/[aeiou]/gi, '');
// }
//
// function findOdd(arr: Array<number>) {
//     const obj:any = {}
//     arr.forEach((el) => {
//         if(!obj.hasOwnProperty(el)) {
//             obj[el] = 1;
//         }
//         else obj[el]++;
//     });
//     for (let key in obj) {
//         if(obj[key] % 2 === 1) {
//             return +key;
//         }
//     }
// }
//
// function likes(names: Array<string>) {
//     if(names.length === 1) {
//         return (names[0] + ' likes this');
//     }
//     if(names.length > 1 && names.length < 4) {
//         const last = names[names.length - 2] + ' and ' + names[names.length - 1] + ' like this';
//         names.pop();
//         names.pop();
//         names.push(last);
//         return names.join(', ');
//     }
//     if(names.length > 3) {
//         return (names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this');
//     }
//     return 'no one likes this';
// }
//
// function digitalRoot(n: number) {
//     while(n > 9) {
//         n = String(n).split('').reduce((sum, el) => {return sum + Number(el)}, 0);
//     }
//     return n;
// }
//
// function arrayDiff(a:Array<number>, b:Array<number>) {
//     for (let i = 0; i < a.length; i++) {
//         if(b.includes(a[i])) {
//             a.splice(i, 1);
//             i--;
//         }
//     }
//     return a;
// }
//
// function highAndLow(numbers: string){
//     const arr = numbers.split(' ').sort();
//     return arr[arr.length - 1] + ' ' + arr[0];
// }

// const countBits = function(n: number) {
//     let res = 0;
//     let change = n;
//     while (change !== 0) {
//         if(change % 2) {
//             res++;
//         }
//         change = Math.floor(change / 2);
//     }
//     return res;
// };

// function generateHashtag(str: string) {
//     if (str.length === 0) {
//         return false;
//     }
//
//     let res = str.split(' ').filter(el => el != '').map((el, i) => `${el[0].toUpperCase()}${el.slice(1)}`);
//
//     if (res.join('').length >= 140 || res.join('').length === 0) {
//         return false;
//     }
//     res.unshift('#');
//     return res.join('');
// }
// function findOutlier(integers: Array<number>){
//     let newArr = integers.map(el => {
//         if(el === 0) return 0;
//         return Math.abs(el % 2);
//     });
//
//     let check = 0;
//
//     for(let i = 0; i < 3; i++) {
//         check = check + newArr[i];
//     }
//
//     if(check > 1)
//     {
//         return integers[newArr.findIndex(el => el === 0)];
//     }
//     return integers[newArr.findIndex(el => el === 1)]
// }


