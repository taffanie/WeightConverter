
let userinput = document.getElementById('userinput');

userinput.addEventListener('input', function(){
    if (userinput.value) {
        gramsoutput.innerHTML = userinput.value * 454;
        kilosoutput.innerHTML = (userinput.value / 2.205).toFixed(2);
        ouncesoutput.innerHTML = userinput.value * 16;
    } else {
        console.log('nothing'); 
    }
});

let gramsoutput = document.getElementById('gramsoutput');
let kilosoutput = document.getElementById('kilosoutput');
let ouncesoutput = document.getElementById('ouncesoutput');