const genetic= require("bidanjs/genetic/genetic")




let generation = 0 //TODO: esta es la generacion que se esta creando(la actual)

let genetico = new genetic("./data/lianPerformace", generation)

let agents = genetico.orderBy(1)
let routes = genetico.findRoutes(generation, agents, (g, a)=>{
    return `data/gen${generation}/PesosLian_A_` + a
})
genetico.findAgent(routes)


for (let i = 0; i < 100; i++) {
    let newWight = genetico.initWeights(0.1,0)
    genetico.saveWeight(`data/gen${generation + 1}/PesosLian_A_${i}`, newWight)
}