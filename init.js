const bidan = require("bidanjs")
const {relu, sigmoid} = require("bidanjs/func/Activationfunctions")


const { PerformanceLogger } = require("bidanjs/genetic/performance")
const { MaxValue } = require("bidanjs/func/InterpretFunctions")
const fs = require("fs")


var lian = new bidan.Neuralnetwork()
lian.LayerInputConfig(4, relu)
lian.LayersConfig([3, 2, 3], relu)
lian.LayerOutputConfig(3, sigmoid)

lian.initConnections()
const data = JSON.parse(fs.readFileSync("dataset.json", "utf-8"))

let Logger = new PerformanceLogger()

Logger.config("data/lianPerformace")
Logger.initGeneraction(0)

for (let o = 0; o < 1000; o++) {

   lian.initWeights()
    Logger.initAgent(1, o)

    for (let i = 0; i < 100; i++) {

        let re = [0]
        if (data[i][4] === "versicolor") {
            re = [1, 0, 0]
        } else if (data[i][4] === "virginica") {
            re = [0, 1, 0]
        } else if (data[i][4] === "setosa") {
            re = [0, 0, 1]
        }

        lian.reset()

        let d = [data[i][0], data[i][1], data[i][2], data[i][3]]
        lian.StartPrediction(d, false)

        let ar = lian.Output()
        Logger.addResult(ar, re, MaxValue)
    }

   lian.saveWeight(`data/gen0/PesosLian_A_${o}`)

   Logger.analyzeResult()
    
}
lian.info()
Logger.saveData()