let btn = document.getElementById('btn')
let output = document.getElementById('output')


function activity() {
    let action = [
        'play mini-golf at pirate cove',
        'mini-golf at fantasia gardens & fairways',
        'hollywood drive-in golf at universal',
        'go to universal studios', 
        'go to disney springs',
        'go bowling', 
        'meet up with friends for brunch', 
        'go hiking', 
        'visit an art gallery', 
        'go shopping at the orlando international premium outlets',
        'go shopping at the orlando vineland premium outlets',
        'pedal away on the orange bike trail', 
        'take the winter park boat tour', 
        'watch a movie playing in the theater', 
        'visit a paint your own pottery', 
        'relax on the beach', 
        'get a couples massage at the ritz', 
        'go to volcano bay', 
        'do a wine tasting at lakeridge winery',
        'chillax at the wineroom and stroll park avenue',
        'order a fun coffee beverage at the foxtail coffee co.',
        "check out a farmer's market",
        'top golf',
        "disney spring's amc theater & restaurant",
        "rock climbing at blue swan boulders",
        'race head-to-head at andretti indoor karting & games',
        'test your skills at arcade monsters',
        'observe the sky at the orlando science center',
        'check out the orlando museum of art'


    ]
    const randomInNumb = action[Math.floor(Math.random() * (action.length))];
    return randomInNumb;
}

function food() {
    let places = [
        'piazza italia',
        'the melting pot',
        'maki hibachi',
        'boxi park',
        "chef art smith's homecomin' in disney springs",
        "armando's",
        'sea thai',
        'columbia restaurant',
        'ceviche tapas bar & restaurant',
        'black bean deli',
        'shake shack',
        "pig floyd's",
        '4-rivers',
        'loving hut',
        'ethos',
        'dharma southern kitchen',
        "azteca d'oro",
        'gringos locos',
        "rocco's tacos",
        "gator's dockside",
        "mia's italian kitchen",
        "santiago's bodega",
        'seito sushi',
        'domu',
        'tako cheena',
        'hawkers',
        'the coop',
        'jam hot chicken'

    ]
    const randomInNumber = places[Math.floor(Math.random() * (places.length))];
    return randomInNumber
}


function scavengerHunt() {
    let items = [
        'flowers',
        'water',
        'a wall mural',
        'neat architecture',
        'animals',
        'something earthy',
        'something delicous',
        'a landmark',
        "produce",
        "fancy drink",
        'something you love',
        'view from a window',
        'a mirror selfie',
        'shoes',
        'eyes',
        'a pattern',
        'view from a door',
        'something in season',
        'from a high angle',
        'something red',
        'something blue',
        'something yellow',
        'something green',
        'something purple',
        'something black',
        'of a circle',
        'of a triangle',
        'of a square',
        'of a rectangle',
        'a bumpy texture',
        'a smooth texture',
        'a rough texture',
        'a soft texture',
        'something with wings',
        'something with 4 legs',


    ]
    const randomInNum = items[Math.floor(Math.random() * (items.length))];
    return randomInNum;
    }

btn.addEventListener('click', function() {
    const randomQuote = `First, ${activity()}, satisfy your hunger at ${food()}. While you guys are out, capture a photo or instagram video of ${scavengerHunt()}.`;
    output.innerHTML = randomQuote;

})



