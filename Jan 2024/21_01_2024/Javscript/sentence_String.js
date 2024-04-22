const sentence='This is My sEtEncE!';

//String Reverse
const strReverse=(str)=>{
    return str.split('').reverse().join('');
}

//Sentence Reverse
const sentenceReverse=(str)=>{
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
}

//Caps Each Word Title
const capsEach=(str)=>{
    return str.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' ');
}

console.log('Input: ',sentence);
console.log(`String Reverse: ${strReverse(sentence)}`);
console.log(`Sentense Reverse: ${sentenceReverse(sentence)}`);
console.log('Title Caps: ',capsEach(sentence));