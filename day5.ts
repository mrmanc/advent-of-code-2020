let input: string = 'FBFBBFFRLR';

function seatRow(seatCode:string) {
    return parseInt(seatCode.slice(0,7).split('').map(c => c == 'B' ? 1 : 0).join(''),2)
}
function seatCol(seatCode:string) {
    return parseInt(seatCode.slice(7,10).split('').map(c => c == 'R' ? 1 : 0).join(''),2)
}
function seatID(seatCode:string) {
    return seatRow(seatCode) * 8 + seatCol(seatCode);
}
console.log(seatRow('FBFBBFFRLR'))
console.log(seatCol('FBFBBFFRLR'))