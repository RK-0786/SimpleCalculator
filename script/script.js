function addValue() {
    // get the operands value
    var a = document.getElementById('input_a').value;
    var b = document.getElementById('input_b').value;

    if (isNaN(a) || isNaN(b)) {
        console.log('Enter real numbers only');
        document.mycalculator.output.value = "Enter real numbers only";
    } else {
         // parse to integer. You can use: parseInt(input, 10);
        var float_a = parseFloat(a);
        var float_b = parseFloat(b);
        // perform operation
        var sum = float_a + float_b;

        // creating the text output
        var text = float_a + " + " + float_b + " = " + sum;

        // (if you want to check) print out in console
        console.log(`${a} + ${b} = ${sum}`);

        // change the text area
        document.mycalculator.output.value = text;
    }

}


function mulValue() {
    var a = document.getElementById('input_a').value;
    var b = document.getElementById('input_b').value;

    if(isNaN(a)||isNaN(b))
    {
        console.log('Enter real numbers only');
        document.mycalculator.output.value = "Enter real numbers only";
    }
    else {
         // parse to integer. You can use: parseInt(input, 10);
        var float_a = parseFloat(a);
        var float_b = parseFloat(b);
        // perform operation
        var mul = float_a * float_b;

        // creating the text output
        var text = float_a + " * " + float_b + " = " + mul;

        // (if you want to check) print out in console
        console.log(`${a} * ${b} = ${mul}`);
        document.mycalculator.output.value = text;
    }
}

function divValue() {
    var a = document.getElementById('input_a').value;
    var b = document.getElementById('input_b').value;

    if (isNaN(a) || isNaN(b)) {
        console.log('Enter real numbers only');
        document.mycalculator.output.value = "Enter real numbers only";
    } else if (b == 0) {
        console.log('Denominator Cannot be Zero !!');
        document.mycalculator.output.value = "Denominator Cannot be Zero !!";

    } else {
        
        // parse to integer. You can use: parseInt(input, 10);
        var float_a = parseFloat(a);
         var float_b = parseFloat(b);

        // perform operation
        var div = float_a / float_b;

        // creating the text output
        var text = float_a + " / " + float_b + " = " + div;

        // (if you want to check) print out in console
        console.log(`${a} / ${b} = ${div}`);

        document.mycalculator.output.value = text;
    }
}
