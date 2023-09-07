function calcularIMC(){
    let peso= parseFloat(document.getElementById('peso').value);
    let altura=parseFloat(document.getElementById('estatura').value)

    let total = (peso/(altura*altura));

    let esconderImagen = document.getElementById("esconder")
    esconderImagen.style.display = "none";

    document.getElementById('resultado').textContent = total.toFixed(2);
    console.log(total);

    if(total <= 18.5){
        document.getElementById('clasificacion').textContent = "Peso bajo";
    }else if(total >1.8 && total <= 24.9 ){
        document.getElementById('clasificacion').textContent = "Peso adecuado";
    }else if (total >= 25){
        document.getElementById('clasificacion').textContent = "Sobrepeso";
    }
}