// Scheduling Job

/*Com os dados Json recebidos e armazenados na variável Job*/
let Job = [

    { "ID": 1, "Descricao": "Importação de arquivos de fundos",   "DataMaxima": "2019-11-10 12:00:00", "tempo": 2 }, 
    { "ID": 2, "Descricao": "Importação de dados da Base Legada", "DataMaxima": "2019-11-11 12:00:00", "tempo": 4 }, 
    { "ID": 3, "Descricao": "Importação de dados de integração",  "DataMaxima": "2019-11-11 08:00:00", "tempo": 6 }]

  

/* Objeto Date criado com os parametros estabelecidos com data de inicio e fim*/

// Data inicio
const janelaInicio = new Date('2019-11-10 09:00:00');
// Data final
const janelaFim = new Date('2019-11-11 12:00:00');


for (i = 0; i < Job.length; i++) {//Laço for para percorrer todos os itens do array iniciando no indice 0 até o tamanho do array(length)
    let dateIndex = Job[i].DataMaxima;//Variavel que armazena a data de cada job
    let num = Job[i].ID

    if (janelaInicio.getTime() <= new Date(Job[i].DataMaxima).getTime() && janelaFim.getTime() >= new Date(Job[i].DataMaxima).getTime()) {     /*Se a data de inicio da janela for MENOR ou IGUAL que a data/hora do job
                                                                                                                                    E a data final da janela for MAIOR ou IGUAL, ou seja a data do JOB tem que 
                                                                                                                                    estar entre as datas da janela*/
        console.log('O job do ID', num, 'do dia', dateIndex, 'está DENTRO da janela');

        console.log("---------------------------------------------------------------------------")
    } else {
        
        console.log('O job do ID', num, 'do dia', dateIndex, 'está FORA da janela');
        
    }
}

//Método sort() para ordenar os elementos de um array
Job.sort(function (a, b) {
    let dateA = new Date(a.DataMaxima),
        dateB = new Date(b.DataMaxima);
    return dateA - dateB;
});


// Laço for para imprimir os ID's 
let count = 0;
console.log();
console.log('Output ID´s');
for (i = 0; i < Job.length; i++) {

    count = count + Job[i].tempo;
    let ids = Job[i].ID    
    console.log(ids);
    
    if (count == 8) {
        /*Pula uma linha*/
        console.log();
        count = 0;
    }
    
}

