import { useState } from "react";

const Quests=()=>[
    {
        id: 0,
        nome: 'Qual é o nome completo do integrante RM?',
        alt1: 'Kim Seokjin',
        alt2: 'Kim Namjoon',
        alt3: 'Min Yoongi',
        alt4: 'Jung Hoseok',
        correct: 'Kim Namjoon',
    },
    {
        id: 1,
        nome: 'Em que ano o BTS debutou?',
        alt1: '2012',
        alt2: '2013',
        alt3: '2014',
        alt4: '2015',
        correct: '2013',
    },
    {
        id: 2,
        nome: 'Qual é o nome do fandom oficial do BTS?',
        alt1: 'Blink',
        alt2: 'EXO-L',
        alt3: 'ARMY',
        alt4: 'MOA',
        correct: 'ARMY',
    },
    {
        id: 3,
        nome: 'Qual foi a primeira música de trabalho do BTS?',
        alt1: 'Boy With Luv',
        alt2: 'No More Dream',
        alt3: 'Mic Drop',
        alt4: 'Fire',
        correct: 'No More Dream',
    },
    {
        id: 4,
        nome: 'Quem é conhecido como o "Golden Maknae" do grupo?',
        alt1: 'Jin',
        alt2: 'V',
        alt3: 'Jungkook',
        alt4: 'Jimin',
        correct: 'Jungkook',
    },
    {
        id: 5,
        nome: 'Qual membro do BTS nasceu em Busan?',
        alt1: 'Suga',
        alt2: 'Jungkook',
        alt3: 'Jimin',
        alt4: 'Ambos b e c',
        correct: 'Ambos b e c',
    },
    {
        id: 6,
        nome: 'Qual é o papel principal do Jin no grupo?',
        alt1: 'Dançarino principal',
        alt2: 'Vocalista',
        alt3: 'Rapper',
        alt4: 'Líder',
        correct: 'Vocalista',
    },
    {
        id: 7,
        nome: 'Como se chama a empresa que gerencia o BTS?',
        alt1: 'YG Entertainment',
        alt2: 'Big Hit Entertainment (atual HYBE)',
        alt3: 'SM Entertainment',
        alt4: 'JYP Entertainment',
        correct: 'Big Hit Entertainment (atual HYBE)',
    },
    {
        id: 8,
        nome: 'Qual foi o primeiro álbum completo do BTS?',
        alt1: 'Dark & Wild',
        alt2: 'Wings',
        alt3: 'Skool Luv Affair',
        alt4: 'Love Yourself: Tear',
        correct: 'Dark & Wild',
    },
    {
        id: 9,
        nome: 'Qual membro é conhecido por seu amor por máscaras e arte?',
        alt1: 'RM',
        alt2: 'J-Hope',
        alt3: 'V',
        alt4: 'Suga',
        correct: 'V',
    },
    {
        id: 10,
        nome: 'Em que ano o BTS ganhou o primeiro prêmio no MAMA (Mnet Asian Music Awards)?',
        alt1: '2013',
        alt2: '2014',
        alt3: '2015',
        alt4: '2016',
        correct: '2014',
    },
    {
        id: 11,
        nome: 'Qual é o nome do mixtape de Suga?',
        alt1: 'Agust D',
        alt2: 'Hope World',
        alt3: 'Mono',
        alt4: 'D-2',
        correct: 'Agust D',
    },
    {
        id: 12,
        nome: 'Quem é conhecido por suas habilidades em dança?',
        alt1: 'Jin',
        alt2: 'RM',
        alt3: 'J-Hope',
        alt4: 'Suga',
        correct: 'J-Hope',
    },
    {
        id: 13,
        nome: 'Qual membro do BTS costumava ser um atleta?',
        alt1: 'Jungkook ',
        alt2: 'Jimin',
        alt3: 'RM',
        alt4: 'Suga',
        correct: 'Jungkook ',
    },
    {
        id: 14,
        nome: 'Qual música do BTS bateu recordes no YouTube em 24 horas?',
        alt1: 'Dynamite',
        alt2: 'Butter',
        alt3: 'Boy With Luv',
        alt4: 'Todas as alternativas',
        correct: 'Todas as alternativas',
    },
    {
        id: 15,
        nome: 'Quem é o integrante mais velho do BTS?',
        alt1: 'Suga',
        alt2: 'Jin',
        alt3: 'RM',
        alt4: 'J-Hope',
        correct: 'Jin',
    },
    {
        id: 16,
        nome: 'Quantos integrantes fazem parte do BTS?',
        alt1: '5',
        alt2: '6',
        alt3: '7',
        alt4: '8',
        correct: '7',
    },
    {
        id: 17,
        nome: 'Qual álbum do BTS faz parte da série "Love Yourself"?',
        alt1: 'Wings',
        alt2: 'Map of the Soul: Persona',
        alt3: 'Love Yourself: Tear',
        alt4: 'BE',
        correct: 'Love Yourself: Tear',
    },
    {
        id: 18,
        nome: 'Qual membro do BTS adora cozinhar?',
        alt1: 'Jin',
        alt2: 'RM',
        alt3: 'J-Hope',
        alt4: 'V',
        correct: 'Jin',
    },
    {
        id: 19,
        nome: 'Em que ano o BTS se apresentou pela primeira vez no Billboard Music Awards?',
        alt1: '2015',
        alt2: '2016',
        alt3: '2017',
        alt4: '2018',
        correct: '2017',
    },
    {
        id: 20,
        nome: 'Qual integrante é conhecido como o "Visual" do grupo?',
        alt1: 'Jin',
        alt2: 'V',
        alt3: 'Jungkook',
        alt4: 'Jimin',
        correct: 'V',
    },
    {
        id: 21,
        nome: 'Quem escreveu a música "Spring Day"?',
        alt1: 'RM',
        alt2: 'Suga',
        alt3: 'J-Hope',
        alt4: 'Todos os membros',
        correct: 'Todos os membros',
    },
    {
        id: 22,
        nome: 'Qual é a cor favorita de RM?',
        alt1: 'Azul',
        alt2: 'Preto',
        alt3: 'Verde',
        alt4: 'Rosa',
        correct: 'Verde',
    },
    {
        id: 23,
        nome: 'Qual música faz parte do álbum "Map of the Soul: 7"?',
        alt1: 'ON',
        alt2: 'DNA',
        alt3: 'Idol',
        alt4: 'Fake Love',
        correct: 'ON',
    },
    {
        id: 24,
        nome: 'Quem é o principal produtor musical do BTS?',
        alt1: 'RM',
        alt2: 'Suga',
        alt3: 'J-Hope',
        alt4: 'Todos contribuem',
        correct: 'Todos contribuem',
    },
    {
        id: 25,
        nome: 'Em que cidade nasceu o membro J-Hope?',
        alt1: 'Daegu',
        alt2: 'Gwangju',
        alt3: 'Busan',
        alt4: 'Seul',
        correct: 'Gwangju',
    },
    {
        id: 26,
        nome: 'Qual música do BTS faz parte da trilha sonora do filme "Sing 2"?',
        alt1: 'Dynamite',
        alt2: 'Butter',
        alt3: 'Permission to Dance',
        alt4: 'Yet to Come',
        correct: 'Dynamite',
    },
    {
        id: 27,
        nome: 'Quem escreveu a música "Magic Shop"?',
        alt1: 'Jungkook',
        alt2: 'Jimin',
        alt3: 'V',
        alt4: 'Suga',
        correct: 'Jungkook',
    },
    {
        id: 28,
        nome: 'Qual membro é fluente em inglês?',
        alt1: 'V',
        alt2: 'RM',
        alt3: 'Jin',
        alt4: 'Jimin',
        correct: 'RM',
    },
    {
        id: 29,
        nome: 'Quantos Grammys o BTS já ganhou?',
        alt1: '0',
        alt2: '1',
        alt3: '2',
        alt4: '3',
        correct: '0',
    },
    {
        id: 30,
        nome: 'Qual é o signo de Jimin?',
        alt1: 'Libra',
        alt2: 'Sagitário',
        alt3: 'Peixes',
        alt4: 'Escorpião',
        correct: 'Sagitário',
    },
    {
        id: 31,
        nome: 'Em que ano o BTS lançou o álbum "BE"?',
        alt1: '2019',
        alt2: '2020',
        alt3: '2021',
        alt4: '2022',
        correct: '2020',
    },
    {
        id: 32,
        nome: 'Qual música tem o clipe que mostra o BTS em uma pista de boliche?',
        alt1: 'DNA',
        alt2: 'Dynamite',
        alt3: 'Boy With Luv',
        alt4: 'Butter',
        correct: 'Dynamite',
    },
    {
        id: 33,
        nome: 'Quem é conhecido pelo apelido "Worldwide Handsome"?',
        alt1: 'RM',
        alt2: 'J-Hope',
        alt3: 'Jin',
        alt4: 'V',
        correct: 'Jin',
    },
    {
        id: 34,
        nome: 'Qual álbum inclui a música "Blood Sweat & Tears"?',
        alt1: 'Wings',
        alt2: 'Love Yourself: Answer',
        alt3: 'Dark & Wild',
        alt4: 'Map of the Soul: 7',
        correct: 'Wings',
    },
    {
        id: 35,
        nome: 'Quem é o membro mais alto do BTS?',
        alt1: 'RM',
        alt2: 'Jin',
        alt3: 'V',
        alt4: 'Jungkook',
        correct: 'RM',
    },
    {
        id: 36,
        nome: 'Qual foi o primeiro reality show do BTS?',
        alt1: 'Bon Voyage',
        alt2: 'Run BTS!',
        alt3: 'Rookie King',
        alt4: 'In the SOOP',
        correct: 'Rookie King',
    },
    {
        id: 37,
        nome: 'Qual membro é conhecido por seu amor por moda?',
        alt1: 'Jin',
        alt2: 'V',
        alt3: 'J-Hope',
        alt4: 'RM',
        correct: 'V',
    },
    {
        id: 38,
        nome: 'Em que ano o BTS fez história ao discursar na ONU?',
        alt1: '2017',
        alt2: '2018',
        alt3: '2019',
        alt4: '2020',
        correct: '2018',
    },
    {
        id: 39,
        nome: 'Qual integrante do BTS tem um cachorro chamado Yeontan?',
        alt1: 'RM',
        alt2: 'J-Hope',
        alt3: 'V',
        alt4: 'Jungkook',
        correct: 'V',
    },
    {
        id: 40,
        nome: 'Qual foi o primeiro MV do BTS a atingir 1 bilhão de visualizações no YouTube?',
        alt1: 'DNA',
        alt2: 'Boy With Luv',
        alt3: 'Dynamite',
        alt4: 'MIC Drop',
        correct: 'DNA',
    },
    {
        id: 41,
        nome: 'Quem costuma dizer "Eu sou seu esperança, você é minha esperança"?',
        alt1: 'RM',
        alt2: 'Suga',
        alt3: 'J-Hope',
        alt4: 'V',
        correct: 'J-Hope',
    },
    {
        id: 42,
        nome: 'Qual música do BTS foi lançada inteiramente em inglês pela primeira vez?',
        alt1: 'Boy With Luv',
        alt2: 'Dynamite',
        alt3: 'Butter',
        alt4: 'Permission to Dance',
        correct: 'Dynamite',
    },
    {
        id: 43,
        nome: 'Em que ano o BTS realizou seu primeiro show no Estádio de Wembley, em Londres?',
        alt1: '2018',
        alt2: '2019',
        alt3: '2020',
        alt4: '2021',
        correct: '2019',
    },
    {
        id: 44,
        nome: 'Qual membro do BTS já atuou no drama "Hwarang"?',
        alt1: 'Jin',
        alt2: 'Suga',
        alt3: 'V',
        alt4: 'Jimin',
        correct: 'V',
    },
    {
        id: 45,
        nome: 'Qual música faz parte do álbum "Skool Luv Affair"?',
        alt1: 'No More Dream',
        alt2: 'Just One Day',
        alt3: 'Fire',
        alt4: 'Run',
        correct: 'Just One Day',
    },
    {
        id: 46,
        nome: 'Qual membro tem o nome verdadeiro Jung Hoseok?',
        alt1: 'Jimin',
        alt2: 'J-Hope',
        alt3: 'Suga',
        alt4: 'V',
        correct: 'J-Hope',
    },
    {
        id: 47,
        nome: 'Qual foi o primeiro MV do BTS a ser gravado fora da Coreia do Sul?',
        alt1: 'Boy In Luv',
        alt2: 'Blood Sweat & Tears',
        alt3: 'ON',
        alt4: 'Dope',
        correct: 'Blood Sweat & Tears',
    },
    {
        id: 48,
        nome: 'Qual é o nome do documentário do BTS lançado na Netflix?',
        alt1: 'Burn the Stage',
        alt2: 'Break the Silence',
        alt3: 'Bring the Soul',
        alt4: 'Love Yourself',
        correct: 'Bring the Soul',
    },
    {
        id: 49,
        nome: 'Qual integrante é conhecido por seu talento em pintura?',
        alt1: 'Jin',
        alt2: 'Suga',
        alt3: 'V',
        alt4: 'RM',
        correct: 'V',
    },
]

export {Quests}