const pessoas = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtrarUsuariosPorNome = (
  pessoas: { nome: string; idade: number; status: boolean }[],
  nome: string
) => {
  const filtro = pessoas.filter((pessoa) => {
    return pessoa.nome.toLowerCase().includes(nome.toLowerCase());
  });

  return filtro;
};

console.log(filtrarUsuariosPorNome(pessoas, "jo"));
