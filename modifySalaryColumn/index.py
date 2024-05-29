import pandas as pd;
def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    for index in range(len(employees.salary)):
        employees.salary[index]*= 2;
    return employees;