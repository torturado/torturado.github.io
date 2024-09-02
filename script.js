document.addEventListener("DOMContentLoaded", () => {
    BigNumber.config({ DECIMAL_PLACES: 20, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

    const ONE = new BigNumber(1);

    let updateInterval;
    let growthInterval;

    const calculateFutureAmount = () => {
        const targetDateInput = document.getElementById('targetDate');
        const targetTimeInput = document.getElementById('targetTime');
        const futureAmountElement = document.getElementById('futureAmount');
        const futureAmountTooltip = futureAmountElement.nextElementSibling;

        if (!targetDateInput.value) {
            futureAmountElement.textContent = ''; 
            futureAmountElement.parentElement.style.display = 'none';
            futureAmountTooltip.style.display = 'none'; 
            return;
        }

        const targetDate = new Date(`${targetDateInput.value}T${targetTimeInput.value || '00:00'}`);
        
        if (isNaN(targetDate.getTime())) {
            alert("Please enter a valid target date.");
            return;
        }

        const timeDifferenceInDays = new BigNumber(targetDate.getTime() - startTime).dividedBy(86400000);
        const totalDays = initialTimeInDays.plus(timeDifferenceInDays);

        const futureAmount = currentGems.times(customExponentiation(ONE.plus(hourlyInterest), totalDays.times(24)));

        futureAmountElement.textContent = `On ${targetDate.toLocaleString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',  
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        })}, you will have: ${formatNumber(futureAmount)} gems`;
        futureAmountElement.parentElement.style.display = 'block';
        futureAmountTooltip.style.display = 'inline-block'; 
    };

    const startCalculations = () => {
        clearInterval(updateInterval);
        clearInterval(growthInterval);

        const currentGems = new BigNumber(document.getElementById('currentGems').value);
        const goalGems = document.getElementById('goalGems').value ? new BigNumber(document.getElementById('goalGems').value) : null;
        const days = parseInt(document.getElementById('days').value) || 0;
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;

        if (isNaN(currentGems) || currentGems.lte(0)) {
            alert("Please enter a valid number for Current Gems.");
            return;
        }

        const dailyInterest = new BigNumber('0.004');
        const hourlyInterest = dailyInterest.dividedBy(24);
        const initialTimeInDays = new BigNumber(days)
            .plus(new BigNumber(hours).dividedBy(24))
            .plus(new BigNumber(minutes).dividedBy(1440))
            .plus(new BigNumber(seconds).dividedBy(86400));

        const formatNumber = (num, decimals = 0) => num.toFormat(decimals);

        const startTime = Date.now();

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

            for (let i = 1; i <= 20; i++) {  
                term = term.times(ratioSquared);
                result = result.plus(term.dividedBy(n));
                n = n.plus(2);
            }

            return result.times(2);
        };

        const logBase = (x, base) => {
            return ln(x).dividedBy(ln(base));
        };

        const customExponentiation = (base, exponent) => {
            if (exponent.isInteger()) {
                return base.exponentiatedBy(exponent);
            } else {
                return exp(exponent.times(ln(base)));
            }
        };

        const exp = (x) => {
            let sum = new BigNumber(1);
            let term = new BigNumber(1);
            let n = new BigNumber(1);
            const maxIterations = 50; 

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
        
            const futureGems = currentGems.times(customExponentiation(ONE.plus(hourlyInterest), totalDays.times(24)));
            const profit = futureGems.minus(currentGems);
            const profitGrowth = profit.dividedBy(currentGems).times(100);
        
            document.getElementById('gemsAfterTime').textContent = `Gems after ${totalDays.integerValue(BigNumber.ROUND_FLOOR).toString()} day(s): ${formatNumber(futureGems)}`;
            document.getElementById('profit').textContent = `Profit: ${formatNumber(profit)}`;
        
            const timeToReachElement = document.getElementById('timeToReach');
            if (goalGems && !goalGems.isZero()) {
                const timeToReachGoal = logBase(goalGems.dividedBy(currentGems), ONE.plus(hourlyInterest)).dividedBy(24);
                const goalDate = new Date(startTime + timeToReachGoal.times(86400000).toNumber());
        
                timeToReachElement.textContent = `You will reach your goal on ${goalDate.toLocaleString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    hour12: true 
                })} (in ${timeToReachGoal.integerValue(BigNumber.ROUND_FLOOR).toString()} days).`;
                timeToReachElement.parentElement.style.display = 'block';
            } else {
                timeToReachElement.textContent = '';
                timeToReachElement.parentElement.style.display = 'none';
            }

            const profitPerSecond = profit.dividedBy(totalDays.times(86400));
            document.getElementById('profitPerSecond').textContent = `Profit per second: ${formatNumber(profitPerSecond)}`;
            document.getElementById('profitPerMinute').textContent = `Profit per minute: ${formatNumber(profitPerSecond.times(60))}`;
            document.getElementById('profitPerHour').textContent = `Profit per hour: ${formatNumber(profitPerSecond.times(3600))}`;
            document.getElementById('profitPerDay').textContent = `Profit per day: ${formatNumber(profitPerSecond.times(86400))}`;
            document.getElementById('profitPerWeek').textContent = `Profit per week: ${formatNumber(profitPerSecond.times(604800))}`;
            document.getElementById('profitPerMonth').textContent = `Profit per month: ${formatNumber(profitPerSecond.times(2592000))}`;

            document.getElementById('profitGrowth').textContent = `Profit Growth (%): ${profitGrowth.toFixed(6)}%`;
        };

        updateResults();
        calculateFutureAmount();

        growthInterval = setInterval(updateResults, 100);  
        updateInterval = setInterval(calculateFutureAmount, 1000);  
    };

    document.getElementById('calculateBtn').addEventListener('click', () => {
        startCalculations();
        calculateFutureAmount();
    });

    document.getElementById('clearBtn').addEventListener('click', function() {
        document.getElementById('targetDate').value = '';
        document.getElementById('targetTime').value = '';
        document.getElementById('futureAmount').textContent = '';
        document.getElementById('futureAmount').parentElement.style.display = 'none';
    });

    ['currentGems', 'goalGems', 'years', 'months', 'days', 'hours', 'minutes', 'seconds', 'targetDate', 'targetTime'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            clearInterval(updateInterval);
            clearInterval(growthInterval);
        });
    });

    ['targetDate', 'targetTime'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            document.getElementById('futureAmount').textContent = '';
            document.getElementById('futureAmount').parentElement.style.display = 'none';
        });
    });

    const technicalInfoBtn = document.getElementById("technicalInfoBtn");
    const technicalInfoModal = document.getElementById("technicalInfoModal");
    const technicalInfoContent = document.getElementById("technicalInfoContent");
    const closeBtn = technicalInfoModal.querySelector(".close");

    const technicalInfoHTML = `
        <h3>Technical Details</h3>
        <h4>BigNumber.js Configuration</h4>
        <p>The calculator uses the BigNumber.js library configured with 20 decimal places and ROUND_HALF_UP rounding mode for high precision calculations. This configuration is crucial to ensure accuracy in complex financial calculations where rounding errors can accumulate significantly.</p>
        
        <h4>Custom Mathematical Functions</h4>
        <ul>
            <li><strong>Natural Logarithm (ln):</strong> Implemented using a series expansion method known for its high precision. This function is essential for performing inverse exponential growth calculations, such as determining the time required to reach a financial goal.</li>
            <li><strong>Logarithm in Any Base (logBase):</strong> Calculated using the change of base formula, this method allows determining logarithms in any desired base. Internally, the logBase function utilizes our custom ln implementation, providing significant flexibility in analyzing logarithmic growth.</li>
            <li><strong>Exponentiation (customExponentiation):</strong> Handles both integer and non-integer exponents. For integer exponents, BigNumber.js's built-in method is used, while for non-integer exponents, a custom implementation combining Taylor series and natural logarithm calculation is employed. This duality enables the calculator to handle a wide range of mathematical scenarios with precision.</li>
            <li><strong>Exponential Function (exp):</strong> Implemented using a Taylor series expansion, this function allows the calculation of exponents for any real number. It is particularly useful in scenarios where the exponent is not an integer, providing accurate results without relying solely on BigNumber.js's built-in functions.</li>
        </ul>
        
        <h4>Calculation Process</h4>
        <ol>
            <li><strong>User Input Conversion:</strong> All user inputs are converted to BigNumber objects, ensuring that subsequent calculations are performed with the necessary precision. This is especially critical in financial calculations where decimal precision is paramount.</li>
            <li><strong>Daily Interest Rate Application:</strong> The daily interest rate is applied to the current gem balance using the compound interest formula. This operation accounts for time variations, including seconds and fractional seconds, to provide a precise calculation of balance growth.</li>
            <li><strong>Time to Reach Goal Calculation:</strong> The time needed to reach the gem goal is calculated using the logarithmic property of exponential growth. This calculation relies on the custom logBase function, allowing precise determination of when the balance will reach the desired goal under the influence of interest.</li>
            <li><strong>Profit and Growth Rate Calculations:</strong> Profits and growth rates are calculated for various time intervals (second, minute, hour, day, week, month). These calculations are performed in real-time, allowing users to visualize the impact of interest rates on their gem balance continuously and accurately.</li>
            <li><strong>Real-Time Results Update:</strong> Results are updated in real-time using JavaScript's setInterval function. This allows the calculator to respond immediately to user input and adjust calculations as needed, while maintaining a balance between precision and performance.</li>
        </ol>
        
        <h4>Performance Considerations</h4>
        <p>To optimize the user experience, the calculator employs separate intervals for result updates and future amount calculations. Results are updated every 100 ms to ensure high responsiveness, while future amount calculations are performed every 1000 ms, helping to balance computational load without sacrificing accuracy. Additionally, the code is designed to minimize redundant calculations and maximize efficient use of resources, ensuring optimal performance even on devices with limited resources.</p>
        
        <h4>Error Handling</h4>
        <p>The calculator includes a robust input validation and error handling system. User inputs are validated before any mathematical operation to prevent invalid calculations that could lead to incorrect results or execution failures. In case of errors, feedback is provided to the user, guiding them to correct the inputs and ensuring that the calculation can be successfully completed. This attention to detail in error handling and validation contributes to a smooth and reliable user experience, ensuring the calculator can be effectively used by a wide range of users.</p>
    `;

    const toggleModal = (show) => {
        technicalInfoModal.style.display = show ? "block" : "none";
        if (show) {
            technicalInfoContent.innerHTML = technicalInfoHTML;
        }
    };

    technicalInfoBtn.addEventListener("click", () => toggleModal(true));
    closeBtn.addEventListener("click", () => toggleModal(false));

    window.addEventListener("click", (event) => {
        if (event.target === technicalInfoModal) {
            toggleModal(false);
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            toggleModal(false);
        }
    });

    document.getElementById('goalGems').addEventListener('input', function() {
        clearInterval(updateInterval);
        clearInterval(growthInterval);
        if (this.value === '') {
            document.getElementById('timeToReach').textContent = '';
            document.getElementById('timeToReach').parentElement.style.display = 'none';
        }
    });
});
