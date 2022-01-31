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

    i0 = math.add(x0,x4);
    i1 = math.add(x1,x5);
    i2 = math.add(x2,x6);
    i3 = math.add(x3,x7);
    i4 = math.multiply(math.add(x0,x4.neg()),w0);
    i5 = math.multiply(math.add(x1,x5.neg()),w1);
    i6 = math.multiply(math.add(x2,x6.neg()),w2);
    i7 = math.multiply(math.add(x3,x7.neg()),w3);

    getElement("stg1_out").innerHTML = (String(i0) +"<br><br>" + String(i1) +"<br><br>" + String(i2) +"<br><br>" + String(i3) +"<br><br>" + String(i4) +"<br><br>" + String(i5) +"<br><br>" + String(i6) +"<br><br>" + String(i7)).replaceAll("i","j");

    ii0 = math.add(i0,i2);
    ii1 = math.add(i1,i3);
    ii2 = math.multiply(math.add(i0,i2.neg()),w0);
    ii3 = math.multiply(math.add(i1,i3.neg()),w2);
    ii4 = math.add(i4,i6);
    ii5 = math.add(i5,i7);
    ii6 = math.multiply(math.add(i4,i6.neg()),w0);
    ii7 = math.multiply(math.add(i5,i7.neg()),w2);

    getElement("stg2_out").innerHTML = (String(ii0) +"<br><br>" + String(ii1) +"<br><br>" + String(ii2) +"<br><br>" + String(ii3) +"<br><br>" + String(ii4) +"<br><br>" + String(ii5) +"<br><br>" + String(ii6) +"<br><br>" + String(ii7)).replaceAll("i","j");

    iii0 = math.add(ii0,ii1);
    iii1 = math.add(ii0,ii1.neg());
    iii2 = math.add(ii2,ii3);
    iii3 = math.add(ii2,ii3.neg());
    iii4 = math.add(ii4,ii5);
    iii5 = math.add(ii4,ii5.neg());
    iii6 = math.add(ii6,ii7);
    iii7 = math.add(ii6,ii7.neg());

    getElement("stg3_out").innerHTML = (String(iii0) +"<br><br>" + String(iii1) +"<br><br>" + String(iii2) +"<br><br>" + String(iii3) +"<br><br>" + String(iii4) +"<br><br>" + String(iii5) +"<br><br>" + String(iii6) +"<br><br>" + String(iii7)).replaceAll("i","j");

    // bit reversal
    f0 = (iii0).format(6);    f1 = (iii4).format(6);    f2 = (iii2).format(6);    f3 = (iii6).format(6);
    f4 = (iii1).format(6);    f5 = (iii5).format(6);    f6 = (iii3).format(6);    f7 = (iii7).format(6);

    getElement("stgf_out").innerHTML = (String(f0) +"<br><br>" + String(f1) +"<br><br>" + String(f2) +"<br><br>" + String(f3) +"<br><br>" + String(f4) +"<br><br>" + String(f5) +"<br><br>" + String(f6) +"<br><br>" + String(f7)).replaceAll("i","j");

}