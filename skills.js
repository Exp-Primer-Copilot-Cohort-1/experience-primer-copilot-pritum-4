function calculateNumbers() {
    var field1 = parseInt(document.getElementById("field1").value);
    var field2 = parseInt(document.getElementById("field2").value);
    var result = field1 * field2;
    if (!isNaN(result)) {
        document.getElementById("result").innerHTML = "The result is " + result;
    }
}