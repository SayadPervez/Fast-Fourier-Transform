function getElement(id)
{
    return(document.getElementById(id));
}

function processData()
{
    w1 = math.complex("1");
    w2 = math.complex("-i");

    x1 = math.complex((getElement("input1").value).replaceAll("j","i"));
    x2 = math.complex((getElement("input2").value).replaceAll("j","i"));
    x3 = math.complex((getElement("input3").value).replaceAll("j","i"));
    x4 = math.complex((getElement("input4").value).replaceAll("j","i"));

    getElement("stg_out").innerHTML = (String(x1) + "<br><br>" + String(x2) + "<br><br>" + String(x3) + "<br><br>" + String(x4)).replaceAll("i","j");

    i1 = x1;
    i2 = x3;
    i3 = x2;
    i4 = x4;

    getElement("stg0_out").innerHTML = (String(i1) + "<br><br>" + String(i2) + "<br><br>" + String(i3) + "<br><br>" + String(i4)).replaceAll("i","j");

    ii1 = math.add(i1,i2);
    ii2 = math.add(i1,i2.neg());
    ii3 = math.add(i3,i4);
    ii4 = math.add(i3,i4.neg());

    getElement("stg1_out").innerHTML = (String(ii1) + "<br><br>" + String(ii2) + "<br><br>" + String(ii3) + "<br><br>" + String(ii4)).replaceAll("i","j");

    iii1 = (math.add(ii1,ii3)).format(6);
    iii2 = (math.add(ii2,math.multiply(ii4,w2))).format(6);
    iii3 = (math.add(ii1,ii3.neg())).format(6);
    iii4 = (math.add(ii2,(math.multiply(ii4,w2)).neg())).format(6);

    getElement("stg2_out").innerHTML = (String(iii1) + "<br><br>" + String(iii2) + "<br><br>" + String(iii3) + "<br><br>" + String(iii4)).replaceAll("i","j");
}