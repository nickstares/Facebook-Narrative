window.onload = function() {

    var direction = 'ASC',
        inputList = [],
        compareResult,
        arrSize;

    // demo array values
    inputList.push(24);
    inputList.push(28);
    inputList.push(19);
    inputList.push(25);
    inputList.push(17);
    inputList.push(42);
    inputList.push(97);
    inputList.push(31);
    inputList.push(11);
    inputList.push(1);
    inputList.push(37);
    inputList.push(46);
    inputList.push(72);
    inputList.push(33);
    inputList.push(96);

    // print the start values
    document.getElementById('start_values').innerHTML = 'Start List: ' + inputList;

    arrSize = inputList.length;
    // each value in the array
    for (var i = 0; i < arrSize; i++) {
        // check against all other values
        for (var k = 0; k < (arrSize - 1); k++) {
            compareResult = compare(inputList[k], inputList[k+1], direction);
            // swap
            if (compareResult !== true) {
                inputList[k+1] = inputList[k];
                inputList[k] = compareResult;
            }
        }
    }

    function compare(a, b, sortDir) {
        if (sortDir === 'ASC') {
            return a < b ? true : b;
        } 
        else if (sortDir === 'DESC') {
            return a > b ? true : b;
        }
        return false; // error
    }

    // print the sorted values
    document.getElementById('end_values').innerHTML = 'Sorted List: ' + inputList;
};