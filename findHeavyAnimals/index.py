import pandas as pd

def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
    upOneHundred= animals[animals["weight"]>100];
    sorting= upOneHundred.sort_values(by= "weight", ascending= False);
    selectCol= sorting["name"];
    df=  pd.DataFrame(data= selectCol);
    return df;