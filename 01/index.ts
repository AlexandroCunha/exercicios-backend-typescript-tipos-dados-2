const fs = require('fs')

export const escreverArquivo = (dados: any): void => {
    fs.writeFileSync('../bd.json', JSON.stringify(dados))
}

export const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('../bd.json'))
}

const dados = lerArquivo() as string[]

//dados.push('Fernanda')
//escreverArquivo(dados)

//console.log(lerArquivo())
