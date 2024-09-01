BigNumber.config({ DECIMAL_PLACES: 20, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

const ONE = new BigNumber(1);

let updateInterval;
let growthInterval;

const startCalculations = () => {
    clearInterval(updateInterval);
    clearInterval(growthInterval);

    const currentGems = new BigNumber(document.getElementById('currentGems').value);
    const goalGems = new BigNumber(document.getElementById('goalGems').value);
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    if (isNaN(currentGems) || isNaN(goalGems) || currentGems.lte(0) || goalGems.lte(0)) {
        alert("Please enter valid numbers for Current Gems and Goal Gems.");
        return;
    }

    const dailyInterest = new BigNumber('0.004');
    const initialTimeInDays = new BigNumber(days)
        .plus(new BigNumber(hours).dividedBy(24))
        .plus(new BigNumber(minutes).dividedBy(1440))
        .plus(new BigNumber(seconds).dividedBy(86400));

    const formatNumber = (num, decimals = 0) => num.toFormat(decimals);

    const startTime = Date.now();

    // Función personalizada para calcular el logaritmo natural
    const ln = (x) => {
        if (x.lte(0)) throw new Error('ln(x) is undefined for x <= 0');
        if (x.eq(ONE)) return new BigNumber(0);
        const xMinusOne = x.minus(ONE);
        const xPlusOne = x.plus(ONE);
        const ratio = xMinusOne.dividedBy(xPlusOne);
        const ratioSquared = ratio.times(ratio);

        let result = ratio;
        let term = ratio;
        let n = new BigNumber(3);

        for (let i = 1; i <= 20; i++) {  // Ajusta el número de iteraciones para la precisión deseada
            term = term.times(ratioSquared);
            result = result.plus(term.dividedBy(n));
            n = n.plus(2);
        }

        return result.times(2);
    };

    // Función personalizada para calcular logaritmo en base cualquiera
    const logBase = (x, base) => {
        return ln(x).dividedBy(ln(base));
    };

    // Función personalizada para la exponenciación con exponentes no enteros
    const customExponentiation = (base, exponent) => {
        if (exponent.isInteger()) {
            return base.exponentiatedBy(exponent);
        } else {
            return exp(exponent.times(ln(base)));
        }
    };

    // Función personalizada para la exponencial
    const exp = (x) => {
        let sum = new BigNumber(1);
        let term = new BigNumber(1);
        let n = new BigNumber(1);
        const maxIterations = 50; // Ajusta este valor según la precisión deseada

        for (let i = 1; i < maxIterations; i++) {
            term = term.times(x).dividedBy(n);
            sum = sum.plus(term);
            n = n.plus(1);
        }

        return sum;
    };

    const updateResults = () => {
        const elapsedTimeInSeconds = new BigNumber(Date.now() - startTime).dividedBy(1000);
        const elapsedTimeInDays = elapsedTimeInSeconds.dividedBy(86400);
        const totalDays = initialTimeInDays.plus(elapsedTimeInDays);

        const futureGems = currentGems.times(customExponentiation(ONE.plus(dailyInterest), totalDays));
        const profit = futureGems.minus(currentGems);
        const profitGrowth = profit.dividedBy(currentGems).times(100);

        document.getElementById('gemsAfterTime').textContent = `Gems after ${totalDays.integerValue(BigNumber.ROUND_FLOOR).toString()} day(s): ${formatNumber(futureGems)}`;
        document.getElementById('profit').textContent = `Profit: ${formatNumber(profit)}`;

        // Usamos la función logBase para calcular el tiempo necesario para alcanzar el objetivo
        const timeToReachGoal = logBase(goalGems.dividedBy(currentGems), ONE.plus(dailyInterest));
        const goalDate = new Date(startTime + timeToReachGoal.times(86400000).toNumber());

        document.getElementById('timeToReach').textContent = `You will reach your goal on ${goalDate.toLocaleString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        })} (in ${timeToReachGoal.integerValue(BigNumber.ROUND_FLOOR).toString()} days).`;

        const profitPerSecond = profit.dividedBy(totalDays.times(86400));
        document.getElementById('profitPerSecond').textContent = `Profit per second: ${formatNumber(profitPerSecond)}`;
        document.getElementById('profitPerMinute').textContent = `Profit per minute: ${formatNumber(profitPerSecond.times(60))}`;
        document.getElementById('profitPerHour').textContent = `Profit per hour: ${formatNumber(profitPerSecond.times(3600))}`;
        document.getElementById('profitPerDay').textContent = `Profit per day: ${formatNumber(profitPerSecond.times(86400))}`;
        document.getElementById('profitPerWeek').textContent = `Profit per week: ${formatNumber(profitPerSecond.times(604800))}`;
        document.getElementById('profitPerMonth').textContent = `Profit per month: ${formatNumber(profitPerSecond.times(2592000))}`;

        document.getElementById('profitGrowth').textContent = `Profit Growth (%): ${profitGrowth.toFixed(6)}%`;
    };

    const calculateFutureAmount = () => {
        const targetDateInput = document.getElementById('targetDate');
        const targetTimeInput = document.getElementById('targetTime');
        const futureAmountElement = document.getElementById('futureAmount');
        
        if (!targetDateInput.value) {
            futureAmountElement.textContent = ''; // Limpiar el contenido si no hay fecha
            return;
        }

        const targetDate = new Date(`${targetDateInput.value}T${targetTimeInput.value || '00:00'}`);
        
        if (isNaN(targetDate.getTime())) {
            alert("Please enter a valid target date.");
            return;
        }

        const timeDifferenceInDays = new BigNumber(targetDate.getTime() - startTime).dividedBy(86400000);
        const totalDays = initialTimeInDays.plus(timeDifferenceInDays);

        const futureAmount = currentGems.times(customExponentiation(ONE.plus(dailyInterest), totalDays));

        futureAmountElement.textContent = `On ${targetDate.toLocaleString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        })}, you will have: ${formatNumber(futureAmount)} gems`;
    };

    updateResults();
    calculateFutureAmount();

    // Set new intervals
    growthInterval = setInterval(updateResults, 100);  // Update every 100 ms for performance balance
    updateInterval = setInterval(calculateFutureAmount, 1000);  // Update future amount every second
};

document.getElementById('calculateBtn').addEventListener('click', startCalculations);

// Add event listeners to input fields to stop updates when typing
['currentGems', 'goalGems', 'years', 'months', 'days', 'hours', 'minutes', 'seconds', 'targetDate', 'targetTime'].forEach(id => {
    document.getElementById(id).addEventListener('input', function() {
        clearInterval(updateInterval);
        clearInterval(growthInterval);
    });
});

// Add event listeners for clearing future amount result when date and time fields are modified
['targetDate', 'targetTime'].forEach(id => {
    document.getElementById(id).addEventListener('input', function() {
        document.getElementById('futureAmount').textContent = '';
    });
});
