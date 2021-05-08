function compute()
{
    p = document.getElementById("principal").value;
    document.getElementById("principal").style.borderColor = "gray";
    if (p >0){
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="<br> If you deposit "+
                                                    "<span class='highlight'>"+p+"</span>"+
                                                    ",<br>at an interest rate of "+
                                                    "<span class='highlight'>"+rate+"%"+"</span>"+
                                                    "<br>You will receive an amount of "+
                                                    "<span class='highlight'>"+interest+",<br> in the year "+
                                                    "<span class='highlight'>"+year+"</span>"
           
    
    } else {
            document.getElementById("principal").style.borderColor = "Crimson";
            alert("Enter a positive number")
            document.getElementById("principal").focus();
            document.getElementById("result").innerHTML="";
            
        }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        