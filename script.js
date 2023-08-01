function calcular(event) {
    event.preventDefault()

    console.log("Foi executada a função calcular")

     let usuario = receberValores()

     console.log(faixaetaria)

     window.location.reload()

}


function receberValores() {
    let nomeRecebido = document.getElementById("nome").value.trim()
    let diaRecebido = document.getDateElementById("dia").value
    let mesdiaRecebido = document.getMonthElementById("mes").value
    let anodiaRecebido = document.getFullYearElementById("ano").value



    let dadosUsuario = {
    nome: diaRecebido,
    dia: diaRecebido,
    ano: diaRecebido,
    }

    console.log(dadosUsuario)

    return dadosUsuario

}

function calcularidade(imc) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let idade = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}
console.log(getAge("1991/05/02")) // 31