const star = '*';

function printStar(input) {
    let line = '';
    for (let i = 0; i < input; i++) {
        for (let j = 0; j <= i; j++) {
            line += star;
        }
        line += '<br>';
    }
    return line;
}

function handlePrint() {
    const input = parseInt(document.getElementById('input').value);
    const output = document.getElementById('output');
    output.innerHTML = `<b>${printStar(input)}</b>`;
}
