import pandas as pd;

def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
    data= [];
    for value in products["quantity"]:
        if(pd.isna(value)):
            data.append(0);
        else:
            data.append(value);    
    products["quantity"]= data;
    return products;