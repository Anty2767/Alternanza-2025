const cf = [
    "RSSMRA85M01H501Z",
    "BNCLRD90A22F205X",
    "VRDLNZ75B12D612Y",
    "FRNGPP80C11L219W",
    "MNLGLD70D15H501Z",
    "BRRMLT85E01F205X",
    "CNRMRA88F22G219Y",
    "PZZLNN90G18D612W",
    "TSTMRA78H15L219Z",
    "VLDLND85J21F205X",
    "SGRLNZ70K01G612Y",
    "RCCMRA65L11H219W",
    "BLZNDR80M22F219Z",
    "MRTGPP75N12D205X",
    "DNLFRA90P11G501Y",
    "CRLVND88Q21H219W",
    "PPLMRA70R15F612Z",
    "LZZMRA85S01D205X",
    "FRNGPP75T22G501Y",
    "MNLGPP90U18H219W",
    "BRTGPP80V11F219Z",
    "CNRLNZ85W21D205X",
    "VRDLND75X15G501Y",
    "SGRMRA90Y01H219W",
    "RSSMRN80Z12F612Z"
];

// Ordinare i codici fiscali in ordine alfabetico
console.log(cf);
    cf.sort();
console.log(cf);

// Suddividere l'array padre in n (iniziale)
let arrayDiArray=[] //const non si puo usare perchè nel codice adesso cambi riferimento
//  se vuoi usare const poi sostituire la linea di codice con arrayDiArray.push(arrayLettera)
for(let n="A".charCodeAt(0);n<="Z".charCodeAt(0);n++){
    let arrayLettera= cf.filter(a => a.charCodeAt(0)===n)
    arrayDiArray = [...arrayDiArray,arrayLettera];
}
console.log(arrayDiArray);