const http = require('http');
const url = require('url');
const petshop = require('./petshop');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/plain; charset=UTF-8"
    });

    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;

    switch (rota) {
        case "/pets":
            const pets = petshop.listarPets();
            res.write(pets.length > 0 ? pets : `Nenhum pet cadastrado :(`);
            break;

        case "/pets/add":
            let novoPet = queryString;
            res.write(petshop.adicionarPet(novoPet) ? `${novoPet.nome} foi cadastrado com sucesso!` : `Ops, algo deu errado!`);
            break;

        case "/pets/buscar":
            const petsEcontrados = petshop.buscarPet(queryString.nome);
            if (petsEcontrados.length > 0) {
                res.write(
                    `Encontramos ${petsEcontrados.length} pets com o nome ${queryString.nome}`
                )
            } else {
                res.write(`Ops, não econtramos nenhum pet com esse nome!`);
            }
            break;

        default:
            res.write('** Bem vindos ao Petshop **');
    }
    res.end();

}).listen(3000, "localhost", () => {
    console.log("o servidor foi iniciado!")
});