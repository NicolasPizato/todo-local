function obterTarefas() {
    return JSON.parse(localStorage.getItem('tarefas')) || [];
}

function salvarTarefas(tarefas) {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function adicionarTarefa() {
    const input = document.getElementById('tarefa');
    const texto = input.value.trim();

    if (texto === "") return;

    const tarefas = obterTarefas();
    tarefas.push(texto);
    salvarTarefas(tarefas);
    input.value = "";
    exibirTarefas();
}

function removerTarefa(index) {
    const tarefas = obterTarefas();
    tarefas.splice(index, 1);
    salvarTarefas(tarefas);
    exibirTarefas();
}

function exibirTarefas() {
    const lista = document.getElementById('listaTarefas');
    lista.innerHTML = "";

    const tarefas = obterTarefas();
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.textContent = tarefa;

        const btn = document.createElement('button');
        btn.textContent = "Remover";
        btn.className = "remover";
        btn.onclick = () => removerTarefa(index);

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", exibirTarefas);
