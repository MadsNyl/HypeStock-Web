export function pearsonCorrelation(x, y) {
    if (x.length !== y.length) return 0;
    const xMean = x.reduce((a, b) => a + b, 0) / x.length || 0;
    const yMean = y.reduce((a, b) => a + b, 0) / y.length || 0;
    let upper = 0;
    let downLeft = 0;
    let downRight = 0;

    for (let i = 0; i < x.length; i++) {
        let calcUpper = (x[i] - xMean) * (y[i] - yMean);
        let calcDownLeft = (x[i] - xMean) ** 2;
        let calcDownRight = (y[i] - yMean) ** 2;
        upper += calcUpper;
        downLeft += calcDownLeft;
        downRight += calcDownRight;
    }


    return ((upper) / ((Math.sqrt(downLeft)) * (Math.sqrt(downRight)))).toFixed(2);
}