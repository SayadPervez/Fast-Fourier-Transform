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
    {   //       Order of the filter
        var N = ((1/2)* Math.log( ( (1 / Math.pow(As,2)) - 1 ) / ( (1 / Math.pow(Ap,2)) - 1 ) ) / Math.log(omegaS/omegaP)).toPrecision(5);
        getElement("out_o").innerHTML = `<img class="materialboxed" src="./bilinear_images/n.jpeg" /><br><br>N = ${N} ~= ${Math.ceil(N)}<br><br>`;
        N = Math.ceil(N);

        //       Cut off Frequency
        var Fc = (omegaP / Math.pow( ( (1 / Math.pow(Ap,2)) - 1 ) , 1/(2*N))).toPrecision(5);
        getElement("out_c").innerHTML = `<img class="materialboxed" src="./bilinear_images/c.jpeg" /><br><br>Ωc = ${Fc} rad/sec<br><br>`;

        //       Normalized TF
        getElement("out_t").innerHTML = `<img class="materialboxed" src="./tf/${N}.jpeg" /><br><img class="materialboxed" src="./tf/x.jpeg" /><br><br>`;
    }
    else
    {   //       Order of the filter
        var N = ((1/2)* Math.log( ( (1 / Math.pow(As,2)) - 1 ) / ( (1 / Math.pow(Ap,2)) - 1 ) ) / Math.log(omegaS/omegaP)).toPrecision(5);
        getElement("out_o").innerHTML = `<img class="materialboxed" src="./impulseinvariant_images/n.jpeg" /><br><br>N = ${N} ~= ${Math.ceil(N)}<br><br>`;
        N = Math.ceil(N);

        //       Cut off Frequency
        var Fc = (omegaP / Math.pow( ( (1 / Math.pow(Ap,2)) - 1 ) , 1/(2*N))).toPrecision(5);
        getElement("out_c").innerHTML = `<img class="materialboxed" src="./impulseinvariant_images/c.jpeg" /><br><br>Ωc = ${Fc} rad/sec<br><br>`;

        //       Normalized TF
        getElement("out_t").innerHTML = `<img class="materialboxed" src="./tf/${N}.jpeg" /><br><img class="materialboxed" src="./tf/x.jpeg" /><br><br>`;
    }
}