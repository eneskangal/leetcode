select EmployeeUNI.unique_id, Employees.name from Employees
FULL OUTER JOIN EmployeeUNI ON Employees.id=EmployeeUNI.id
where Employees.name IS NOT NULL;