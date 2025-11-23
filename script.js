// Variável para guardar os dados
let dados = [];

// 1. Carregar os dados do arquivo JSON
async function carregarDados() {
    try {
        const response = await fetch('data.json');
        dados = await response.json();
        exibirCards(dados); // Mostra tudo ao iniciar
    } catch (error) {
        console.error("Erro ao carregar base de conhecimento:", error);
    }
}

// 2. Renderizar os cards na tela
function exibirCards(lista) {
    const container = document.getElementById('resultados-pesquisa');
    container.innerHTML = ''; // Limpa a tela

    if (lista.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%">Nenhum resultado encontrado.</p>';
        return;
    }

    lista.forEach(item => {
        // Define um emoji baseado na categoria
        let emoji = '📍';
        if (item.categoria === 'Natureza') emoji = '🌿';
        if (item.categoria === 'Gastronomia') emoji = '🥘';
        if (item.categoria === 'Cultura') emoji = '🎭';
        if (item.categoria === 'Aventura') emoji = '🛶';

        // Cria o HTML do card
        const card = document.createElement('article');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-emoji">${emoji}</div>
            <div class="card-content">
                <span class="categoria">${item.categoria}</span>
                <h2>${item.nome}</h2>
                <div class="local">📍 ${item.localizacao}</div>
                <p class="descricao">${item.descricao}</p>
                <a href="${item.link_externo}" target="_blank" class="btn-link">Ver Localização</a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// 3. Função de Busca
function pesquisar() {
    const termo = document.getElementById('campo-pesquisa').value.toLowerCase();
    
    // Filtra pelo nome ou pela descrição
    const resultadosFiltrados = dados.filter(item => 
        item.nome.toLowerCase().includes(termo) || 
        item.descricao.toLowerCase().includes(termo) ||
        item.tags.some(tag => tag.toLowerCase().includes(termo))
    );

    exibirCards(resultadosFiltrados);
}

// Permite apertar ENTER para buscar
document.getElementById('campo-pesquisa').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') pesquisar();
});

// Inicia o app
carregarDados();
