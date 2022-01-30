function getElement(id)
{
    return(document.getElementById(id));
}

function processData()
{
    w1 = math.complex("1");
    w2 = math.complex("-i");

    x1 = math.complex((getElement("input1").value).replace("j","i"));
    x2 = math.complex((getElement("input2").value).replace("j","i"));
    x3 = math.complex((getElement("input3").value).replace("j","i"));
    x4 = math.complex((getElement("input4").value).replace("j","i"));

    i1 = x1;
    i2 = x3;
    i3 = x2;
    i4 = x4;

    getElement("stg0_out").innerHTML = String(i1) + "<br>" + String(i2) + "<br>" + String(i3) + "<br>" + String(i4)

    ii1 = math.add(i1,i2);
    ii2 = math.add(i1,i2.neg());
    ii3 = math.add(i3,i4);
    ii4 = math.add(i3,i4.neg());

    getElement("stg1_out").innerHTML = String(ii1) + "<br>" + String(ii2) + "<br>" + String(ii3) + "<br>" + String(ii4)

    iii1 = math.add(ii1,ii3);
    iii2 = math.add(ii2,math.multiply(ii4,w2));
    iii3 = math.add(ii1,ii3.neg());
    iii4 = math.add(ii2,(math.multiply(ii4,w2)).neg());

    getElement("stg2_out").innerHTML = String(iii1) + "<br>" + String(iii2) + "<br>" + String(iii3) + "<br>" + String(iii4)
}