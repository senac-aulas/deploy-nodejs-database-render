let contatos = [];

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const criarContato = async (nome, sobrenome, email) => {
  const novoContato = await prisma.contact.create({
    data: {
      name: nome,
      sobrenome,
      email,
    }
  });
  
  return novoContato
};

const listarContatos = async () => {
  const contatos = await prisma.contact.findMany();

  console.log('contatos', contatos)

  return contatos
};

module.exports = { criarContato, listarContatos };
