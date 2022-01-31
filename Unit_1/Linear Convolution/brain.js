function getElement(id)
{
    return(document.getElementById(id));
}

const convolve = (vec1, vec2) => {
    if (vec1.length === 0 || vec2.length === 0) {
      return(null);
    }
    const volume = vec1;
    const kernel = vec2;
    let displacement = 0;
    const convVec = [];
  
    for (let i = 0; i < volume.length; i++) {
      for (let j = 0; j < kernel.length; j++) {
        if (displacement + j !== convVec.length) {
          convVec[displacement + j] =
            convVec[displacement + j] + volume[i] * kernel[j];
        } else {
          convVec.push(volume[i] * kernel[j]);
        }
      }
      displacement++;
    }
  
    return convVec;
  };

function processData()
{
    getElement("output_container").scrollIntoView();
    x = (getElement("inputx").value).split(",").map(Number);
    h = (getElement("inputh").value).split(",").map(Number);
    out = convolve(x,h)
    getElement("qout").innerHTML = `<h6 class="black-text bold">X(n) :</h6>${x.join("<br>")}<br><h6 class="black-text bold">H(n) :</h6>${x.join("<br>")}<br>`
    getElement("out").innerHTML = out.join("<br>");
    getElement("len").innerHTML = out.length;
}