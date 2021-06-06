var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const frases = [
  "Não tenha medo da mudança. Coisas boas se vão para que melhores possam vir.",
  "Vencedor não é aquele que sempre vence, mas sim aquele que nunca para de lutar.",
  "Nunca diga eu não consigo. Você consegue sim, basta ter força de vontade e fé.",
  "Às vezes você tem que levantar sozinho e seguir em frente...",
  "Hoje são dias de guerra. Amanhã serão de glória.",
  "No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim.",
  "Consciente das dificuldades procuro sempre encontrar motivação para os meus sonhos.",
  "Tudo é possível. O impossível apenas demora mais...",
  "Até o maior dos prédios começa no chão.",
  "Jamais desista de ser feliz.",
  "Não é com desculpas que irá atingir os seus objetivos!",
  "Esquece, levanta a cabeça. Segue em frente. Amanhã é um novo dia.",
  "Se você não lutar por alguma coisa, será vencido por qualquer coisa.",
  "Não podemos vencer sempre, mas é sempre possível lutar com dignidade até ao fim.",
  "Que a minha coragem seja sempre mais forte do que a tentação de parar e desistir.",
  "Não sabendo que era impossível, foi lá e fez.",
  "Não chore porque acabou, sorria porque aconteceu.",
  "Seu maior medo também pode ser sua maior motivação.",
  "Não desista nunca!",
  "Ninguém é igual a você, e isso pode ser sua grande arma.",
  "A vida é curta demais para deixarmos nossos sonhos adormecidos.",
  "Não desista, pois a cada segundo você está um passo mais próximo do seu obetivo!",
  "Você é forte, você é capaz, você pode!",
  "Enquanto você tiver força para lutar, terá possibilidade de ganhar.",
  "Acreditar é ser feliz ainda antes de acontecer.",
  "A sua felicidade pode estar no próximo passo.",
  "Bons resultados vêm de boas atitudes. Lute sem comprometer sua integridade.",
  "Corra, viva, sonhe e alcance!",
  "A revolução começa na hora que olhamos para dentro de nós. Se o fizermos, tudo pode acontecer!",
  "Hoje vai dar tudo certo!",
  "São os caminhos difíceis que nos levam aos finais felizes.",
  "Às vezes uma coisa boa acaba para que outra melhor comece.",
  "Não desista! A força que você precisa está dentro do seu peito.",
  "Antes de tudo, seja tudo que quiser!",
  "Tome as rédeas da sua vida e faça valer a pena!",
  "Coragem! Custe o que custar, doa o que doer, você é capaz e vai conseguir!",
  "A felicidade está sempre ao seu alcance!",
  "Você deve a si o ato de tentar."
]

app.get('/', function (req, res, next) {
  res.json({ msg: frases[Math.floor(Math.random() * frases.length)] })
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})