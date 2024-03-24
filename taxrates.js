//making a function to calculate  NHIF deductions based on gross pay 
function calculatetheNHIFdeductions(grossPay){
    //written details of the gross pay 
    if(grossPay<6000){
        return 150
    }
    else if (grossPay < 8000) {
        return 300
    }

    else if (grossPay < 12000) {
        return 400
    }

    else if (grossPay < 15000) {
        return 500
    }

    else if (grossPay < 20000) {
        return 600
    }

    else if (grossPay < 25000) {
        return 750
    }

    else if (grossPay < 30000) {
        return 850
    }

    else if (grossPay < 35000) {
        return 900
    }

    else if (grossPay < 40000) {
        return  950
    }

    else if (grossPay < 45000) {
        return 1000
    }

    else if (grossPay < 50000) {
        return 1100
    }

    else if (grossPay < 60000) {
        return 1200
    }

    else if (grossPay < 70000) {
        return 1300
    }

    else if (grossPay < 80000) {
        return 1400
    }
     
    else if (grossPay < 90000) {
        return 1500
    }

    else if (grossPay < 100000) {
        return 1600
    }
    else {
        return 1700
    }
}
// the function is to calculate the nssf  amount based on gross pay.
function calculateTheNSSFContribution(pensionablePay){
    const tierIRate = 0.06;
    const tierIIMax = 36000;
    //calculating NSSF contribution based on pensionable pay and return the minimum of the calculated contribution and tier II maximum contribution
    return Math.min(pensionablePay*tierIRate,tierIIMax*tierIRate);
}
// a function used to calculate the net salary based on the basic salary and benefits of the person
function calculateTheNetSalary(basicSalary,benefits){
    //calculate the gross salary by adding basic salary and benefits
    const grossSalary = basicSalary = benefits ;
    //calculate NHIF deductions based on the gross salary
    const nhifDeductions = calculatetheNHIFdeductions(grossSalary);
    //calculate NSSF deductions based on the basic salary
    const nssfDeductions = calculateTheNSSFContribution(basicSalary);

    //calculate the net salary by subtracting NHIF and NSSF deductions from gross salary
    const netSalary = grossSalary - nhifDeductions - nssfDeductions;

    return {
        grossSalary : grossSalary,
        NHIFDeductions : nhifDeductions,
        NSSFContribution : nssfDeductions,
        netSalary:netSalary

    };

   



}
 //Here i defined te basicSalary and benefits
 const basicSalary = 20000;
 const benefits = 5000;
 const salaryDetails = calculateTheNetSalary(basicSalary,benefits);
 //output for the salary detials of the person
 console.log(salaryDetails)