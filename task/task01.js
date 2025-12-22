const { schoolData } = require("./school-data");

/**
 * TASK 1: Filter High Achievers
 * Logic: Iterate through all grades and classes to find students with a CGPA >= 3.7.
 * Requirements: Return a flat array of student objects.
 * Difficulty: Easy-Intermediate
 *
 * @example
 * // Expected Output:
 * [
 *   { firstName: "Liam", lastName: "Brown", enrollmentNo: 10293847, cgpa: 3.82 },
 *   { firstName: "William", lastName: "Davis", enrollmentNo: 10293852, cgpa: 3.99 },
 *   ...
 * ]
 * @returns {Array<Object>} List of student objects who meet the criteria.
 */
function getHighAchievers() {
  const result = [];
  for (const grade of schoolData) {
    for (const cls of grade.classes) {
      for (const student of cls.students) {
        console.log(student);
        if (student.cgpa >= 3.7) {
          result.push(student);
        }
      }
    }
  }
  return result;

  // Intern implementation here
}
console.log(getHighAchievers());

/**
 * TASK 2: Calculate Grade Average
 * Logic: Calculate the average CGPA of all students within a specific grade.
 * Requirements: Use the 'grade' name (e.g., "Grade 10") to find the data.
 * Return the average as a float rounded to 2 decimal places.
 * Difficulty: Intermediate
 *
 * @param {string} gradeName - The name of the grade (e.g., "Grade 5")
 * @example
 * // getGradeAverage("Grade 10")
 * // Expected Output: 3.45
 * @returns {number} The average CGPA of that grade.
 */
function getGradeAverage(gradeName) {
  // Intern implementation here
}

/**
 * TASK 3: Teacher-Class Directory
 * Logic: Create a list of all teachers in the school.
 * Requirements: Each object in the returned array should contain the teacher's
 * first name, last name, and the name of the class they teach (className).
 * Difficulty: Intermediate
 *
 * @example
 * // Expected Output:
 * [
 *   { firstName: "Alice", lastName: "Johnson", className: "1-A" },
 *   { firstName: "Robert", lastName: "Harris", className: "1-B" },
 *   ...
 * ]
 * @returns {Array<Object>} List of teachers with their assigned class names.
 */
function getTeacherDirectory() {
  // Intern implementation here
}

/**
 * TASK 4: Search Student by Enrollment
 * Logic: Perform a global search across all grades for a specific 8-digit enrollment number.
 * Requirements: Return the student object if found, otherwise return null.
 * Difficulty: Intermediate
 *
 * @param {number} enrollmentNo - The 8-digit number to search for.
 * @example
 * // findStudentByEnrollment(99293848)
 * // Expected Output: { firstName: "Hermione", lastName: "Granger", enrollmentNo: 99293848, cgpa: 4.0 }
 * @returns {Object|null} The student object or null.
 */
function findStudentByEnrollment(enrollmentNo) {
  // Intern implementation here
}

/**
 * TASK 5: Class Size Report
 * Logic: Generate a report showing how many students are in each class.
 * Requirements: Return an object where the keys are classNames and values are student counts.
 * Difficulty: Intermediate
 *
 * @example
 * // Expected Output:
 * {
 *   "1-A": 22,
 *   "1-B": 24,
 *   "10-C": 20
 * }
 * @returns {Object} An object mapping class names to student totals.
 */
function getClassSizeReport() {
  // Intern implementation here
}

/**
 * TASK 6: Find Potential Valedictorians
 * Logic: Identify the student with the highest CGPA in each Grade.
 * Requirements: Return an array of objects containing the Grade name and the
 * top student's full name and CGPA.
 * Difficulty: Intermediate-Advanced
 *
 * @example
 * // Expected Output:
 * [
 *   { grade: "Grade 1", student: "William Davis", cgpa: 3.99 },
 *   { grade: "Grade 2", student: "Ryder Russell", cgpa: 3.99 },
 *   ...
 * ]
 * @returns {Array<Object>} Array of top performers per grade.
 */
function getGradeToppers() {
  // Intern implementation here
}

/**
 * TASK 7: School-wide Statistics
 * Logic: Compute total counts for the entire institution.
 * Requirements: Return an object containing:
 * - totalStudents (number)
 * - totalTeachers (number)
 * - averageSchoolCGPA (number)
 * Difficulty: Intermediate
 *
 * @example
 * // Expected Output:
 * {
 *   totalStudents: 752,
 *   totalTeachers: 92,
 *   averageSchoolCGPA: 3.38
 * }
 * @returns {Object} Object containing global school stats.
 */
function getSchoolStats() {
  // Intern implementation here
}

/**
 * TASK 8: Identify Veteran Teachers
 * Logic: Find all teachers who are above a certain age.
 * Requirements: Return a list of teacher names and their ages,
 * sorted from oldest to youngest.
 * Difficulty: Intermediate
 *
 * @param {number} minAge - The minimum age threshold.
 * @example
 * // getTeachersByAge(60)
 * // Expected Output:
 * [
 *   { firstName: "Logan", lastName: "Howlett", age: 150 },
 *   { firstName: "Albus", lastName: "Dumbledore", age: 115 },
 *   { firstName: "Rick", lastName: "Sanchez", age: 70 }
 * ]
 * @returns {Array<Object>} Sorted list of veteran teachers.
 */
function getTeachersByAge(minAge) {
  // Intern implementation here
}

/**
 * TASK 9: Search Students by Teacher Surname
 * Logic: Retrieve all students taught by any teacher with a specific last name.
 * Requirements: If multiple teachers have the same last name, include students
 * from all their classes. Return an array of student enrollment numbers.
 * Difficulty: Advanced
 *
 * @param {string} teacherLastName - The surname of the teacher.
 * @example
 * // getStudentsByTeacherLastName("Snape")
 * // Expected Output: [81293871, 98293847, 98293848, ...]
 * @returns {Array<number>} List of enrollment numbers.
 */
function getStudentsByTeacherLastName(teacherLastName) {
  // Intern implementation here
}

/**
 * TASK 10: Most Competitive Class
 * Logic: Find the class (e.g., "10-B") that has the smallest "Gap" between
 * its highest and lowest CGPA.
 * Requirements: Calculate (Max CGPA - Min CGPA) for every class and return
 * the name of the class where this value is the lowest.
 * Difficulty: Advanced
 *
 * @example
 * // Expected Output: "10-B"
 * @returns {string} The className of the most competitive class.
 */
function getMostCompetitiveClass() {
  // Intern implementation here
}
