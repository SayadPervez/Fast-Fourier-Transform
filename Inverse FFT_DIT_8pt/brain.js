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

    i0 = x0;    i1 = x4;    i2 = x2;    i3 = x6;
    i4 = x1;    i5 = x5;    i6 = x3;    i7 = x7;

    getElement("stg0_out").innerHTML = (String(i0) +"<br><br>" + String(i1) +"<br><br>" + String(i2) +"<br><br>" + String(i3) +"<br><br>" + String(i4) +"<br><br>" + String(i5) +"<br><br>" + String(i6) +"<br><br>" + String(i7)).replaceAll("i","j");

    ii0 = math.add(i0,i1);
    ii1 = math.add(i0,i1.neg());
    ii2 = math.add(i2,i3);
    ii3 = math.add(i2,i3.neg());
    ii4 = math.add(i4,i5);
    ii5 = math.add(i4,i5.neg());
    ii6 = math.add(i6,i7);
    ii7 = math.add(i6,i7.neg());

    getElement("stg1_out").innerHTML = (String(ii0) +"<br><br>" + String(ii1) +"<br><br>" + String(ii2) +"<br><br>" + String(ii3) +"<br><br>" + String(ii4) +"<br><br>" + String(ii5) +"<br><br>" + String(ii6) +"<br><br>" + String(ii7)).replaceAll("i","j");

    iii0 = math.add(ii0,ii2);
    iii1 = math.add(ii1,math.multiply(ii3,w2));
    iii2 = math.add(ii0,ii2.neg());
    iii3 = math.add(ii1,(math.multiply(ii3,w2)).neg());
    iii4 = math.add(ii4,ii6);
    iii5 = math.add(ii5,math.multiply(ii7,w2));
    iii6 = math.add(ii4,ii6.neg());
    iii7 = math.add(ii5,(math.multiply(ii7,w2)).neg());

    getElement("stg2_out").innerHTML = (String(iii0) +"<br><br>" + String(iii1) +"<br><br>" + String(iii2) +"<br><br>" + String(iii3) +"<br><br>" + String(iii4) +"<br><br>" + String(iii5) +"<br><br>" + String(iii6) +"<br><br>" + String(iii7)).replaceAll("i","j");

    f0 = (math.add(iii0,iii4)).format(6);
    f1 = (math.add(iii1,math.multiply(iii5,w1))).format(6);
    f2 = (math.add(iii2,math.multiply(iii6,w2))).format(6);
    f3 = (math.add(iii3,math.multiply(iii7,w3))).format(6);
    f4 = (math.add(iii0,iii4.neg())).format(6);
    f5 = (math.add(iii1,(math.multiply(iii5,w1)).neg())).format(6);
    f6 = (math.add(iii2,(math.multiply(iii6,w2)).neg())).format(6);
    f7 = (math.add(iii3,(math.multiply(iii7,w3)).neg())).format(6);

    getElement("stg3_out").innerHTML = (String(f0) +"<br><br>" + String(f1) +"<br><br>" + String(f2) +"<br><br>" + String(f3) +"<br><br>" + String(f4) +"<br><br>" + String(f5) +"<br><br>" + String(f6) +"<br><br>" + String(f7)).replaceAll("i","j");
}