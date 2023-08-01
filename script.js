// Tópicos em aula:
// Desenvolver calculadora de Idade, utilizando template disponibilizado
// Algoritmo:

// 1. Pegar os valores
// 2. Calcular a Idade
   //   a. Com base no ano
     // b. Com mês (EXTRA)
     // c. Com dia (EXTRA)

// 3. Gerar a faixa etária
   
   //Resultado            Faixa
    // 0 à 12                Criança
    // 13 à 17                Adolescente
    // 18 à 65               Adulto
    // Acima de 65         Idoso
   

// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;



function calcular(event) {
    event.preventDefault()

    console.log("Foi executada a função calcular")

     let usuario = receberValores()

     console.log(faixaetaria)

     window.location.reload()

}


function receberValores() {
    let nomeRecebido = document.getElementById("nome").value.trim()
    let diaRecebido = document.getElementById("dia").value
    let mesdiaRecebido = document.getElementById("mes").value
    let anodiaRecebido = document.getElementById("ano").value



    let dadosUsuario = {
    nome: diaRecebido,
    dia: diaRecebido,
    ano: diaRecebido,
    }

    console.log(dadosUsuario)

    return dadosUsuario

}

function calcularidade(imc) {
    let dataAtual = new Date();
    let anoAtual= dataAtual.getFullYear();

    let idade = anoAtual - diaRecebido
    return idade
}

function faixaetaria(idade) {
    if(idade >= 0 && idade <= 12){
       console.log("Criança")
       return "Criança"
  
    } else if(idade >= 13 && idade <= 17) {
       console.log("Adolescente")
         return "Adolescente"
    } else if(idade >= 18 && idade <= 65) {
            console.log("Adulto")
              return "Adulto"
    } else if(idade > 65) {
            console.log("Idoso")
             return "Idoso"
           }
    }

    function calcular (event) {
        event.preventDefault()
        
    console.log ("Executada a função calcular.")
        let usuario = faixaetaria()     
        

    }
