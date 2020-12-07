let input: string = 'FBFBBFFRLR';

let seatNumber = 0;
for (let seatIndex: number = 0, power: number = 6; seatIndex <= 7; seatIndex++, power--) {
    if (/B/.test(input.charAt(seatIndex))) seatNumber += 2 ** power;

}
function decodeBinary(value : string) {
    if (/^$/.test(value)) return 0;
    let charValue: number = 0
    if (/B/.test(value.charAt(0))) charValue = 2 ** (value.length-1);
    return charValue + decodeBinary(value.slice(1))
}
console.log(decodeBinary('FBFBBFF'))
console.log(parseInt('0101100',2))
let converted = 'FBFBBFF'.split('').map(c => c=='B' ? 1 : 0).join('');
console.log(parseInt(converted,2))
// input.slice(0,7).split('').forEach(character => {
//     console.log(character)
//     if (/F/.test(character)) {
//         seatNumber = seatNumber >> 1;
//     }
//     console.log(seatNumber)
// })
console.log(seatNumber)
