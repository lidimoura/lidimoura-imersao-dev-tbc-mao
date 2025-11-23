let dados = [];

async function carregarDados() {
    try {
        const response = await fetch('data.json');
        dados = await response.json();
        exibirCards(dados);
    } catch (error) {
        console.error("Erro ao carregar data.json:", error);
    }
}

function exibirCards(lista) {
    const container = document.getElementById('resultados-pesquisa');
    container.innerHTML = '';

    if (lista.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%">Nenhum local encontrado.</p>';
        return;
    }

    lista.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        
        // Estrutura nova: Faixa colorida com a categoria dentro
        card.innerHTML = `
            <div class="card-visual">
                <span class="categoria-tag">${item.categoria}</span>
            </div>
            <div class="card-content">
                <h2>${item.nome}</h2>
                <div class="info-local">📍 ${item.localizacao}</div>
                <p class="descricao">${item.descricao}</p>
                <a href="${item.link_externo}" target="_blank" class="btn-link">Ver no Google Maps 🗺️</a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function pesquisar() {
    const termo = document.getElementById('campo-pesquisa').value.toLowerCase();
    const resultados = dados.filter(item => 
        item.nome.toLowerCase().includes(termo) || 
        item.descricao.toLowerCase().includes(termo) ||
        item.tags.some(tag => tag.toLowerCase().includes(termo))
    );
    exibirCards(resultados);
}

document.getElementById('campo-pesquisa').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') pesquisar();
});

carregarDados();
