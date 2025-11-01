const height = 1.75;
const weight = 70

const imc = weight / (height * height);
console.log(`Seu IMC é de ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 39.9) {
    console.log("Obesidade");
} else {
    console.log("Do tamanho de um planeta");
}