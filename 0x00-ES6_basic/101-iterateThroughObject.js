export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // Iterate through the iterator and push each employee to the array
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the employees array with ' | ' separator and return the result
  return employees.join(' | ');
}
