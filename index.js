const express = require('express')
const app = express()
//const queries = require('./src/data/queries.json')


//rota para ler o json
app.get('/', (req, res)=>{
    return res.json('resposta')
})  



//rota caso informe somente a hora

app.get('/vin1/rest/clock/:hora' ,(req, res) =>{
    let hour = req.params.hour
    let minutes = "0"
    let tempo = hour+":"+minutes
    let querieFound = queries.find ((querie) =>{
        return querie.time === tempo;
    })
//caso seja verdadeiro
    if(querieFound){
        var angulo = querieFound['angle']
    } else { 
        angulo = "buscar no DB"
        //comando para conectar
        //comando para achar
        //associar o valor achar variavel angulo
    }
    return res.json(angulo) // add a nova consulta ao arquivo json
})

// rota caso informe hora e minuto

app.get ('/vin1/rest/clock/:hora/minutes' ,(req, res) =>{
    let hour = req.params.hour
    let minutes = req.params.minutes
    let tempo = hour+":"+minutes
    let querieFound = queries.find ((querie) =>{
        return querie.time === tempo;
    
    })
//caso seja verdadeiro
    if(querieFound){
    var angulo = querieFound['angle']
   }else{ 
    angulo = "buscar no DB"
    //comando para conectar
    //comando para achar
    //associar o valor achar variavel angulo
    }
    return res.json(angulo) // add a nova consulta ao arquivo json
 })

 app.listen(8080, () =>{
    console.log('servidor iniciado')
})

