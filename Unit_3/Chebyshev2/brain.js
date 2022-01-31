function getElement(id)
{
    return(document.getElementById(id));
}

function processData()
{
    getElement("output_container").scrollIntoView();
    Ap = Number(getElement("input0").value);
    As = Number(getElement("input1").value);
    omegaP = Number(getElement("input2").value);
    omegaS = Number(getElement("input3").value);
    var T = Number(getElement("input4").value);
    if(getElement("bilinear").checked)
        transform = "Bilinear";
    else if(getElement("impulseInvariant").checked)
        transform = "Impulse Invariant";
    else
        getElement("output_container").innerHTML=`<h5 class="red-text bold">ERROR</h5>`
    getElement("out_g").innerHTML=`<h6 class="indigo-text text-darken-4 bold">${transform} Transform</h6>Ap = ${Ap}<br><br>
    As = ${As}<br><br>Ωp = ${omegaP}<br><br>Ωs = ${omegaS}<br><br>
    `;
    if(transform == "Bilinear")
    {
        //       Order of the filter
        var N = (Math.acosh( Math.pow(( (1 / Math.pow(As,2)) - 1 ),1/2) / Math.pow(( (1 / Math.pow(Ap,2)) - 1 ),1/2 )) / Math.acosh(omegaS/omegaP)).toPrecision(5);
        getElement("out_o").innerHTML = `<img class="materialboxed" src="./bilinear_images/n.jpeg" /><br><br>N = ${N} ~= ${Math.ceil(N)}<br><br>`;
        N = Math.ceil(N);

        //       Cut off Frequency
        var Fc = (omegaP / Math.pow( ( (1 / Math.pow(Ap,2)) - 1 ) , 1/(2*N))).toPrecision(5);
        getElement("out_c").innerHTML = `<img class="materialboxed" src="./bilinear_images/c.jpeg" /><br><br>Ωc = ${Fc} rad/sec<br><br>`;

    }
    else
    {
        //       Order of the filter
        var N = (Math.acosh( Math.pow(( (1 / Math.pow(As,2)) - 1 ),1/2) / Math.pow(( (1 / Math.pow(Ap,2)) - 1 ),1/2 )) / Math.acosh(omegaS/omegaP)).toPrecision(5);
        getElement("out_o").innerHTML = `<img class="materialboxed" src="./impulseinvariant_images/n.jpeg" /><br><br>N = ${N} ~= ${Math.ceil(N)}<br><br>`;
        N = Math.ceil(N);

        //       Cut off Frequency
        var Fc = (omegaP / Math.pow( ( (1 / Math.pow(Ap,2)) - 1 ) , 1/(2*N))).toPrecision(5);
        getElement("out_c").innerHTML = `<img class="materialboxed" src="./impulseinvariant_images/c.jpeg" /><br><br>Ωc = ${Fc} rad/sec<br><br>`;

    }

    // rest of the stuff
    var epsilon = (Math.pow(( (1 / Math.pow(Ap,2)) - 1 ),1/2)).toPrecision(3);
    var mu = ((1/epsilon) + Math.pow((1+Math.pow(epsilon,-2)),1/2)).toPrecision(4);
    var a = (omegaP * (Math.pow(mu,1/N)-Math.pow(mu,-1/N)) / 2).toPrecision(7);
    var b = (omegaP * (Math.pow(mu,1/N)+Math.pow(mu,-1/N)) / 2).toPrecision(7);
    var hao = 1 / (Math.pow(1+(epsilon*epsilon),1/2));
    var numerator = Ap * hao;
    getElement("out_t").innerHTML = `
    <img class="materialboxed" src="./tf/euab.jpeg" /><br><br>
    Є = ${epsilon}<br><br>
    μ = ${mu}<br><br>
    a = ${a}<br><br>
    b = ${b}<br><br><br><br>

    Ha(o) = ${hao.toPrecision(4)}<br><br>
    Numerator = Ha(o) x Denominator_Constant<br><br>
    Denominator : <br>
    <img class="materialboxed" src="./tf/den.jpeg" /><br><br>
    `;
}