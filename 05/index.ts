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

const filtrarUsuarios = (filtro?: string): Usuario[] => {
    const bd = lerArquivo() as Usuario[]

    const usuarios = bd.filter(usuario => {
        if (filtro) {
            return usuario.profissao === filtro
        }
        return usuario
    })
    return usuarios
}

const bd = filtrarUsuarios('dev1')
console.log(bd)