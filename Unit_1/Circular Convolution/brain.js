function getElement(id)
{
    return(document.getElementById(id));
}


       
// Function to find circular convolution
function convolution(x, h, n, m)
{
    let output_array = [];
    let MAX_SIZE = 1000 ;
    let row_vec = new Array(MAX_SIZE);
    row_vec.fill(0);
    let col_vec = new Array(MAX_SIZE);
    col_vec.fill(0);
    let out = new Array(MAX_SIZE);
    out.fill(0);
    let circular_shift_mat = new Array(MAX_SIZE);
    circular_shift_mat.fill(0);
    for (let i = 0; i < MAX_SIZE; i++)
    {
        circular_shift_mat[i] = new Array(MAX_SIZE);
        for (let j = 0; j < MAX_SIZE; j++)
        {
            circular_shift_mat[i][j] = 0;
        }
    }
    
    // Finding the maximum size between the
    // two input sequence sizes
    let maxSize = n > m ? n : m;
    
    // Copying elements of x to row_vec and padding
    // zeros if size of x < maxSize
    for (let i = 0; i < maxSize; i++)
    {
        if (i >= n)
        {
            row_vec[i] = 0;
        }
        else
        {
            row_vec[i] = x[i];
        }
    }
    
    // Copying elements of h to col_vec and padding
    // zeros if size of h is less than maxSize
    for (let i = 0; i < maxSize; i++)
    {
        if (i >= m)
        {
            col_vec[i] = 0;
        }
        else
        {
            col_vec[i] = h[i];
        }
    }
    
    // Generating 2D matrix of
    // circularly shifted elements
    let k = 0, d = 0;
    
    for (let i = 0; i < maxSize; i++)
    {
        let curIndex = k - d;
        for (let j = 0; j < maxSize; j++)
        {
            circular_shift_mat[j][i] =
            row_vec[curIndex % maxSize];
            curIndex++;
        }
        k = maxSize;
        d++;
    }
    
    // Computing result by matrix
    // multiplication and printing results
    for (let i = 0; i < maxSize; i++)
    {
        for (let j = 0; j < maxSize; j++)
        {
    
            out[i] += circular_shift_mat[i][j] * col_vec[j];
        }
        output_array.push(out[i]);
    }
    return(output_array);
}

function processData()
{
    getElement("output_container").scrollIntoView();
    x = (getElement("inputx").value).split(",").map(Number);
    h = (getElement("inputh").value).split(",").map(Number);
    out = convolution(x,h,x.length,h.length);
    getElement("qout").innerHTML = `<h6 class="black-text bold">X(n) :</h6>${x.join("<br>")}<br><h6 class="black-text bold">H(n) :</h6>${x.join("<br>")}<br>`
    getElement("out").innerHTML = out.join("<br>");
    getElement("len").innerHTML = out.length;
}