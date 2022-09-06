function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //Criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'img/foto-crianca-m.png')
            } else if (idade < 21) {
                //Criança
                img.setAttribute('src', 'icmg/foto-jovem-m.png')
            } else if (idade < 50) {
                //jovem
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
            document.body.style.background = '#0282d3'

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //Criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'img/foto-crianca-f.png')
            } else if (idade < 21) {
                //Criança
                img.setAttribute('src', 'icmg/foto-jovem-f.png')
            } else if (idade < 50) {
                //jovem
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
            document.body.style.background = 'pink'

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}