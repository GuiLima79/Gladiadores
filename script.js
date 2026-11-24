
document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector("#qform");
    const botao = document.querySelector("#finalizar");
    const resultado = document.querySelector("#resultado");

    if (!formulario || !botao || !resultado) {
        console.error("Não encontrei o formulário, botão ou resultado.");
        return;
    }

    const gabarito = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "b",
        q5: "b",
        q6: "c",
        q7: "b",
        q8: "a",
        q9: "c",
        q10: "b"
    };

    const nomes = Object.keys(gabarito);

    // Mostrar resultado
    function mostrarResultado(pontos) {
        resultado.style.display = "block";

        resultado.innerHTML = `
            <h2>Questionário finalizado!</h2>
            <h1>${pontos}/10</h1>
            <p>Você acertou ${pontos} questões!</p>
        `;
    }

    // Finalizar questionário
    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        // Verificar se todas foram respondidas
        const todasRespondidas = nomes.every(nome => {
            return formulario.querySelector(
                `input[name="${nome}"]:checked`
            );
        });

        if (!todasRespondidas) {
            alert("Responda todas as 10 perguntas antes de finalizar!");
            return;
        }

        // Calcular pontuação
        let pontos = 0;

        nomes.forEach(nome => {
            const selecionada = formulario.querySelector(
                `input[name="${nome}"]:checked`
            );

            if (selecionada.value === gabarito[nome]) {
                pontos++;
            }
        });

        // Bloquear formulário
        formulario.querySelectorAll("input").forEach(input => {
            input.disabled = true;
        });

        botao.disabled = true;

        // Mostrar resultado
        mostrarResultado(pontos);
    });

});
