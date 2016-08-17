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
### POST \api\ep\getById
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