export default function formatNumber(number) {

    length = number.toString().length;
    const num = number.toString();

    switch (length) {
        case 4: return `${num[0]},${num[1]}k`;
        case 5: return `${num[0]}${num[1]},${num[2]}k`;
        case 6: return `${num[0]}${num[1]}${num[2]},${num[3]}k`;
        case 7: return `${num[0]},${num[1]}m`
        default: return number;
    }

}