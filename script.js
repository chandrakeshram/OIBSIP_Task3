const calculateTemp=()=>{
    const temperature  = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celToFah = (cel) =>{
        let fahrenheit = parseFloat((cel * 9/5) + 32);
        return fahrenheit.toFixed(2);
    }
    const fahToCel = (fah) =>{
        let celsius = parseFloat((fah -32)*5/9);
        return celsius.toFixed(2);
    }
    let res;
    if(valueTemp=='cel'){
        res= fahToCel(temperature);
        document.getElementById('res_Contain').innerHTML= `= ${res}° Celsius`;
    }
    else {
        res= celToFah(temperature);
        document.getElementById('res_Contain').innerHTML= `= ${res}° Fahrenheit`;
        
    }

}