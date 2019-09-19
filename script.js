const littleRed = {
  colour: 'red',
  nouns: ['cats', 'dogs', 'assassins', 'humans'],
  adjective: 'minty',
  exclamation: 'wow',
  silly: 'booger',
  verbs: ['cried', 'running', 'killing']
}

console.log(`
One day, Little ${littleRed.colour} Riding Hood was going through the forest carrying a 
basket of ${littleRed.nouns[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.silly}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verbs[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.nouns[1]} you have."

"The better to ${littleRed.verbs[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.nouns[2]}" you have."

The wolf said, "The better to ${littleRed.verbs[2]} you with."

And then she said, "What big ${littleRed.nouns[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)

littleRed.colour = 'yellow'
littleRed.nouns[2] = 'raincoats'
littleRed.exclamation = 'ballsacks!'
littleRed.verbs[1] = 'distill'

console.log(`One day, Little ${littleRed.colour} Riding Hood was going through the forest carrying a basket of ${littleRed.nouns[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.silly}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verbs[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.nouns[1]} you have."

"The better to ${littleRed.verbs[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.nouns[2]}" you have."

The wolf said, "The better to ${littleRed.verbs[2]} you with."

And then she said, "What big ${littleRed.nouns[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)

const snowWhite = {
  number: 42,
  Pluralnoun: ['Tetherballs', 'lawnmowers'],
  adjective: ['moist', 'soggy', 'warm'],
  noun: ['balls', 'hair', 'cement', 'glass', 'train'],
  color: 'white',
  body: 'nipple',
  adverb: 'quite'
}

console.log(`
One of the most popular fairy ${snowWhite.Pluralnoun[0]} of all time is Snow White and the ${snowWhite.number} ${snowWhite.Pluralnoun[1]}.

Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the ${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her ${snowWhite.body}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)

snowWhite.number = '69'
snowWhite.adjective[0] = 'drunk'
snowWhite.noun[1] = 'chair'
snowWhite.noun[3] = 'Baboon'
snowWhite.color = 'green'

console.log(`
One of the most popular fairy ${snowWhite.Pluralnoun[0]} of all time is Snow White and the ${snowWhite.number} ${snowWhite.Pluralnoun[1]}.

Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the ${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her ${snowWhite.body}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)
