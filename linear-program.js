function primalStepSimplex(A) {
  const lin = A.length; // linhas.
  const col = A[0].length; // colunas.
  let isOptimal = false;

  // Determinação do elemento a_max e da sua coluna col_pivot.
  let col_pivot = 0;
  let a_max = A[0][0];

  for (let j = 1; j < col - 1; j++) {
    if (A[0][j] > a_max) {
      col_pivot = j;
      a_max = A[0][j];
    }
  }

  if (a_max <= 0) {
    isOptimal = true;
    return isOptimal; // achou a solução ótima
  }

  // Determinar o menor b_j/A_jmax e sua linha lin_pivot
  let lin_pivot = 1;

  let min_bA = 1E9;

  for (let i = 1; i < lin; i++) {
    const aux = A[i][col - 1] / A[i][col_pivot];

    if (aux < 0) continue;

    if (aux < min_bA) {
      lin_pivot = i;
      min_bA = aux;
    }
  }

  // Escalonar a coluna col_pivot usando como pivot A[lin_pivot][col_pivot]
  for (let j = 0; j < col; j++) {
    if (j == col_pivot) {
      continue;
    }

    A[lin_pivot][j] /= A[lin_pivot][col_pivot];

    for (let i = 0; i < lin; i++) {
      if (i == lin_pivot) {
        continue;
      }

      A[i][j] += -A[i][col_pivot] * A[lin_pivot][j];
    }
  }

  A[lin_pivot][col_pivot] = 1;

  for (let i = 0; i < lin; i++) {
    if (i == lin_pivot) {
      continue;
    }

    A[i][col_pivot] = 0;
  }

  return isOptimal;
}

function buildTableau(A) {
  const num_variable = A[1].length - 1;
  const num_restrict = A.length - 1;
  const b = [];

  for (i = 0; i < num_restrict; i++) { // salva os elementos de b
    b[i] = A[i + 1][A[i + 1].length - 1];
  }

  // completa os espaços com 0 ou 1
  for (let i = 0; i < num_restrict; i++) {
    A[0][A[0].length] = 0;
    for (let j = 0; j < num_restrict; j++) {
      if (num_variable + i == num_variable + j) {
        A[i + 1][num_variable + j] = 1;
      } else {
        A[i + 1][num_variable + j] = 0;
      }
    }

    // acrescenta o elemento da coluna b
    A[i + 1][A[i + 1].length] = b[i];
  }

  A[0][A[0].length] = 0;
}

function buildTableDisplay(s, A) {
  let steps = "Passo " + s + ":<br><table><tr>";

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      steps += "<td>" + A[i][j];
    }

    steps += "<tr>";
  }

  steps += "</table><br>";

  return steps;
}

function displaySimplex(A) {
  buildTableau(A); 
  let step = 0;
  table = buildTableDisplay(step++, A);
  primalStepSimplex(A);

  do {
    table += buildTableDisplay(step++, A);
  } while (!primalStepSimplex(A));

  table += "<br>Solução Ótima: " + -A[0][A[0].length - 1];

  return table;
}