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

function displaySimplex(A) {
  let step = 0;
  table = buildTable(step++, A);
  primalStepSimplex(A);

  do {
    table += buildTable(step++, A);
  } while (!primalStepSimplex(A));

  table += "<br>Solução Ótima: " + -A[0][A[0].length - 1];

  return table;
}

function buildTable(s, M) {
  let steps = "Passo " + s + ":<br><table><tr>";

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      steps += "<td>" + M[i][j];
    }

    steps += "<tr>";
  }

  steps += "</table><br>";

  return steps;
}
