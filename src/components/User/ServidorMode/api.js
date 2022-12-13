import axios from "axios";

export const login = (email, senha) => {
  // chamar a api de login
  // pegar o id retornado e colocar no lugar da string "123456"
  localStorage.setItem("idServidor", "123456");
};

export const getServidorById = () => {
    return {
        _id: "6392307c59068a6b8f11dd94",
        matricula: "3",
        nome: "Maria Fontenele",
        foto: "https://abctreinamentos.com.br/imgs/maria.png",
        orgao: "ENAP",
        vinculo: "Estatutário",
        cargo: "Analista",
        lotacao: "Brasília",
        exercicio: "Departamento de Treinamento",
        email: "mariafontenele@enap.br",
        telefone: "(61) 3255-6010",
        celular: "(61) 99910-5722",
        dataAdmissao: "2013-05-13T12:55:40.496Z",
        cpf: "123.4567.789-01",
        dataNascimento: "1980-12-22T12:55:40.496Z",
        naturalidade: "Recife",
        courses: [
            {
                _id: "637e641e33c5e00029d13bab",
                nome: "Web Development Bootcamp",
                idCurso: "1",
                formaRealizacao: "EAD",
                foto: "https://abctreinamentos.com.br/imgs/cursos/webdevelopment.png",
                local: "Virtual",
                ofertante: "Ironhack",
                periodoInscricao: "01/09/2022 a 30/09/2022",
                vagas: 50,
                periodoRealizacao: "16/10/2022 a 16/12/2022",
                valor: 23000,
                tipo: "Aperfeiçoamento",
                site: "https://www.ironhack.com/en/web-development",
                descricao: "Junte-se ao nosso campo de desenvolvimento Web e obtenha as habilidades práticas necessárias para conseguir um emprego na crescente indústria tecnológica. Aprenda HTML, CSS, Javascript, Reage e muito mais. Torne-se um desenvolvedor full-stack em apenas 9 semanas em tempo integral ou 24 semanas em tempo parcial (não é necessário ter experiência prévia em TI!). Você pode aprender pessoalmente ou remotamente, encontre todas as informações aqui.",
                criteriosSelecao: "Trabalhar no setor de TI",
                situacao: "Concluído",
                govemployees: [
                    "6392307c59068a6b8f11dd94"
                ],
                updatedAt: "2022-12-08T23:05:32.439Z"
            }
        ],
        updatedAt: "2022-12-08T23:05:32.457Z"
    }
}

export const matricularCurso = (idCurso, idServidor) => {
  console.log(idCurso, idServidor);
  axios
    .put(
      `https://siscapacit2-api.cyclic.app/cursos/matricularCurso/${idCurso}/${idServidor}/`,
      {}
    )
    .then((res) => {
      console.log(res);
      alert("Matrícula feita com sucesso")
    }).catch(() => {
        alert("Ops, algo deu errado.")
    })
};

export const desmatricularCurso = (idCurso, idServidor) => {
    console.log(idCurso, idServidor);
    axios
      .put(
        `https://siscapacit2-api.cyclic.app/cursos/desmatricularCurso/${idCurso}/${idServidor}/`,
        {}
      )
      .then((res) => {
        console.log(res);
        alert("Matrícula feita com sucesso")
      }).catch(() => {
          alert("Ops, algo deu errado.")
      })
  };
