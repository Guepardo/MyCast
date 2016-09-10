# MyCast Documentação API

Documentação da api de uma pequena aplicação.

## Usuario
### POST \api\use\getInformation
Parâmetro:
```js
Sem Parâmetro
```
Exemplo de saída:
```js
{
   "status":true,
   "msg":{
      "id":"1020212734241897399",
      "displayName":"Allysom Maciel Guimaraes",
      "name":{

      },
      "provider":"facebook",
      "_raw":"{\"name\":\"Allysom Maciel Guimaraes\",\"id\":\"1020212734241897399\"}",
      "_json":{
         "name":"Allysom Maciel Guimaraes",
         "id":"1020212734241897399"
      }
   }
}
```

## Comentários
### POST \api\com\newComment
Parâmetro:
```js
{
    "tempo"    : "00:04", 
    "texto"    : "Alguma coisa", 
    "episodio" : "57cb4c4a961bd3a81d027bd7"
}
```
Exemplo de saída:
```js
{status : true }
```

## Podcast
### POST \api\pod\new
Parâmetro:
```js
{
    "nome" : "99vidas", 
    "url"  : "http://99vidas.com.br/feed/", 
    "categoria" : "57cb4c4a961bd3a81d027bd7"
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
      "_id": "57cb5362de312fcc28c3bd2a",
      "nome": "99vidas",
      "categoria": {
        "_id": "57cb4c4a961bd3a81d027bd7",
        "nome": "Tecnologia",
        "descricao": "Podcasts de tencologia são sobre coisas legais da moda.",
        "__v": 0
      }
    },
    {
      "_id": "57cb543278271e5024f60b9d",
      "nome": "Hipsters Tech",
      "categoria": {
        "_id": "57cb4c4a961bd3a81d027bd7",
        "nome": "Tecnologia",
        "descricao": "Podcasts de tencologia são sobre coisas legais da moda.",
        "__v": 0
      }
    }
  ]
}
```
## Categoria
### POST \api\cat\new
Parâmetro:
```js
{
    "nome" : "Terror", 
    "descricao"  : "São programas com narrativas de terror."
}
```
Exemplo de saída:
```js
{
  "status": true,
  "msg": {
    "__v": 0,
    "nome": "Terror",
    "descricao": "São programas com narrativas de terror.",
    "_id": "57cb4caa2819117c1a6130c2"
  }
}
```

### POST \api\cat\getAll
Parâmetro:
```js
Sem parâmetro
```
Exemplo de saída:
```js
{
  "status": true,
  "msg": [
    {
      "_id": "57cb4c4a961bd3a81d027bd7",
      "nome": "Tecnologia",
      "descricao": "Podcasts de tencologia são sobre coisas legais da moda.",
      "__v": 0
    },
    {
      "_id": "57cb4caa2819117c1a6130c2",
      "nome": "Terror",
      "descricao": "São programas com narrativas de terror.",
      "__v": 0
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

### POST \api\epi\view
Parâmetro:
```js
{
    "id" : "57b423e24e47f1d40e5912c5"
}
```
Exemplo de saída:
```js
{
  "status": true
}
```

### POST \api\epi\search
Parâmetro:
```js
{
    "query" : "hobbit"
}
```
Exemplo de saída:
```js
{
  "status": true,
  "msg": [
    {
      "_id": "57cb5639e7e9d98c1a9db70d",
      "nome": "NerdCast 127 - O Hobbit – Lá e de volta outra vez",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_127_hobbit.mp3",
      "dataPub": "2008-09-12T08:46:55.000Z",
      "__v": 0,
      "views": 89228
    },
    {
      "_id": "57cb5639e7e9d98c1a9db62e",
      "nome": "NerdCast 343 - O Hobbit: Uma jornada esperada",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_343_hobbit_1.mp3",
      "dataPub": "2012-12-28T06:42:11.000Z",
      "__v": 0,
      "views": 218
    },
    {
      "_id": "57cb5639e7e9d98c1a9db5fa",
      "nome": "NerdCast 394 - O Hobbit – A Desolação de Peter Jackson",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_394_hobbit_2.mp3",
      "dataPub": "2013-12-20T08:17:08.000Z",
      "__v": 0,
      "views": 26634
    },
    {
      "_id": "57cb5639e7e9d98c1a9db5c7",
      "nome": "NerdCast 445 - O Hobbit – Redenção! Ou não…",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_445_hobbit_3.mp3",
      "dataPub": "2014-12-19T08:26:41.000Z",
      "__v": 0,
      "views": 13124
    },
    {
      "_id": "57cb9d8749d5e0a010ec5f5d",
      "nome": "RapaduraCast 311 - O Hobbit: Uma Jornada Inesperada",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://media.blubrry.com/rapaduracast/www.seresrapadurianos.net/casts/rapaduracast_311-o-hobbit-uma-jornada-inesperada.mp3",
      "dataPub": "2012-12-19T21:30:18.000Z",
      "__v": 0,
      "views": 0
    },
    {
      "_id": "57cb9d8749d5e0a010ec6084",
      "nome": "RapaduraCast 34 - Tolkien, O Hobbit, A Sociedade do Anel e As Duas Torres",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://seresrapadurianos.net/casts/rapaduracast_34_sda.mp3",
      "dataPub": "2007-07-28T21:14:21.000Z",
      "__v": 0,
      "views": 0
    },
    {
      "_id": "57cb9d8749d5e0a010ec5f2f",
      "nome": "RapaduraCast 356 - O Hobbit - A Desolação de Smaug",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://media.blubrry.com/rapaduracast/www.seresrapadurianos.net/casts/rapaduracast_356-o-hobbit-2-smaug.mp3",
      "dataPub": "2013-12-19T01:01:03.000Z",
      "__v": 0,
      "views": 0
    },
    {
      "_id": "57cb9d8749d5e0a010ec5eff",
      "nome": "RapaduraCast 403 - O Hobbit: A Batalha dos Cinco Exércitos",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://media.blubrry.com/rapaduracast/www.seresrapadurianos.net/casts/rapaduracast_403-o-hobbit-a-batalha-dos-cinco-exercitos.mp3",
      "dataPub": "2014-12-18T12:01:03.000Z",
      "__v": 0,
      "views": 0
    },
    {
      "_id": "57cb9d8749d5e0a010ec6076",
      "nome": "RapaduraCast 48 - Tolkien | Parte 3: O Hobbit, Silmarillion e Contos Inacabados",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://seresrapadurianos.net/casts/rapaduracast_48_tolkien3.mp3",
      "dataPub": "2007-11-01T21:14:21.000Z",
      "__v": 0,
      "views": 0
    }
  ]
}
```

### POST \api\epi\getListMostViewed
Parâmetro:
```js
Sem Parâmetro
```
Exemplo de saída:
```js
{
  "status": true,
  "msg": [
    {
      "_id": "57b51b8ed4b98898215604b6",
      "nome": "NerdCast 408 - Sopranos: seu tempo acabou",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_408_sopranos.mp3",
      "__v": 0,
      "views": 99999
    },
    {
      "_id": "57b51b90d4b988982156057d",
      "nome": "NerdCast 212 - Seinfeld: Tudo sobre o nada",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_212_seinfeld.mp3",
      "__v": 0,
      "views": 99964
    },
    {
      "_id": "57b51b90d4b98898215605a1",
      "nome": "NerdCast 180 - Na crista da onda com Marcello Serpa",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_180_marcello_serpa.mp3",
      "__v": 0,
      "views": 99913
    },
    {
      "_id": "57b51b90d4b988982156064d",
      "nome": "NerdCast 15 - X-Men nos Quadrinhos",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_015_xmenHQ.mp3",
      "__v": 0,
      "views": 99708
    },
    {
      "_id": "57b51b90d4b98898215605f9",
      "nome": "NerdCast 96 - Nerdtour: NY, Orlando, Londres, Roma e Rússia",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_096_viagens_01.mp3",
      "__v": 0,
      "views": 99557
    },
    {
      "_id": "57b51b90d4b988982156055d",
      "nome": "NerdCast 242 - A voz imortal de Orlando Drummond",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_242_orlando_drummond.mp3",
      "__v": 0,
      "views": 99469
    },
    {
      "_id": "57b51b94d4b988982156066f",
      "nome": "99Vidas 213 – Resident Evil – Code: Veronica",
      "vitrine": "http://99vidas.com.br/wp-content/plugins/podpress/images/powered_by_podpress.jpg",
      "midia": "http://99vidas.com.br/podpress_trac/feed/5387/0/99vidas-213-Resident-Evil-Code-Veronica.mp3",
      "__v": 0,
      "views": 99414
    },
    {
      "_id": "57b51b8fd4b98898215604cd",
      "nome": "NerdCast 385 - Os segredos públicos de Tom Clancy",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_385_tom_clancy.mp3",
      "__v": 0,
      "views": 99243
    },
    {
      "_id": "57b51b8dd4b9889821560421",
      "nome": "NerdCast 529 - A questão Israel e Palestina",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_529_israel_palestina.mp3",
      "__v": 0,
      "views": 99205
    },
    {
      "_id": "57b51b90d4b98898215605ab",
      "nome": "NerdCast 170 - As vozes de Fernanda Fernandes",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_170_fernanda_fernandes.mp3",
      "__v": 0,
      "views": 99028
    }
  ]
}
```

### POST \api\epi\getListLowerViewed
Parâmetro:
```js
Sem Parâmetro
```
Exemplo de saída:
```js
{
  "status": true,
  "msg": [
    {
      "_id": "57b51b90d4b9889821560575",
      "nome": "NerdCast 220 - Star Wars – A carteira e o universo expandido de Lucas",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_220_starwars_ue.mp3",
      "__v": 0,
      "views": 26
    },
    {
      "_id": "57b51b90d4b98898215605f3",
      "nome": "NerdCast 102 - Rambo: Missão Cumprida",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_102_rambo.mp3",
      "__v": 0,
      "views": 51
    },
    {
      "_id": "57b51b8fd4b988982156052d",
      "nome": "NerdCast 290 - Sessão aventura da vida real",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_290_aventuras_da_vida.mp3",
      "__v": 0,
      "views": 53
    },
    {
      "_id": "57b51b90d4b9889821560591",
      "nome": "NerdCast 193 - Skxawng’si Avatar",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_193_avatar.mp3",
      "__v": 0,
      "views": 81
    },
    {
      "_id": "57b5281ab15c22fc2172f410",
      "nome": "#93. Lulu, Tinder, Tubby e afins",
      "vitrine": "http://i1.sndcdn.com/artworks-000064333542-cgq6kf-original.jpg",
      "midia": "http://feeds.soundcloud.com/stream/123031719-brains9-lulu.mp3",
      "__v": 0,
      "views": 133
    },
    {
      "_id": "57b525f0b15c22fc2172f2bf",
      "nome": "RapaduraCast 216 - Forever: Ben-Hur",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://seresrapadurianos.net/casts/rapaduracast_216-ben-hur.mp3",
      "__v": 0,
      "views": 308
    },
    {
      "_id": "57b5281ab15c22fc2172f440",
      "nome": "#49. O poder do discurso",
      "vitrine": "http://i1.sndcdn.com/artworks-000040077530-he5p8p-original.jpg",
      "midia": "http://feeds.soundcloud.com/stream/77993427-brains9-discurso.mp3",
      "__v": 0,
      "views": 337
    },
    {
      "_id": "57b525f0b15c22fc2172f375",
      "nome": "RapaduraCast 46 - Tropa de Elite",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://seresrapadurianos.net/casts/rapaduracast_46_tropa.mp3",
      "__v": 0,
      "views": 391
    },
    {
      "_id": "57b525f0b15c22fc2172f33a",
      "nome": "RapaduraCast 104 - Adaptação de Jogos 2",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://seresrapadurianos.net/casts/rapaduracast_104_jogos.mp3",
      "__v": 0,
      "views": 555
    },
    {
      "_id": "57b525f0b15c22fc2172f1d3",
      "nome": "RapaduraCast 444 - A nova geração dos filmes de terror e algumas dicas",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://media.blubrry.com/rapaduracast/www.seresrapadurianos.net/casts/rapaduracast_444-a-nova-geracao-do-terror.mp3",
      "__v": 0,
      "views": 689
    }
  ]
}
```

### POST /api/epi/getListRecent
Parâmetro:
```js
Sem Parâmetro
```
Exemplo de saída:
```js
{
  "status": true,
  "msg": [
    {
      "_id": "57b51b90d4b9889821560575",
      "nome": "NerdCast 220 - Star Wars – A carteira e o universo expandido de Lucas",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_220_starwars_ue.mp3",
      "__v": 0,
      "views": 26
    },
    {
      "_id": "57b51b90d4b98898215605f3",
      "nome": "NerdCast 102 - Rambo: Missão Cumprida",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_102_rambo.mp3",
      "__v": 0,
      "views": 51
    },
    {
      "_id": "57b51b8fd4b988982156052d",
      "nome": "NerdCast 290 - Sessão aventura da vida real",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_290_aventuras_da_vida.mp3",
      "__v": 0,
      "views": 53
    },
    {
      "_id": "57b51b90d4b9889821560591",
      "nome": "NerdCast 193 - Skxawng’si Avatar",
      "vitrine": "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      "midia": "https://nerdcast.jovemnerd.com.br/nerdcast_193_avatar.mp3",
      "__v": 0,
      "views": 81
    },
    {
      "_id": "57b5281ab15c22fc2172f410",
      "nome": "#93. Lulu, Tinder, Tubby e afins",
      "vitrine": "http://i1.sndcdn.com/artworks-000064333542-cgq6kf-original.jpg",
      "midia": "http://feeds.soundcloud.com/stream/123031719-brains9-lulu.mp3",
      "__v": 0,
      "views": 133
    },
    {
      "_id": "57b525f0b15c22fc2172f2bf",
      "nome": "RapaduraCast 216 - Forever: Ben-Hur",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://seresrapadurianos.net/casts/rapaduracast_216-ben-hur.mp3",
      "__v": 0,
      "views": 308
    },
    {
      "_id": "57b5281ab15c22fc2172f440",
      "nome": "#49. O poder do discurso",
      "vitrine": "http://i1.sndcdn.com/artworks-000040077530-he5p8p-original.jpg",
      "midia": "http://feeds.soundcloud.com/stream/77993427-brains9-discurso.mp3",
      "__v": 0,
      "views": 337
    },
    {
      "_id": "57b525f0b15c22fc2172f375",
      "nome": "RapaduraCast 46 - Tropa de Elite",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://seresrapadurianos.net/casts/rapaduracast_46_tropa.mp3",
      "__v": 0,
      "views": 391
    },
    {
      "_id": "57b525f0b15c22fc2172f33a",
      "nome": "RapaduraCast 104 - Adaptação de Jogos 2",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://seresrapadurianos.net/casts/rapaduracast_104_jogos.mp3",
      "__v": 0,
      "views": 555
    },
    {
      "_id": "57b525f0b15c22fc2172f1d3",
      "nome": "RapaduraCast 444 - A nova geração dos filmes de terror e algumas dicas",
      "vitrine": "http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg",
      "midia": "http://media.blubrry.com/rapaduracast/www.seresrapadurianos.net/casts/rapaduracast_444-a-nova-geracao-do-terror.mp3",
      "__v": 0,
      "views": 689
    }
  ]
}
```