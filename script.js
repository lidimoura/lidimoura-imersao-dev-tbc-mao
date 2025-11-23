let dados = [];
let dadosFiltrados = [];
let limiteAtual = 10; 

async function carregarDados() {
    try {
        const response = await fetch('data.json');
        dados = await response.json();
        dadosFiltrados = dados;
        exibirCards();
    } catch (error) {
        console.error("Erro:", error);
    }
}

function exibirCards() {
    const container = document.getElementById('resultados-pesquisa');
    const btnVerMais = document.getElementById('ver-mais-container');
    
    container.innerHTML = '';

    if (dadosFiltrados.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%">Nenhum local encontrado.</p>';
        btnVerMais.style.display = 'none';
        return;
    }

    const dadosParaMostrar = dadosFiltrados.slice(0, limiteAtual);

    dadosParaMostrar.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-visual">
                <span class="categoria-tag">${item.categoria}</span>
            </div>
            <div class="card-content">
                <h2>${item.nome}</h2>
                
                <div class="info-local">📍 ${item.localizacao}</div>
                
                <div class="info-acess">
                    <strong>Acessibilidade:</strong> ${item.acessibilidade}
                </div>

                <p class="descricao">${item.descricao}</p>
                
                <a href="${item.link_externo}" target="_blank" class="btn-link">
                    Ver no Google Maps
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });

    if (dadosFiltrados.length > limiteAtual) {
        btnVerMais.style.display = 'flex';
    } else {
        btnVerMais.style.display = 'none';
    }
}

function verMais() {
    limiteAtual += 10;
    exibirCards();
}

function pesquisar() {
    const termo = document.getElementById('campo-pesquisa').value.toLowerCase();
    
    dadosFiltrados = dados.filter(item => 
        item.nome.toLowerCase().includes(termo) || 
        item.descricao.toLowerCase().includes(termo) ||
        item.tags.some(tag => tag.toLowerCase().includes(termo))
    );

    limiteAtual = 10; 
    exibirCards();
}

document.getElementById('campo-pesquisa').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') pesquisar();
});

carregarDados();
