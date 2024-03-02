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

const detalharUsuario = (cpf: string): Usuario => {
    const bd = lerArquivo() as Usuario[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        throw new Error("Usuario Nao encontrado");

    }
    return usuario
}

//console.log(detalharUsuario('02372929208'))

const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {

    const bd = lerArquivo() as Usuario[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        throw new Error("Usuario Nao encontrado");
    }
    Object.assign(usuario, dados)

    escreverArquivo(bd)

    return dados

}

atualizarUsuario('12345678903', {
    nome: 'teste',
    email: '@gmail.com',
    cpf: '12345678903',
    profissao: 'dev jr',
    endereco: {
        cep: '15424545',
        rua: 'Terceira',
        bairro: '1',
        cidade: 'ITB'
    }
})
const bd = lerArquivo()
console.log(bd)