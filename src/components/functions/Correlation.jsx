export default function LinearCorrelation(x, y) {
    if (x && y) {
        const l = x.length;
        const xAvg = average(x);
        const yAvg = average(y);
        const sum = sumAll(x, y, xAvg, yAvg, l); 
        const xSumExp = sumExp(x, xAvg);
        const ySumExp = sumExp(y, yAvg);
        return (sum/(Math.sqrt(xSumExp * ySumExp))).toFixed(3);
    }
}

const average = (data) => {
    let sum = 0;
    for (const x of data) {
        sum += x;
    }

    return sum / data.length;
}

const sumAll = (x, y, xAvg, yAvg, length) => {
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += ((x[i] - xAvg)) * ((y[i] - yAvg));
    }
    return sum;
}

const sumExp = (data, avg) => {
    let sum = 0;
    for (const x of data) {
        sum += (x - avg) ** 2;
    }

    return sum;
}