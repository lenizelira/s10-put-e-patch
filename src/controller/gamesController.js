const games = require('../model/games.json')



const atualizar = (request, response)=>{
    const gameAtualizado = request.body
    const id = parseInt(request.params.id)

    const gameIds = games.map(game => game.id)
    
    const atualizaId = gameIds.indexOf(id)

    const gameAtualizadocomId = {id, ...gameAtualizado}
    games.splice(atualizaId, 1, gameAtualizadocomId)

    response.status(200).send(games.find(game => game.id === id))
    console.log(games)
}

const update = (request, response) =>{
    const gameAtualizacao = request.body
    const id = parseInt(request.params.id)
    const gameParaAtualizar = games.find(game=>game.id == id)

    Object.keys(gameAtualizacao).forEach((chave)=>{
        gameParaAtualizar[chave] = gameAtualizacao[chave]
    })

    response.status(200).send(gameParaAtualizar)
}



module.exports = {
    atualizar,
    update
}

