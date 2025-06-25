import pandas as pd
import numpy as np

def nth_highest_salary(employee: pd.DataFrame, n: int) -> pd.DataFrame:
    uniqueElements= employee["salary"].drop_duplicates()
    if uniqueElements.size>=n&n>0:
        sortEmployee= uniqueElements.sort_values(ascending= False)
        return pd.DataFrame({f"getNthHighestSalary({n})": [sortEmployee.iloc[abs(n-1)]]})
    else:
        return pd.DataFrame({f"getNthHighestSalary({n})": [np.nan]})