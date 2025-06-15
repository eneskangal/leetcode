import pandas as pd

def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    return pd.DataFrame(customers.drop_duplicates(subset= "email"))