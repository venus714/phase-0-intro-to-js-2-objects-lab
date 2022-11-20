// Write your solution in this file!
let employee={}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return Object.assign({},employee,{[key]:value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] =value;

  return employee;
}
function deleteFromEmployeeByKey(employee,key){
  const New = Object.assign({},employee);
  delete New[key];
return New ;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
Object.assign({},employee);
delete employee[key];
return employee;
}