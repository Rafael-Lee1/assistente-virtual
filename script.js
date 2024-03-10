// script.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');

const responses = {
    'Olá': 'Olá! Como posso ajudar?',
    'Qual é o seu nome?': 'Meu nome é Assistente Virtual.',
    'Como você está?': 'Estou bem, obrigado por perguntar!',
    'O que você pode fazer?': 'Posso responder a perguntas simples. Tente me fazer uma pergunta!',
    'Tchau': 'Até mais! Tenha um ótimo dia!'
};

function chat() {
    rl.question('Você: ', function(question) {
        const response = responses[question] || 'Desculpe, não entendi. Por favor, faça outra pergunta.';
        console.log('Assistente Virtual:', response);
        chatLog.innerHTML += `<p><strong>Você:</strong> ${question}</p><p><strong>Assistente Virtual:</strong> ${response}</p>`;
        chat();
    });
}

console.log('Assistente Virtual: Olá! Como posso ajudar?');
chat();
