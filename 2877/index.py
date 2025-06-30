import pandas as pd

def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    data= {
        "student_id": [],
        "age": []
    };
    for value in student_data:
        data["student_id"].append(value[0]);
        data["age"].append(value[1]);
    df= pd.DataFrame(data);
    return df;
