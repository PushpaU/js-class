function calculateBMI()
{
    let mass1 = parseFloat(document.getElementById('mass1').value);
    let height1 = parseFloat(document.getElementById('height1').value);
    let mass2 = parseFloat(document.getElementById('mass2').value);
    let height2 = parseFloat(document.getElementById('height2').value);

    let bmi1 = mass1 / (height1 * height1);
    let bmi2 = mass2 / (height2 * height2);

    let result;
    
    console.log(`Mark's BMI: ${bmi1}`);
    console.log(`John's BMI: ${bmi2}`);

    if (bmi1 > bmi2) {
        result = "Mark has a higher BMI.";
    } else if (bmi1 < bmi2) {
        result = "John has a higher BMI.";
    } else {
        result = "Both have the same BMI.";
    }

    alert(result);

}