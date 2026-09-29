document.getElementById('conculadora-form').addEventListener('submit',function(event){
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operador = document.getElementById('operador').value;
    let resultado;


    switch(operador){
        case 'suma':
            resultado = num1+num2;
            break;
        case 'resta':
            resultado= num1-num2;
            break;
        case 'multiplica':
            resultado = num1*num2;
            break;
        case 'divide':
            if(num2 !== 0){
                resultado = num1/num2;
            }else{
                resultado="Error no se puede dividir entre 0";
            }
            
            break;
        default:
            resultado="Operacion no valida";
            break;


    }
    document.getElementById('resultado').innerHTML=`El resultado es ${resultado}`;
});