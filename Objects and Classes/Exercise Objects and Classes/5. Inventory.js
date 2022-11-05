
// Create a function, which creates a register for heroes, with their names, level, and items (if they have such).

// The input comes as an array of strings. Each element holds data for a hero, in the following format:

// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."

// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:

// Hero: {heroName}

// level => {heroLevel}

// Items => {item1}, {item2}, {item3}



function inventory (heroData){

    let heroInfoData = [];
    for (let i = 0; i< heroData.length; i++){
        
        let [heroName, heroLevel, heroItems] = heroData[i].split(' / ');

        let heroInfo = {

            name: heroName,
            level: Number(heroLevel),
            items: heroItems
        }

        heroInfoData.push(heroInfo);
    }
    
    heroInfoData.sort((a,b) => a.level - b.level);
    heroInfoData.forEach((herodata)=>{
        console.log(`Hero: ${herodata.name}`);
        console.log(`level => ${herodata.level}`);
        console.log(`items => ${herodata.items}`);
    });


} inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);











