const message = 'Hello world' // Try edit me


const messages = [];

messages.push("ciao");

if( "ciao" === "Ciao") {

}

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
const codiciOrdinati = cf.sort();
codiciOrdinati.forEach((codice,i,codiciOrdinati) =>(alert(`${codice
}`)))

const A=[];
const B=[];
const C=[];
const D=[];
const E=[];
const F=[];
const G=[];
const H=[];
const I=[];
const L=[];
const M=[];
const N=[];
const O=[];
const P=[];
const Q=[];
const R=[];
const S=[];
const T=[];
const V=[];
const Z=[];

for(let i in cf){
    const codice=cf[i];
    const lettera = codice.charAt(0)
    if(lettera === 'A'){
        A.push(codice)
    }


    if(lettera === 'B'){
        B.push(codice)
    }

    if(lettera === 'C'){
        C.push(codice)
    }
    
    if(lettera === 'D'){
        D.push(codice)
    }

    if(lettera === 'E'){
        A.push(codice)
    }

    if(lettera === 'F'){
        B.push(codice)
    }

    if(lettera === 'G'){
        C.push(codice)
    }
    
    if(lettera === 'H'){
        D.push(codice)
    }

    if(lettera === 'I'){
        A.push(codice)
    }

    if(lettera === 'L'){
        B.push(codice)
    }

    if(lettera === 'M'){
        C.push(codice)
    }
    
    if(lettera === 'N'){
        D.push(codice)
    }

    if(lettera === 'O'){
        A.push(codice)
    }

    if(lettera === 'P'){
        B.push(codice)
    }

    if(lettera === 'Q'){
        C.push(codice)
    }
    
    if(lettera === 'R'){
        D.push(codice)
    }

    if(lettera === 'S'){
        A.push(codice)
    }

    if(lettera === 'T'){
        B.push(codice)
    }

    if(lettera === 'V'){
        C.push(codice)
    }
    
    if(lettera === 'Z'){
        D.push(codice)
    }
}

function stampa(array){
    for(let i in array){
        console.log(`${array[i]}`)
    }
}

stampa(A)
stampa(B)
stampa(C)
stampa(D)
stampa(E)
stampa(F)
stampa(G)
stampa(H)
stampa(I)
stampa(L)
stampa(M)
stampa(N)
stampa(O)
stampa(P)
stampa(Q)
stampa(R)
stampa(S)
stampa(T)
stampa(V)
stampa(Z)






// Suddividere l'array padre in n (iniziale)


const gruppi = codiciOrdinati.reduce(n, cfn){
    const lettera = codice.charAt(0);
    if(!n[lettera]) acc[lettera] = [];
    n[lettera].push(cfn);
    retun n;
}
// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
