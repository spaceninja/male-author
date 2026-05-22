// Male Author Description Generator — describes a woman in the style of a
// male novelist.

// Word lists (formerly vocabulary.json).
const vocabulary = {
  bodyPart: [
    'boobs',
    'a bust',
    'a butt',
    'lips',
    'an ass',
    'breasts',
    'hair',
    'eyes',
    'a voice',
    'curves',
    'a rump',
    'legs',
    'a rear end',
    'mammaries',
    'jugs',
    'calves',
    'a badonkadonk',
    'gams',
    'knockers',
    'a complexion',
    'a pout',
    'hooters',
    'a booty',
    'cheeks',
    'thighs',
    'tresses',
  ],
  adjective: [
    'silken',
    'creamy',
    'shiny',
    'ripe',
    'juicy',
    'middle-aged',
    'rippling',
    'wrinkled',
    'luscious',
    'frigid',
    'voluptuous',
    'expensive',
    'plump',
    'bountiful',
    'tempestuous',
    'withered',
    'haughty',
    'shrill',
    'fat',
    'dewy',
    'soft',
    'wiry',
    'gleaming',
    'withholding',
    'bulbous',
    'brittle',
  ],
  simile: [
    'kitten',
    'mountain',
    'pillow',
    'ice cream cone',
    'tulip',
    'lake',
    'fortress',
    'lemon',
    'popsicle',
    'librarian',
    'python',
    'pony',
    'melon',
    'bedsheet',
    'muffin',
    'bunny rabbit',
    'fish',
    'princess',
    'ghost',
    'waterfall',
    'mango',
    'harpy',
    'ship',
    'nun',
    'berry',
    'car',
  ],
  intransitive: [
    'longed',
    'lusted',
    'wished',
    'wanted',
    'resolved',
    'dared',
    'detested',
    'trembled',
    'thirsted',
    'expected',
    'planned',
    'deigned',
    'proposed',
    'shuddered',
    'refused',
    'hated',
    'scorned',
    'dreaded',
    'did not care',
    'ached',
    'intended',
    'hungered',
    'craved',
    'hankered',
    'needed',
    'pined',
  ],
  verb: [
    'ravish',
    'climb',
    'invade',
    'grope',
    'marry',
    'raw dog it with',
    'caress',
    'proposition',
    'correct',
    'emotionally manipulate',
    'spar with',
    'compliment',
    'hire',
    'booty call',
    'mansplain to',
    'insult',
    'date',
    'teabag',
    'ignore',
    'fondle',
    'worship',
    'examine',
    'manhandle',
    'touch',
    'admire',
    'demand things from',
  ],
};

// Pick a random element from an array (replaces lodash.sample).
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Keep the last word from wrapping alone (replaces the `widont` package):
// swap the space before the final word for a non-breaking space.
const widont = (str) => str.replace(/\s+(\S+)\s*$/, '&nbsp;$1');

const bodyPart = sample(vocabulary.bodyPart);
const adjective = sample(vocabulary.adjective);
const simile = sample(vocabulary.simile);
const intransitive = sample(vocabulary.intransitive);
const verb = sample(vocabulary.verb);

const sentence = `“She had ${bodyPart} like a ${adjective} ${simile} and I ${intransitive} to ${verb} her.”`;

const encSentence = encodeURIComponent(`${sentence} #MaleAuthorDescription`);
const encUrl = encodeURIComponent('https://maleauthor.oscorp.net/');

const tweet = `https://twitter.com/intent/tweet?text=${encSentence}&url=${encUrl}`;
const share = `https://www.facebook.com/sharer/sharer.php?quote=${encSentence}&u=${encUrl}&display=popup`;

document.getElementById('quote').innerHTML = widont(sentence);
document.getElementById('twitter').setAttribute('href', tweet);
document.getElementById('facebook').setAttribute('href', share);
