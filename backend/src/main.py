from fastapi import FastAPI, File, UploadFile
from src.ai_prompt import Gemini

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}

@app.post('/readai')
async def read_ai(file):
    gemini = Gemini()
    response = await gemini.read_request(file)
    # SQL内にバイナリ化したファイルを保存
    # （サーバーに保存するのと、DBサーバーに保存するのとでどちらがコストがかからないかで決める）
    return {"response": response}

@app.post('/test')
def test():
    gemini = Gemini()
    response = gemini.question()
    return {"response": response}

@app.post('/first')
def first():
    gemini = Gemini()
    response = gemini.first()
    return {"response": response.text}