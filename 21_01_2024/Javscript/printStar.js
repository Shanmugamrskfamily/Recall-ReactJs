// const star = '*';
// const n=parseInt(6);
// const print = () => {
//     let output = '';
//     for (let i = 0; i < n; i++) {
//         for (let j = n; j > i; j--) {
//             output += star;
//         }
//         output += '\n';
//     }
//     console.log(output);
// }

// print();

// const num=5;
// const printStar=(num)=>{
//     let line='';
//     for(let i=0;i<num;i++){
        
//         for(let j=num;j>i;j--){
//             line+='*';
//         }
//         line+='\n';
//     }
//     return line;
// }

// console.log(printStar(num));



const num=5;

const printStarA_Z=(num)=>{
    let line='';
    for(let i=0;i<num;i++){
        for(let j=0;j<=i;j++){
            line+='*';
        }
        line+='\n';
    }
    return line;
}

console.log(printStarA_Z(num));