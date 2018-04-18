const input3=document.querySelector('#limpar');
const input4=document.querySelector('#limpar2');
const input=document.querySelector('#in');
const input2=document.querySelector('#bebidas');
const quant = document.querySelector('#quant');
const quant1 = document.querySelector('#quant1');

input3.addEventListener('click',function(e) {
    v_pao= ['queijo','presunto','maionese'];
    v_pao1=[1,2,3];
    
    let c = '';
    let soma1='';
    let list1='';
    let quan = quant.value;
    let inp = input.value;
    for(let i=0; i<v_pao.length; i++) {
        if(inp===v_pao[i]) {
            list1 += v_pao[i];
            c+=v_pao1[i];
            soma1 = quan * c;
            console.log(soma1);
            console.log(list1); 
        }
    }
});

input4.addEventListener('click',function(e) {
    v_pao= ['queijo','presunto','maionese'];
    v_bebi=['Agua','sprit','sucos'];
    v_pao1=[1,2,3];
    v_bebi1=[4,5,6];
    
    let b = '';
    let soma = '';
    let quan1 = quant1.value;
    let list = '';
    let inp2 = input2.value;
    for(let i=0; i<v_bebi.length; i++) {
        if(inp2===v_bebi[i]) {
        list += v_bebi[i];
            b+=v_bebi1[i];
            soma = quan1 * b;
            
            console.log(soma);
            
        }
    }
});

let lista=list+list1;
let somaa = soma +soma1;
console.log(somaa);


    





