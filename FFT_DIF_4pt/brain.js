function getElement(id)
{
    return(document.getElementById(id));
}

function processData()
{
    w1 = math.complex("1");
    w2 = math.complex("-i");

    i0 = math.complex((getElement("input0").value).replace("j","i"));
    i1 = math.complex((getElement("input1").value).replace("j","i"));
    i2 = math.complex((getElement("input2").value).replace("j","i"));
    i3 = math.complex((getElement("input3").value).replace("j","i"));

    getElement("stg0_out").innerHTML = String(i0) + "<br>" + String(i1) + "<br>" + String(i2) + "<br>" + String(i3)

    
}