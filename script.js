let dados = []; // Todos os dados carregados
let dadosFiltrados = []; // Dados que estão sendo exibidos (pode ser busca ou tudo)
let limiteAtual = 9; // Quantos cards aparecem por vez

async function carregarDados() {
    try {
        const response = await fetch('data.json');
        dados = await response.json();
        dadosFiltrados = dados; // Inicialmente, os filtrados são todos
        exibirCards();
    } catch (error) {
        console.error("Erro ao carregar data.json:", error);
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

    // Pega apenas a fatia (slice) dos dados baseada no limite atual
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
                <p class="descricao">${item.descricao}</p>
                <a href="${item.link_externo}" target="_blank" class="btn-link">Ver no Google Maps 🗺️</a>
            </div>
        `;
        
        container.appendChild(card);
    });

    // Lógica do Botão Ver Mais
    // Se ainda tiver mais itens do que o limite atual, mostra o botão
    if (dadosFiltrados.length > limiteAtual) {
        btnVerMais.style.display = 'flex';
    } else {
        btnVerMais.style.display = 'none';
    }
}

function verMais() {
    limiteAtual += 9; // Aumenta +9 a cada clique
    exibirCards();
}

function pesquisar() {
    const termo = document.getElementById('campo-pesquisa').value.toLowerCase();
    
    // Filtra na base total
    dadosFiltrados = dados.filter(item => 
        item.nome.toLowerCase().includes(termo) || 
        item.descricao.toLowerCase().includes(termo) ||
        item.tags.some(tag => tag.toLowerCase().includes(termo))
    );

    // Reseta o limite para 9 quando faz uma nova busca (UX melhor)
    limiteAtual = 9; 
    exibirCards();
}

document.getElementById('campo-pesquisa').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') pesquisar();
});

carregarDados();
