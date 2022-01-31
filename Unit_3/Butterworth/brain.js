function getElement(id)
{
    return(document.getElementById(id));
}

function processData()
{
    getElement("output_container").scrollIntoView();
    Ap = Number(getElement("input0").value);
    As = Number(getElement("input1").value);
    Wp = Number(getElement("input2").value);
    Ws = Number(getElement("input3").value);
    var T = Number(getElement("input4").value);
    if(getElement("bilinear").checked)
        transform = "Bilinear";
    else if(getElement("impulseInvariant").checked)
        transform = "Impulse Invariant";
    else
        getElement("output_container").innerHTML=`<h5 class="red-text bold">ERROR</h5>`
    getElement("out_g").innerHTML=`<h6 class="indigo-text text-darken-4 bold">${transform} Transform</h6>Ap = ${Ap}<br><br>
    As = ${As}<br><br>Wp = ${Wp}<br><br>Ws = ${Ws}<br><br>
    `;
    if(transform == "Bilinear")
    {   //       Analog Frequency
        omegaP = ((2/T)*Math.tan(Wp/2)).toPrecision(6);
        omegaS = ((2/T)*Math.tan(Ws/2)).toPrecision(6);
        getElement("out_a").innerHTML = `Ωp = ${omegaP} rad/sec<br><br>Ωs = ${omegaS} rad/sec<br><br>`;

        //       Order of the filter
        var N = ((1/2)* Math.log( ( (1 / Math.pow(As,2)) - 1 ) / ( (1 / Math.pow(Ap,2)) - 1 ) ) / Math.log(omegaS/omegaP)).toPrecision(5);
        getElement("out_o").innerHTML = `N = ${N} ~= ${Math.ceil(N)}<br>`;
        N = Math.ceil(N);

        //       Cut off Frequency
        var Fc = (omegaP / Math.pow( ( (1 / Math.pow(Ap,2)) - 1 ) , 1/(2*N))).toPrecision(5);
        getElement("out_c").innerHTML = `Fc = ${Fc} rad/sec<br>`;
    }
    else
    {   //       Analog Frequency
        omegaP = (Wp/T).toPrecision(6);
        omegaS = (Ws/T).toPrecision(6);
        getElement("out_a").innerHTML = `Ωp = ${omegaP} rad/sec<br><br>Ωs = ${omegaS} rad/sec<br><br>`;

        //       Order of the filter
        var N = ((1/2)* Math.log( ( (1 / Math.pow(As,2)) - 1 ) / ( (1 / Math.pow(Ap,2)) - 1 ) ) / Math.log(omegaS/omegaP)).toPrecision(5);
        getElement("out_o").innerHTML = `N = ${N} ~= ${Math.ceil(N)}<br>`;
        N = Math.ceil(N);

        //       Cut off Frequency
        var Fc = (omegaP / Math.pow( ( (1 / Math.pow(Ap,2)) - 1 ) , 1/(2*N))).toPrecision(5);
        getElement("out_c").innerHTML = `Fc = ${Fc} rad/sec<br>`;
    }
}