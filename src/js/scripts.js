let webhook = "https://desenvolvedor-vini.app.n8n.cloud/webhook/animacao-css"
async function cliqueiNoBotao() {
    let textoInput = document.querySelector(".input-animacao").value;
    let codigo = document.querySelector(".area-codigo");
    let areaResultado = document.querySelector(".area-resultado");
    let botao = document.querySelector(".botao-magica");
    botao.disabled = true;
    botao.textContent = "Criando...";
    botao.style.background = "#999";
    let resposta = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pergunta: textoInput })
    })

    let resultado = await resposta.json();
    let info = JSON.parse(resultado.resposta);
    console.log(info);
    codigo.innerHTML = info.code;
    areaResultado.innerHTML = info.preview;
    document.head.insertAdjacentHTML('beforeend', "<style>" + info.style + "</style>");
    if (textoInput === "") {
        codigo.innerHTML = "Digite algo valido no input";
        areaResultado.innerHTML = "Digite algo valido no input";
        alert("Digite algo");
    }
    botao.disabled = false;
    botao.textContent = "Criar Mágica ✨";
    botao.style.background = "#37E359";
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        cliqueiNoBotao()
    }
})
