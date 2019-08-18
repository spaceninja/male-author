import vocabulary from '../data/vocabulary.json';
import sample from 'lodash.sample';

const bodyPart = sample(vocabulary.bodyPart);
const adjective = sample(vocabulary.adjective);
const simile = sample(vocabulary.simile);
const intransitive = sample(vocabulary.intransitive);
const verb = sample(vocabulary.verb);

const sentence = `She had ${bodyPart} like a ${adjective} ${simile} and I ${intransitive} to ${verb} her.`;

const encSentence = encodeURIComponent(`${sentence} #MaleAuthorDescription`);
const encUrl = encodeURIComponent('http://talklikewarrenellis.com');

const tweet = `https://twitter.com/intent/tweet?text=${encSentence}&url=${encUrl}`;
const share = `https://www.facebook.com/sharer/sharer.php?quote=${encSentence}&u=${encUrl}&display=popup`;

document.getElementById('quote').innerHTML = sentence;
document.getElementById('twitter').setAttribute('href', tweet);
document.getElementById('facebook').setAttribute('href', share);
