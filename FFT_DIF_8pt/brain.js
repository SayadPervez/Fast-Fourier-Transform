function getElement(id)
{
    return(document.getElementById(id));
}

function processData()
{
    w0 = math.complex("1");
    w1 = math.complex("0.707-0.707i");
    w2 = math.complex("-i");
    w3 = math.complex("-0.707-0.707i");

    x0 = math.complex((getElement("input0").value).replaceAll("j","i"));
    x1 = math.complex((getElement("input1").value).replaceAll("j","i"));
    x2 = math.complex((getElement("input2").value).replaceAll("j","i"));
    x3 = math.complex((getElement("input3").value).replaceAll("j","i"));
    x4 = math.complex((getElement("input4").value).replaceAll("j","i"));
    x5 = math.complex((getElement("input5").value).replaceAll("j","i"));
    x6 = math.complex((getElement("input6").value).replaceAll("j","i"));
    x7 = math.complex((getElement("input7").value).replaceAll("j","i"));

    getElement("stg_out").innerHTML = (String(x0) +"<br><br>" + String(x1) +"<br><br>" + String(x2) +"<br><br>" + String(x3) +"<br><br>" + String(x4) +"<br><br>" + String(x5) +"<br><br>" + String(x6) +"<br><br>" + String(x7)).replaceAll("i","j");

    // bit reversal
    /*
    i0 = x0;    i1 = x4;    i2 = x2;    i3 = x6;
    i4 = x1;    i5 = x5;    i6 = x3;    i7 = x7;
    */

    
}