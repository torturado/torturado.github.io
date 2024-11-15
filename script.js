document.addEventListener("DOMContentLoaded", () => {
    BigNumber.config({ DECIMAL_PLACES: 20, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

    const ONE = new BigNumber(1);

    let updateInterval;
    let growthInterval;

    // State object to hold shared variables
    const calculatorState = {
        startTime: null,
        currentGems: new BigNumber(0),
        goalGems: null,
        initialTimeInDays: new BigNumber(0),
        dailyInterest: new BigNumber('0.0025'),
        hourlyInterest: null
    };

    // Helper Functions Moved to Higher Scope
    const formatNumber = (num, decimals = 0) => num.toFormat(decimals);

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

    const customExponentiation = (base, exponent) => {
        if (exponent.isInteger()) {
            return base.exponentiatedBy(exponent);
        } else {
            return exp(exponent.times(ln(base)));
        }
    }; 

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
            alert("Por favor, ingresa una fecha objetivo válida.");
            return;
        }

        if (!calculatorState.startTime) {
            alert("El cálculo no ha sido iniciado. Por favor, haz clic en 'Calculate!'.");
            return;
        }

        const timeDifferenceInDays = new BigNumber(targetDate.getTime() - calculatorState.startTime).dividedBy(86400000);
        const totalDays = calculatorState.initialTimeInDays.plus(timeDifferenceInDays);

        // Handle negative totalDays
        if (totalDays.lte(0)) {
            futureAmountElement.textContent = `La fecha objetivo está en el pasado. Por favor, selecciona una fecha futura.`;
            futureAmountElement.parentElement.style.display = 'block';
            futureAmountTooltip.style.display = 'inline-block'; 
            return;
        }

        const futureAmount = calculatorState.currentGems.times(customExponentiation(ONE.plus(calculatorState.hourlyInterest), totalDays.times(24)));

        futureAmountElement.textContent = `El ${targetDate.toLocaleString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',  
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        })}, tendrás: ${formatNumber(futureAmount)} gemas`;
        futureAmountElement.parentElement.style.display = 'block';
        futureAmountTooltip.style.display = 'inline-block'; 
    };

    // Función auxiliar para actualizar beneficios y totales
    const updateProfitAndTotal = (profitId, totalGemsId, multiplier, label, profitPerSecond) => {
        const profit = profitPerSecond.times(multiplier);
        document.getElementById(profitId).textContent = `Profit per ${label}: ${formatNumber(profit)}`;
        const totalGems = calculatorState.currentGems.plus(profit);
        document.getElementById(totalGemsId).textContent = `Total gems after ${label}: ${formatNumber(totalGems)}`;
    };

    const startCalculations = () => {
        clearInterval(updateInterval);
        clearInterval(growthInterval);

        const currentGemsInput = document.getElementById('currentGems').value;
        const goalGemsInput = document.getElementById('goalGems').value;
        const days = parseInt(document.getElementById('days').value) || 0;
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        const months = parseInt(document.getElementById('months').value) || 0;

        // Validate currentGems
        if (isNaN(currentGemsInput) || Number(currentGemsInput) <= 0) {
            alert("Por favor, ingresa un número válido para Current Gems.");
            return;
        }

        calculatorState.currentGems = new BigNumber(currentGemsInput);
        calculatorState.goalGems = goalGemsInput ? new BigNumber(goalGemsInput) : null;
        calculatorState.hourlyInterest = calculatorState.dailyInterest.dividedBy(24);

        // Updated to include months in initialTimeInDays
        calculatorState.initialTimeInDays = new BigNumber(days)
            .plus(new BigNumber(months).times(30)) // Assuming 1 month = 30 days
            .plus(new BigNumber(hours).dividedBy(24))
            .plus(new BigNumber(minutes).dividedBy(1440))
            .plus(new BigNumber(seconds).dividedBy(86400));

        calculatorState.startTime = Date.now();

        const updateResults = () => {
            const elapsedTimeInSeconds = new BigNumber(Date.now() - calculatorState.startTime).dividedBy(1000);
            const elapsedTimeInDays = elapsedTimeInSeconds.dividedBy(86400);
            const totalDays = calculatorState.initialTimeInDays.plus(elapsedTimeInDays);
        
            const futureGems = calculatorState.currentGems.times(customExponentiation(ONE.plus(calculatorState.hourlyInterest), totalDays.times(24)));
            const profit = futureGems.minus(calculatorState.currentGems);
            const profitGrowth = profit.dividedBy(calculatorState.currentGems).times(100);
        
            document.getElementById('gemsAfterTime').textContent = `Gems after ${totalDays.integerValue(BigNumber.ROUND_FLOOR).toString()} day(s): ${formatNumber(futureGems)}`;
            document.getElementById('profit').textContent = `Profit: ${formatNumber(profit)}`;
        
            const timeToReachElement = document.getElementById('timeToReach');
            if (calculatorState.goalGems && !calculatorState.goalGems.isZero()) {
                if (calculatorState.goalGems.lte(calculatorState.currentGems)) {
                    timeToReachElement.textContent = `Tus gemas actuales ya cumplen o superan el objetivo.`;
                    timeToReachElement.parentElement.style.display = 'block';
                } else {
                    const timeToReachGoal = logBase(calculatorState.goalGems.dividedBy(calculatorState.currentGems), ONE.plus(calculatorState.hourlyInterest)).dividedBy(24);
                    const goalDate = new Date(calculatorState.startTime + timeToReachGoal.times(86400000).toNumber());
        
                    timeToReachElement.textContent = `Alcanzarás tu objetivo el ${goalDate.toLocaleString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric', 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        hour12: true 
                    })} (en ${timeToReachGoal.integerValue(BigNumber.ROUND_FLOOR).toString()} día(s)).`;
                    timeToReachElement.parentElement.style.display = 'block';
                }
            } else {
                timeToReachElement.textContent = '';
                timeToReachElement.parentElement.style.display = 'none';
            }

            const profitPerSecond = profit.dividedBy(totalDays.times(86400));
            document.getElementById('profitPerSecond').textContent = `Profit per second: ${formatNumber(profitPerSecond)}`;
            
            // Actualizar beneficios y totales utilizando la función auxiliar
            updateProfitAndTotal('profitPerSecond', 'totalGemsPerSecond', 1, 'second', profitPerSecond);
            updateProfitAndTotal('profitPerMinute', 'totalGemsPerMinute', 60, 'minute', profitPerSecond);
            updateProfitAndTotal('profitPerHour', 'totalGemsPerHour', 3600, 'hour', profitPerSecond);
            updateProfitAndTotal('profitPerDay', 'totalGemsPerDay', 86400, 'day', profitPerSecond);
            updateProfitAndTotal('profitPerWeek', 'totalGemsPerWeek', 604800, 'week', profitPerSecond);
            updateProfitAndTotal('profitPerMonth', 'totalGemsPerMonth', 2592000, 'month', profitPerSecond);
        
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

    // Removed redundant 'clearBtn' event listener from index.html
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
