


function editGPA(gpa) {

  let table = document.getElementById("GRID_GPA$scroll$0");

  let tbody = table.getElementsByTagName("tbody")[0];

  let rows = tbody.getElementsByTagName("tr");

  // skip first row
  for (let i = 1; i < rows.length; i++) {
    let grade = rows[i].getElementsByTagName("td")[1].getElementsByTagName("div")[0].getElementsByTagName("span")[0];
    let cgpa = rows[i].getElementsByTagName("td")[2].getElementsByTagName("div")[0].getElementsByTagName("span")[0];

    if (grade.innerHTML.includes(".") && grade.innerHTML != "0.00") {
      grade.innerHTML = gpa;
      cgpa.innerHTML = gpa;
    }
  }
}


function editGrade(egrade) {

  table = document.getElementById("CRSE_HIST$scroll$0");

  tbody = table.getElementsByTagName("tbody")[0];

  rows = tbody.getElementsByTagName("tr");

  // skip first row
  for (let i = 1; i < rows.length; i++) {
    let grade = rows[i].getElementsByTagName("td")[3].getElementsByTagName("div")[0].getElementsByTagName("span")[0];
    let state = rows[i].getElementsByTagName("td")[5].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0];

    if (state.alt == "Taken") {
      grade.innerHTML = egrade;
    }
  }
}

let table = document.getElementById("GRID_GPA$scroll$0");

if (table != null) {
  editGPA("4.3");
  editGrade("A+");
}

// const gradeToPoint = {
//   "A+": "25.80",
//   "A": "24.00",
//   "A-": "22.20",
//   "B+": "19.80",
//   "B": "18.00",
//   "B-": "16.20",
//   "C+": "13.80",
//   "C": "12.00",
//   "C-": "10.20",
//   "D+": "7.80",
//   "D": "6.00",
//   "D-": "4.20",
// };

// function editSemGrade(egrade) {

//   let table = document.getElementById("TERM_CLASSES$scroll$0");

//   tbody = table.getElementsByTagName("tbody")[0];

//   rows = tbody.getElementsByTagName("tr");

//   // skip first row
//   for (let i = 1; i < rows.length; i++) {
//     let grade = rows[i].getElementsByTagName("td")[4].getElementsByTagName("div")[0].getElementsByTagName("span")[0];
//     let points = rows[i].getElementsByTagName("td")[5].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0];

//     grade.innerHTML = egrade;
//     points.innerHTML = gradeToPoint[egrade];
    
//   }
// }

// table = document.getElementById("TERM_CLASSES$scroll$0");

// if (table != null) {
//   editSemGrade("A+");
// }