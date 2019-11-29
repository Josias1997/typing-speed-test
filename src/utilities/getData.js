const words = [
    "open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile",
        "river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch",
        "color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose",
        "leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece",
        "told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest",
        "reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person",
        "money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note",
        "wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick",
        "develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force",
        "blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand",
        "ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave",
        "drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair",
        "include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother",
        "egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board",
        "joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear",
        "finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third",
        "shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand",
        "soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment",
        "scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet",
        "stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip",
        "office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow",
        "oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control"
];

// FUNC: getRandomWord()
    // SELECT A RANDOM NUMBER BETWEEN 0 & THE AMOUNT OF WORDS LISTED IN THE WORDS ARRAY.
    // USES THAT RANDOM NUMBER TO SELECT AN ARRAY ITEM
const getRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)];
    }

    // FUNC: getRandomWords()
    // USED TO GENERATE AN ARRAY OF WORDS TO TYPE - USES THE getRandomWord() FUNCTION TO ASSIGN EACH ARRAY ITEM
export const getRandomWords = () => {
        const words = [];
        for(var i = 0; i < 200; i++)
        {
            words[i] = getRandomWord();
        }
        return words;
}

export const results = {
    columns: [
        {
            label: 'Score',
            field: 'score',
            sort: 'desc',
        },
        {
            label: 'Date',
            field: 'date',
        },
    ],
    rows: [
        {
            score: 45,
            date: new Date().toDateString(),
        },
        {
            score: 45,
            date: new Date().toDateString(),
        },
        {
            score: 45,
            date: new Date().toDateString(),
        },
        {
            score: 45,
            date: new Date().toDateString(),
        },
        {
            score: 45,
            date: new Date().toDateString(),
        }
    ]
};

const feebackMessages = {
    '0-10': 'Mmmh... Tu peux mieux faire ! (top 90%) 🤒',
    '10-20': 'Mmmh... Tu peux mieux faire ! (top 80%) 🤒',
    '20-30': "Mmmh... Tu peux mieux faire ! (t'op 70%)",
    '30-40': "Mmmh... Tu peux mieux faire ! (top 60%) 🤒",
    '40-50': "Pas mal ! Ne t'arrêtes pas en si bon chemin 🏆 (top 50%)",
    '50-60': "Pas mal ! Ne t'arrêtes pas en si bon chemin 🏆 (top 40%)",
    '60-70': "Wow, tu as une réelle maîtrise du clavier ! 😋 (top 30%)",
    '70-80': "Wow, tu as une réelle maîtrise du clavier ! 😋 (top 20%)",
    '80-90': "Impressionnant, tu figures parmi les joueurs les plus rapide 🥵🔥 (top 10%)",
    '90-100': "Impressionnant, tu figures parmi les joueurs les plus rapide 🥵🔥 (top 6%)",
    '100-110': "Impressionnant, tu figures parmi les joueurs les plus rapide 🥵🔥 (top 4%)",
    '110-120': "Impressionnant, tu figures parmi les joueurs les plus rapide 🥵🔥 (top 3%)",
    '120-130': "Impressionnant, tu figures parmi les joueurs les plus rapide 🥵🔥 (top 2%)",
    '130-':    "Impressionnant, tu figures parmi les joueurs les plus rapide 🥵🔥 (top 1%)"

};

export const getFeedBackMessage = wpm => {
    switch(true) {
        case wpm >= 0 && wpm < 10:
            return feebackMessages['0-10'];
        case wpm >= 10 && wpm < 20:
            return feebackMessages['10-20'];
        case wpm >= 20 && wpm < 30:
            return feebackMessages['20-30'];
        case wpm >= 30 && wpm < 40:
            return feebackMessages['30-40'];
        case wpm >= 40 && wpm < 50:
            return feebackMessages['40-50'];
        case wpm >= 50 && wpm < 60:
            return feebackMessages['50-60'];
        case wpm >= 60 && wpm < 70:
            return feebackMessages['60-70'];
        case wpm >= 70 && wpm < 80:
            return feebackMessages['70-80'];
        case wpm >= 80 && wpm < 90:
            return feebackMessages['80-90'];
        case wpm >= 90 && wpm < 100:
            return feebackMessages['90-100'];
        case wpm >= 100 && wpm < 110:
            return feebackMessages['100-110'];
        case wpm >= 110 && wpm < 120:
            return feebackMessages['110-120'];
        case wpm >= 120 && wpm < 130:
            return feebackMessages['120-130'];
        default:
            return feebackMessages['130-'];
    
    }
}