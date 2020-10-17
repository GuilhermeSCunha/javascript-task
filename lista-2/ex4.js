//Receba um array de aluno com as notas 4 dos bimestres, e retorne um array contendo o nome, a media de cada aluno e informaçao se o mesmo foi aprovado ou reprovado, sabendo que as notas podem variar de 0 a 10 e a média minima para aprovaçao é 7.
//### ENTRADA EXEMPLO
//[
//  {
//    nome: "Jonas",
//    notas: [1, 4, 10, 8],
//  },//
  //{
  //  nome: "Adam",
  //  notas: [10, 5, 6, 3],
//  },
//  {
//    nome: "Marta",
//    notas: [7, 8, 7, 8],
//  },
//];

//### SAIDA EXEMPLO
//[
 // {
    //nome: "Jonas",
   // media: 5.75,
   // status: "reprovado"
//  },
//  {
//    nome: "Adam",
//    media: 6,
//    status: "reprovado"
//  },
//  {
//    nome: "Marta",
//    media: 7.5,
//    status: "aprovado"
//  },
//];




const data = [

    {
      nome: "Jonas",
      notas: [6, 5, 9, 8],
    },

    {
      nome: "Adam",
      notas: [6, 5, 9, 7.9],
    },

    {
      nome: "Marta",
      notas: [7, 8, 7, 8],
    },

    {
        nome: "Marcos",
        notas: [10, 8, 9, 8],
      },

    
      {
        nome: "Gustavo",
        notas: [10, 10, 10, 10],
      },

      {
        nome: "Pablo",
        notas: [7, 7, 7, 7],
      },

      {
        nome: "Tiago",
        notas: [4, 6, 7, 3],
      }



  ]

  let total = 0;

function media (input) {
    const soma = input.map((item) => {
        const arrayDeSoma = item["notas"].map( (item, index = 0) => {
            const result = total + item;
            total = result;
            index = index + 1;
            if (index ===4) {
                index = 0;
                total = 0;
            }
            return result;
        })

        const somaResultados = arrayDeSoma.pop();
        return somaResultados;
    })


    const media = soma.map ((item) => {
        return item / 4;
    })
    return media;

}


 function pegarNomes (alunos) {
    const alunoNome = alunos.map((nome) => {
        return nome["nome"];
    })
    return alunoNome;
}
const md = media (data);

const nomes = pegarNomes (data);

function verficarAprovacao (medias) {
    const wasApproved = medias.map((media) => {
        let isApproved;
        if (media >=7 ) {
            isApproved = "aprovado";
        }else {
            isApproved = "reprovado";
        }
        return isApproved;
    })
    return wasApproved;
}

const mediaVerificada = verficarAprovacao(md);


function juntarItens (nome, media, status, index = 0) {
    const alunos = nome.map((item) => {
    const aluno = new Object ()
    aluno.nome = nome[index];
    aluno.media = media[index];
    aluno.status = status[index];
    index = index + 1;

    return aluno;
    })

    return alunos;
}

const mediaDosAlunos = juntarItens (nomes, md, mediaVerificada);

console.log (mediaDosAlunos);

