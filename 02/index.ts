import { lerArquivo, escreverArquivo } from "../01/index"
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

const cadastrarUsuario = (dados: Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[]
    bd.push(dados)
    escreverArquivo(bd)
    return dados
}

const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[]
}
const Alex = cadastrarUsuario({
    nome: 'teste2',
    email: '@gmail.com',
    cpf: '02372929209',
    profissao: 'dev',
    endereco: {
        cep: '15424545',
        rua: 'Terceira',
        bairro: '1',
        cidade: 'ITB'
    }
})

const bd = lerArquivo()
console.log(Alex, bd)