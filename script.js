// Define Student Class
class Student {
     constructor(name, studentNumber, degreeProgram, yearLevel) {
       this.name = name;
       this.studentNumber = studentNumber;
       this.degreeProgram = degreeProgram;
       this.yearLevel = yearLevel;
       this.currentAction = ""; // Add a property to store current action
     }
   
     // Methods simulating student actions (updated to modify currentAction)
     enroll() {
       this.currentAction = `${this.name} is enrolled for the semester.`;
     }
   
     study() {
       this.currentAction = `${this.name} is diligently studying for their classes.`;
     }
   
     takeExam() {
       this.currentAction = `${this.name} is taking an exam. Good luck!`;
     }
   
     attendClass() {
          switch(true){
               case this.yearLevel == 1:
                    this.currentAction = `${this.name} is attending their 1st year classes.`;
                    break;
               case this.yearLevel == 2:
                    this.currentAction = `${this.name} is attending their 2nd year classes.`;
                    break;
               case this.yearLevel == 3:
                    this.currentAction = `${this.name} is attending their 3rd year classes.`;
                    break;
               case this.yearLevel == 4:
                    this.currentAction = `${this.name} is attending their 4th year classes.`;
                    break;
          }
       
     }
   }
   
   // Button click event listener to create a student
   const createStudentBtn = document.getElementById('create-student-btn');
   const studentTable = document.getElementById('student-table').getElementsByTagName('tbody')[0];
   
   createStudentBtn.addEventListener('click', () => {
     const name = document.getElementById('name').value;
     const studentNumber = document.getElementById('student-number').value;
     const degreeProgram = document.getElementById('degree-program').value;
     const yearLevel = document.getElementById('year-level').value;
   
     const isValidYearLevel = yearLevel >= 1 && yearLevel <= 4; // Check for valid year level
   
     let isValid = true; // Flag to indicate if all fields are valid

     // Check name
     if (name.trim() === "") {
       alert("Please enter a name for the student.");
       isValid = false;
     }
   
     // Check student number
     if (studentNumber.trim() === "") {
       alert("Please enter a student number.");
       isValid = false;
     }
   
     // Check degree program
     if (degreeProgram.trim() === "") {
       alert("Please enter a degree program for the student.");
       isValid = false;
     }
   
     if (isValid && isValidYearLevel) {
       const student = new Student(name, studentNumber, degreeProgram, yearLevel);
   
       // Create table row for student
     const tableRow = document.createElement('tr');
     tableRow.innerHTML = `<td>${student.name}</td>
                            <td>${student.studentNumber}</td>
                            <td>${student.degreeProgram}</td>
                            <td>${student.yearLevel}</td>`;
   
     // Create action buttons container
     const actionCell = document.createElement('td');
     const enrollBtn = document.createElement('button');
     enrollBtn.textContent = "Enroll";
     enrollBtn.addEventListener('click', () => {
       student.enroll();
       updateCurrentAction(student); // Update current action cell
     });
     actionCell.appendChild(enrollBtn);
   
     const studyBtn = document.createElement('button');
     studyBtn.textContent = "Study";
     studyBtn.addEventListener('click', () => {
       student.study();
       updateCurrentAction(student);
     });
     actionCell.appendChild(studyBtn);
   
     const takeExamBtn = document.createElement('button');
     takeExamBtn.textContent = "Take Exam";
     takeExamBtn.addEventListener('click', () => {
       student.takeExam();
       updateCurrentAction(student);
     });
     actionCell.appendChild(takeExamBtn);
   
     const attendClassBtn = document.createElement('button');
     attendClassBtn.textContent = "Attend Class";
     attendClassBtn.addEventListener('click', () => {
       student.attendClass();
       updateCurrentAction(student);
     });
     actionCell.appendChild(attendClassBtn);
   
     // Add current action cell
     const currentActionCell = document.createElement('td');
     currentActionCell.textContent = student.currentAction; // Initially empty
   
     // Append cells to table row and row to table body
     tableRow.appendChild(actionCell);
     tableRow.appendChild(currentActionCell);
     studentTable.appendChild(tableRow);
   
     // Function to update current action cell
     function updateCurrentAction(student) {
       currentActionCell.textContent = student.currentAction;
     }
     }
   });