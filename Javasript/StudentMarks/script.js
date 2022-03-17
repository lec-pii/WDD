
const calcMarks = () => {
//   event.preventDefault();
//   console.log("hi");
  
    var linux = parseInt(document.getElementById("linux").value);
  var web = parseInt(document.getElementById("web").value);
  var oracle = parseInt(document.getElementById("oracle").value);
  var java = parseInt(document.getElementById("java").value);
  var total_field = document.getElementById("total");
  var grade_field = document.getElementById("grade");

  if ( !isNaN(linux) && !isNaN(web) ) {
    var Total = linux + web + oracle + java;
    var AVG = Total / 4;
    total_field.innerHTML = Total + "/400";
    if (AVG >= 90) {
      grade = "A+";
    } else if (AVG >= 80) {
      grade = "A";
    } else if (AVG >= 70) {
      grade = "B";
    } else if (AVG >= 60) {
      grade = "C";
    } else if (AVG >= 50) {
      grade = "D";
    } else {
      grade = "E";
    }

    grade_field.innerHTML = grade
  }
};
