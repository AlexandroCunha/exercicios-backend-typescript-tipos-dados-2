import { escreverArquivo, lerArquivo } from "../01"

type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null
}

const excluirUsuario = (cpf: string): Usuario => {
    const bd = lerArquivo() as Usuario[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        throw new Error("Usuario nao encontardo");

    }

    const exclusao = bd.filter(usuario => {
        return usuario.cpf !== cpf
    })

    escreverArquivo(exclusao)
    return usuario
}

console.log(excluirUsuario('12345678903'))