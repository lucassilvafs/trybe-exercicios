const express = require('express');
require('express-async-errors');
const morgan = require('morgan'); // para gerar os logs da aplicação
const cors = require('cors'); // deixar outros ips acessarem a API
const helmet = require('helmet'); // middleware de segurança da aplicação
const rateLimit = require('express-rate-limit');
// O express-rate-limit é um middleware para limitar solicitações repetidas a APIs e/ou endpoints públicos
// proteger a API de ataques DDoS

// Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
  max: 100, // número máximo de requisições
  windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: 'Muitas requisições originadas desta IP', // mensagem personalizada quando atinge o limit rate
});

const apiCredentials = require('./middlewares/apiCredentials');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');

const app = express();

app.use(express.json());
app.use(express.static('./images'));
// configura para procurar o path no diretório ./images
// Com essa configuração, uma requisição GET /brasao/COR.png vai passar primeiro pelo express.static,
// que procura por um arquivo em ./images/brasao/COR.png e vai enviá-lo se ele for encontrado.

app.use(morgan('dev')); // para gerar os logs da aplicação
app.use(cors()); // deixar outros ips acessarem a API
app.use(helmet()); // middleware de segurança da aplicação
app.use(limiter); // para proteger a API de ataques DDoS, limitando o número de requisições por IP

let nextId = 3;

const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.get('/teams', (req, res) => res.json(teams));

app.use(apiCredentials); // a partir daqui a requisição irá precisar de credenciais para acessar a API 

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

// app.get('/teams/:id', existingId, (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find((t) => t.id === id);
//   if (team) {
//     res.json(team);
//   } else {
//     res.sendStatus(404);
//   }
// });

// app.use(apiCredentials);

app.post('/teams', validateTeam, (req, res) => {
  if ( // if alongado pra explicação
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.includes(req.body.sigla)
    // !req.teams.teams.includes(req.body.sigla) 2 teams? --> do course --> Trybe

    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

app.use((req, res) => res.sendStatus(404));

module.exports = app;