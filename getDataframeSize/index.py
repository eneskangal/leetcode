import pandas as pd;
def getDataframeSize(players: pd.DataFrame) -> List[int]:
    shape= players.shape;
    return [shape[0], shape[1]];