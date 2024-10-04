export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Use the spread operator to assign employeesList to allEmployees
    },
    // ES6 method syntax for defining a method
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
