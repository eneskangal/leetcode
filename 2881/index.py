import pandas as pd

def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
    array= [];
    for value in employees.salary:
        array.append(value*2);
    data= {
        "name": [*employees.name],
        "salary": [*employees.salary],
        "bonus": [*array]
    }
    df= pd.DataFrame(data);
    return df;