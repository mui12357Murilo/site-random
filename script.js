document.addEventListener('DOMContentLoaded', () => {  
// 1. Efeito de Digitação Automática na Descrição  
const descriptionElement = document.querySelector('.panel p');  
if (descriptionElement) {  
// Guarda o texto original e limpa o elemento para o efeito  
const originalText = "Bem-vindo à interface de comando. A malha de dados está pronta para processamento.";  
descriptionElement.textContent = '';  
descriptionElement.classList.add('description'); // Garante a classe do CSS 

let index = 0;  
function typeWriter() {  
if (index < originalText.length) {  
descriptionElement.textContent += originalText.charAt(index);  
index++;  
setTimeout(typeWriter, 40); // Velocidade da digitação (em milissegundos)  
}  
}  
// Inicia o efeito após 500ms  
setTimeout(typeWriter, 500);  
} 

// 2. Adiciona Log de Eventos Dinâmico no Terminal Decorativo  
const terminal = document.querySelector('.terminal-decor');  
if (terminal) {  
const logs = \[  
"> mem\_scan: complete (0.002s)",  
"> firewall: active\_shield\_on",  
"> status: pronto para execução"  
\]; 

logs.forEach((logText, i) => {  
setTimeout(() => {  
const p = document.createElement('p');  
p.textContent = logText;  
p.style.color = "rgba(0, 243, 255, 0.6)";  
terminal.appendChild(p);  
}, 1500 + (i \* 800)); // Aparecem gradativamente após o carregamento  
});  
}  
}); 

// 3. Função de Ação do Botão Principal (Chamada pelo HTML)  
function iniciarConexao() {  
const btn = document.querySelector('.btn-action');  
if (!btn) return; 

// Desabilita temporariamente para evitar cliques duplos  
btn.disabled = true;  
const textoOriginal = btn.textContent;  
btn.textContent = "PROCESSANDO...";  
btn.style.borderColor = "var(--neon-blue)";  
btn.style.color = "var(--neon-blue)"; 

// Simula uma resposta do sistema após 1.5 segundos  
setTimeout(() => {  
alert('▶ PROTOCOLO DE SEGURANÇA ATIVADO\\nConexão criptografada estabelecida com sucesso.'); 

// Restaura o botão ao estado original  
btn.disabled = false;  
btn.textContent = textoOriginal;  
btn.style.borderColor = "var(--neon-purple)";  
btn.style.color = "var(--neon-purple)"; 

// Adiciona um log de sucesso no terminal de forma persistente  
const terminal = document.querySelector('.terminal-decor');  
if (terminal) {  
const successLog = document.createElement('p');  
successLog.textContent = `> link_established: ${new Date().toLocaleTimeString()}`;  
successLog.style.color = "#00ff66"; // Verde para sucesso  
terminal.appendChild(successLog);  
}  
}, 1500);  
}
