// Variavel que armazena o saldo inicial da conta
let saldo = 0

// Função para atualizar o saldo na tela
function atualizarSaldo() {
    // Selecionar o elemento do saldo e atualizar otexto com o valor formatado
    document.getElementById('saldo').textContent = saldo.toFixed(2)

}
// Função que realiza o depósito
function depositar() {
    // Obém o valor digitado pelo usuário e converte para número decimal
    valor = parseFloat(document.getElementById('valor').value)
    // Verifica se o valor é válido (maior que 0 e numérico)
    if (isNaN(valor) || valor <= 0) {
        // Exibe alerta se ovalor for válido
        alert("Por favor meu querido, insira um número válido! ")
        return // Interrompe a execução da função
    }
    // Adicionar valor ao saldo
    saldo += valor
    // Atualizar o saldona tela
    atualizarSaldo()

    // Exibir uma mensagem confirmando odepósito
    alert("Tá podendo hein! Depósito de R$ " + valor.toFixed(2) + " realizado com sucesso!")

}

// Função que realiza o  saque
function sacar() {
    // Obtém o valor digtado pelousuário e converte para decimal
    valor = parseFloat(document.getElementById('valor').value)
    // Verificar se o valor é válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido parça!")
        return
    }
    // verificar se o saldo é suficiete
    if (valor > saldo) {
        alert("Pá! tA pobre!Saldo Insuficiente")
        return
    }
    // Subtrai o valor do saldo 
    saldo -= valor
    
    // Atualizar o saldo
    atualizarSaldo()
    alert("Saque de R$ "+ valor.toFixed(2) + "  realizado com sucesso!")
}