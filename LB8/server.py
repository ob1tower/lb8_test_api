from fastapi import FastAPI

app = FastAPI()

@app.get("/compute")
def compute(n: int = 1000):
    """
    Вычисление суммы квадратов
    """
    result = sum([i ** 2 for i in range(n)])
    return {"result": result, "n": n}
