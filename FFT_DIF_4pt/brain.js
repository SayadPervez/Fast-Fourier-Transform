function getElement(id)
{
    return(document.getElementById(id));
}

function processData()
{
    w0 = math.complex("1");
    w2 = math.complex("-i");

    i0 = math.complex((getElement("input0").value).replace("j","i"));
    i1 = math.complex((getElement("input1").value).replace("j","i"));
    i2 = math.complex((getElement("input2").value).replace("j","i"));
    i3 = math.complex((getElement("input3").value).replace("j","i"));

    getElement("stg0_out").innerHTML = String(i0) + "<br><br>" + String(i1) + "<br><br>" + String(i2) + "<br><br>" + String(i3)

    ii0 = math.add(i0,i2);
    ii1 = math.add(i1,i3);
    ii2 = math.multiply(math.add(i0,i2.neg()),w0);
    ii3 = math.multiply(math.add(i1,i3.neg()),w2);

    getElement("stg1_out").innerHTML = String(ii0) + "<br><br>" + String(ii1) + "<br><br>" + String(ii2) + "<br><br>" + String(ii3)

    iii0 = math.add(ii0,ii1);
    iii1 = math.add(ii0,ii1.neg());
    iii2 = math.add(ii2,ii3);
    iii3 = math.add(ii2,ii3.neg());

    getElement("stg2_out").innerHTML = String(iii0) + "<br><br>" + String(iii1) + "<br><br>" + String(iii2) + "<br><br>" + String(iii3)

    f0 = iii0;
    f1 = iii2;
    f2 = iii1;
    f3 = iii3;

    getElement("stgf_out").innerHTML = String(f0) + "<br><br>" + String(f1) + "<br><br>" + String(f2) + "<br><br>" + String(f3)
}