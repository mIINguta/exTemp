// validação para saber a entrada
function transformarGraus(graus){
const celsiusLT = graus.toUpperCase().includes('C')
const fahrenheitLT = graus.toUpperCase().includes('F')

// condicional caso haja um erro no input

if(!celsiusLT && !fahrenheitLT){
    throw new Error('Grau inválido. Insira C (Celsius) ou F (Fahrenheit)')
}

//recebendo F
let vGraus = Number(graus.toUpperCase().replace("F", ""));
// Arrow function, recebendo o valor e enviando para o Fahrenheit
let formula = (fahrenheit) => (fahrenheit - 32 ) * 5/9
// Usarei para concatenar com o valor transformado
let lGraus = 'C'

// recebendo C
if(celsiusLT){
    vGraus = Number(graus.toUpperCase().replace("C", ""));
// Arrow function, recebendo o valor e enviando para o Fahrenheit
    formula = (celsius) => celsius * 9/5 + 32
// Usarei para concatenar com o valor transformado
    lGraus = 'F'
}


//retorno da arrow function
return formula(vGraus) + lGraus
}
    try{
        //tentativa caso não haja erro
        console.log(transformarGraus('120F'))
        console.log(transformarGraus('49C'))

    }catch(error){
        //mostrando o erro no console
        console.log(error)
    }
