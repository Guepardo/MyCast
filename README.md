# MyCast Documentação API

Documentação da api de uma pequena aplicação.

## Podcast
### POST \api\pod\new
Parâmetro:
```js
{
    "nome" : "Hipsters Tech", 
    "url"  : "http://hipsters.tech/feed/podcast/"
}
```
Exemplo de saída:
```js
{status : true }
```
### POST \api\pod\getAll
Parâmetro:
```js
Sem parâmetro
```
Exemplo de saída:
```js
{
  "msg": [
    {
      "_id": "57b423e04e47f1d40e5912ba",
      "nome": "99vidas"
    },
    {
      "_id": "57b424144e47f1d40e5912f0",
      "nome": "NerdCast"
    },
    {
      "_id": "57b4242a4e47f1d40e59152c",
      "nome": "Hipsters Tech"
    }
  ]
}
```

## Episódio

### POST \api\epi\getById
Parâmetro:
```js
{
    "id" : "57b423e24e47f1d40e5912c5"
}
```
Exemplo de saída:
```js
{
  "status": true,
  "msg": {
    "_id": "57b423e24e47f1d40e5912c5",
    "nome": "99Vidas 221 – 2-Pak: Persona 4 e Golden Sun",
    "vitrine": "nada",
    "midia": "http://99vidas.com.br/podpress_trac/web/5476/0/99vidas-221-Persona-4-Golden-Sun.mp3",
    "__v": 0
  }
}
```
### POST \api\epi\getEpisodesByPodcastId
Parâmetro:
```js
{
    "id" : "57b423e24e47f1d40e5912c5"
}
```
Exemplo de saída:
```js
{
  "status": true,
  "msg": {
    "_id": "57b4242a4e47f1d40e59152c",
    "nome": "Hipsters Tech",
    "episodios": [
      {
        "_id": "57b4242c4e47f1d40e59152d",
        "nome": "Agilidade – Hipsters #05",
        "vitrine": "http://hipsters.tech/wp-content/uploads/2016/08/Hipsters-menor-05.png",
        "midia": "http://media.blubrry.com/hipsterstech/content.blubrry.com/hipsterstech/hipsters_005_agilidade.mp3",
        "__v": 0
      },
      {
        "_id": "57b4242c4e47f1d40e59152e",
        "nome": "Histórias do Cloud – Hipsters #04",
        "vitrine": "http://hipsters.tech/wp-content/uploads/2016/08/Hipsters-menor-04.png",
        "midia": "http://media.blubrry.com/hipsterstech/content.blubrry.com/hipsterstech/hipsters_004_historias_do_cloud.mp3",
        "__v": 0
      },
      {
        "_id": "57b4242c4e47f1d40e59152e",
        "nome": "Histórias do Cloud – Hipsters #04",
        "vitrine": "http://hipsters.tech/wp-content/uploads/2016/08/Hipsters-menor-04.png",
        "midia": "http://media.blubrry.com/hipsterstech/content.blubrry.com/hipsterstech/hipsters_004_historias_do_cloud.mp3",
        "__v": 0
      },
      {
        "_id": "57b4242c4e47f1d40e59152f",
        "nome": "Progressive Web Apps – Hipsters #03",
        "vitrine": "http://hipsters.tech/wp-content/uploads/2016/08/Hipsters3.png",
        "midia": "http://media.blubrry.com/hipsterstech/content.blubrry.com/hipsterstech/hipsters_003_progressive_web_apps.mp3",
        "__v": 0
      },
      {
        "_id": "57b4242c4e47f1d40e591530",
        "nome": "Vida de Agência – Hipsters #02",
        "vitrine": "http://hipsters.tech/wp-content/uploads/2016/08/Hipsters2.png",
        "midia": "http://media.blubrry.com/hipsterstech/content.blubrry.com/hipsterstech/hipsters_002_vida_de_agencia.mp3",
        "__v": 0
      },
      {
        "_id": "57b4242c4e47f1d40e591531",
        "nome": "Tecnologias no Nubank – Hipsters #01",
        "vitrine": "http://hipsters.tech/wp-content/uploads/2016/08/Hipsters1.png",
        "midia": "http://media.blubrry.com/hipsterstech/content.blubrry.com/hipsterstech/hipsters_001_tecnologias_no_nubank.mp3",
        "__v": 0
      }
    ]
  }
}
```

