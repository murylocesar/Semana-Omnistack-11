const cors = require('cors');
const express = require('express');
const routes = require('./route.js');

const app = express();

app.use(cors());
app.use(express.json());

/*
* Tipos de parâmetros
*   Query Params: parâmetros nomeado enviado na rota (server para Filtro, paginação )
*   Route Params: parâmetros utilizados para identificar recursos
*   Request Body: Corpo da requisição
*/

app.use(routes);

app.listen(3333);
