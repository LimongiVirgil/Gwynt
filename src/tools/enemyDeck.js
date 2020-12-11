export const enemyNordling = {
  "faction": "Nordling",
  "chief": "205",
  "card": ["1", "2", "3", "5", "6", "7", "8", "10", "14", "17", "20", "26", "23", "27", "31", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "228", "230", "233", "234", "235", "236"]
};

export const enemyScoiatael = {
  "faction": "ScoiaTael",
  "chief": "121",
  "card": ["1", "2", "3", "5", "6", "7", "8", "10", "12", "15", "19", "21", "24", "28", "31", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "146", "147", "150", "151", "152", "158", "159", "160"]
};

export const enemySkelige = {
  "faction": "Skellige",
  "chief": "34",
  "card": ["1", "2", "3", "5", "6", "7", "8", "10", "12", "15", "19", "35", "36", "37", "39", "41", "44", "45", "46", "47", "49", "50", "51", "55", "56", "57", "58", "60", "61", "62", "63", "70", "71", "73"]
};

export const enemyNilfgaard = {
  "faction": "Nilfgaard",
  "chief": "163",
  "card": ["1", "2", "3", "5", "6", "7", "8", "10", "12", "15", "16", "19", "23", "25", "27", "31", "165", "166", "167", "168", "169", "173", "174", "175", "176", "177", "184", "185", "188", "189", "190", "192", "195", "194", "196"]
};

export const enemyMonstre = {
  "faction": "Monstres",
  "chief": "79",
  "card": ["1", "2", "3", "5", "6", "7", "8", "10", "12", "15", "16", "18", "19", "26", "27", "30", "80", "81", "82", "83", "84", "85", "86", "93", "94", "95", "96", "102", "104", "105", "106", "107", "108", "109", "110", "114", "115", "116", "98", "97"]
};

export function getRandomEnemyDeck() {
  var random = Math.floor(Math.random() * 5);

  if (random === 0) {
    return {"card": enemyNordling.card, "faction": enemyNordling.faction, "king": enemyNordling.chief}
  } else if (random === 1) {
    return {"card": enemyMonstre.card, "faction": enemyMonstre.faction, "king": enemyMonstre.chief}
  } else if (random === 2) {
    return {"card": enemyNilfgaard.card, "faction": enemyNilfgaard.faction, "king": enemyNilfgaard.chief}
  } else if (random === 3) {
    return {"card": enemySkelige.card, "faction": enemySkelige.faction, "king": enemySkelige.chief}
  } else {
    return {"card": enemyScoiatael.card, "faction": enemyScoiatael.faction, "king": enemyScoiatael.chief}
  }
}