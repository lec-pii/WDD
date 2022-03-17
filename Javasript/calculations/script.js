const addition = () => {
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML = (num1 + num2)
  }
  const subtraction = () => {
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML = (num1 - num2)
  }
  const multiplication = () => {
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML = (num1 * num2)
  }
  const division = () => {
    // console.log(typeof(document.getElementById("num1").value));
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML = (num1 / num2)
  }
