const avengers = [
    {
        id: 1,
        name: 'IronMan'
    },
    {
        id: 2,
        name: 'Captain America'
    },
    {
        id: 3,
        name: 'Ant-man'
    },
    {
        id: 4,
        name: 'Wolverine'
    },
    {
        id: 5,
        name: 'Beast'
    },
    {
        id: 6,
        name: 'Carol Denvers'
    }
];

const xmen = [
    {
        id: 1,
        name: 'Professor X'
    },
    {
        id: 2,
        name: 'Wolverine'
    },
    {
        id: 3,
        name: 'Beast'
    },
    {
        id: 4,
        name: 'Havok'
    },
    {
        id: 5,
        name: 'Iceman'
    }
];

let bothTeams = avengers.filter(avenger => {
    return xmen.some(xmens=> xmens.name === avenger.name)
} );

console.log ('the characters who sharing teams are ', bothTeams);

//tampoco me lo dejo correr la terminal local'