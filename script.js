document.getElementById("submit").addEventListener('click', function postSavings() {
    function addCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    let currentAge = document.getElementById("currentAge").value;
    let retirementAge = document.getElementById("retirementAge").value;
    let yearsUntilRetirement = retirementAge - currentAge;
    let neededIncome = document.getElementById("neededIncome").value;
    let wantedIncome = document.getElementById("wantedIncome").value;
    let monthlyIncome = Number(neededIncome) + Number(wantedIncome);
    let yearlyIncome = monthlyIncome * 12;
    let endAge = document.getElementById("endAge").value;
    let yearsOfRetirement = endAge - retirementAge;
    let totalSavings = yearlyIncome * yearsOfRetirement;
    let yearlySavings = totalSavings / yearsUntilRetirement;
    let monthlySavings = Math.floor(Number(yearlySavings) / 12);
    totalSavings = addCommas(totalSavings);
    monthlySavings = addCommas(monthlySavings);
    if (currentAge === "" || retirementAge === "" || neededIncome === "" || wantedIncome === "" || endAge === "") {
        document.getElementById("required").innerHTML = "All fields are required."
    } else if (retirementAge < currentAge || endAge<retirementAge || endAge<currentAge) {
        document.getElementById("required").innerHTML = "Current age must be less than retirement age.<br>Retirement age must be less than life expectancy age.";
    } else {
        document.getElementById("required").innerHTML ="";
        document.getElementById("results").innerHTML = `
        <p>To fit your lifestyle needs, you'll need this amount saved into your retirement fund:</p>
        <p id="totalRetirementSavings" class="savings">$${totalSavings}</p>
        <p>Given your current age of ${currentAge}, to meet your retirement goal by age ${retirementAge} you'll need a monthly savings deposit of approximatly:</p>
        <p id="monthlySavingsDeposit" class="savings">$${monthlySavings}</p>
        <p>These figures do not include COL or inflation raises over the next ${yearsUntilRetirement} year(s).</p>`;
        document.getElementById("results").scrollIntoView();
    }
});