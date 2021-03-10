/*
 * Implement all your JavaScript in this file!
 */
var tempNum = null;
var tempOp = null;
var display = [];
var result = 0;
var opCounter = 0;
var end = false;

$('.number').click(function() {
    var value = $(this).val();
    display.push(value);
    $('#display').attr('value', display.join(''));
    opCounter = 0;

    if (end == true) {
        opCounter = 0;
        tempNum = null;
    }
    
});

$('.operation').click(function() {
    display = [];
    if ($(this).attr('id') != 'equalsButton' && opCounter !== 0) {
        tempOp = $(this).val();
        end = false;
    }
    else if ($(this).attr('id') == 'equalsButton') {
        if (opCounter !== 0) {
            end = false;
            return;
        }
        else {
            end = true;
        }   
    }
    
    if (opCounter == 0) {
        opCounter++;
        if (tempNum == null) {
            tempNum = parseInt($('#display').val());
            tempOp = $(this).val();
            end = false;
            return;
        }

        else if (tempNum !== null || $(this).attr('id') == 'equalsButton') {
            if (tempOp == '+') {
                result = tempNum + parseInt($('#display').val());
            }
            if (tempOp == '-') {
                result = tempNum - parseInt($('#display').val());
            }
            if (tempOp == '/') {
                result = tempNum / parseInt($('#display').val());
            }
            if (tempOp == '*') {
                result = tempNum * parseInt($('#display').val());
            }
            tempNum = result;
            $('#display').attr('value', result);
            tempOp = $(this).val();
        }
    }

    else {
        tempOp = $(this).val();
        return;
    }

})

$('#clearButton').click(function() {
    $('#display').attr('value', '');
    tempNum = null;
    display = [];
    result = 0;
    opCounter = 0;
    tempOp = null;
    end = false;
})



