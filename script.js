function compute()
{
    p = document.getElementById("principal").value;
    
    if (p >0){
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerText="\n If you deposit "+p+",\nat an interest rate of "+rate+"%.\n"+"You will receive an amount of "+interest+",\n in the year "+year
        } else {
            alert("Enter a positive number")
        }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        