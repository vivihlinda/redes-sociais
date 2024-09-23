document.getElementById('questionario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dados = {
    redeSocial: document.getElementById('redeSocial').value,
    tempoConectado: document.getElementById('tempoConectado').value,
    joga: document.getElementById('joga').value,
    tipoJogo: document.getElementById('tipoJogo').value,
    tempoJogo: document.getElementById('tempoJogo').value
    };
    
    // Envio dos dados para a API (substitua pela sua API real)
    fetch('sua_api_endpoint', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    gerarGrafico(data);
    })
    .catch(error => console.error('Erro:', error));
    });
    
    // Função para gerar gráfico
    function gerarGrafico(dados) {
    const ctx = document.createElement('canvas');
    document.getElementById('graficoContainer').innerHTML = ''; // Limpa o container
    document.getElementById('graficoContainer').appendChild(ctx);
    
    const labels = dados.map(item => item.redeSocial);
    const tempoConectado = dados.map(item => item.tempoConectado);
    
    new Chart(ctx, {
    type: 'bar',
    data: {
    labels: labels,
    datasets: [{
    label: 'Tempo Conectado (horas)',
    data: tempoConectado,
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
    }]
    },
    options: {
    scales: {
    y: {
    beginAtZero: true
    }
    }
    }
    });
    }