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