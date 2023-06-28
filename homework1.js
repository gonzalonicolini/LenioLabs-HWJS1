const characters = [
    {
        id: 1,
        name: 'IronMan',
        teams: ['avengers'],
    },
    {
        id: 2,
        name: 'SpiderMan',
        teams: ['avengers']
    },
    {
        id: 3,
        name: 'Thor',
        teams: ['guardians of the galaxy', 'avengers', 'the defenders']
    },
    {
        id: 4,
        name: 'Hulk',
        teams: ['avengers']
    },
    {
        id: 5,
        name: 'Doctor Strange',
        teams: ['avengers', 'the defenders', 'illuminati']
    },
    {
        id: 6,
        name: 'Beast',
        teams: ['avengers', 'x-men']
    },
    {
        id: 7,
        name: 'Professor X',
        teams: ['x-men', 'illuminati']
    },
    {
        id: 8,
        name: 'Moon Knight',
        teams: ['illuminati', 'avengers']
    },
    {
        id: 9,
        name: 'Wolverine',
        teams: ['x-men', 'avengers']
    },
    {
        id: 10,
        name: 'Nightcrawler',
        teams: ['x-men']
    }
];

let xMen = characters.filter(member => member.teams.includes ('x-men'));

console.log ('the x-mens caracters in this array are',xMen);

//Me trae solo a Nightcrawler, estimo que es por la propiedad member.teams == 'x-men'y no trae a los demas caracteres que comparten teams
//Tengo un problema que no me deja correr el script desde la terminal local de mi maquina (tengo node), tuve que correrlo desde una terminal web
