let pets = [];
// let pets = [{ nome: "Rex" }, { nome: "Fera" }];

const listarPets = () => {
    let conteudo = ""
    for (let pet of pets) {
        conteudo += `
        -------------------
        ${pet.nome}
        -------------------`;
    }
    return conteudo;
};

const adicionarPet = novoPet => pets.push(novoPet);

const buscarPet = petNome => pets.filter(pet => pet.nome == petNome);

module.exports = { listarPets, adicionarPet, buscarPet };