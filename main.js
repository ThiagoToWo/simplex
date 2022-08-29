const form = document.querySelector("form");
const pre = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const matrixTxt = form.inMatrix.value;
  const linesTxt = matrixTxt.split("\n");

  const matrix = [];

  for (let i = 0; i < linesTxt.length; i++) {
    const line = [];
    const columnTxt = linesTxt[i].split(" ");

    for (let j = 0; j < columnTxt.length; j++) {
      line[j] = Number(columnTxt[j]);
    }

    matrix[i] = line;
  }
  
  pre.innerHTML = displaySimplex(matrix);
});