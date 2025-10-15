import os
from google import genai

class Gemini:
  def __init__(self):
    self.client = genai.Client(api_key=os.getenv('GEMINI_API_KEY'))
  
  def read_request(self, file):
    prompt = f"""
    画像から読み取れる内容を以下のJSON形式で返してください:
    {{
      "item": "品目名",
      "material-name": ["原材料名1", "原材料名2", "原材料名3", "..."],
      "allergy": ["アレルギー物質1", "アレルギー物質2", "アレルギー物質3", "..."]
    }}
    注意事項:
    - item, material-nameは確実に記載してください
    - material-name, allergyはリスト形式で記載してください
    - material-nameで原材料名の順番は記載順にしてください
    - 括弧は全角にしてください
    """

    my_file = self.client.files.upload(file=file)

    response = self.client.models.generate_content(
      model='gemini-2.5-flash',
      contents=[my_file, prompt]
    )
    return response.text
  
  def question(self):
    # 本番もスマホで撮影した画像を使用する予定であるため、FilesAPIを使用する
    my_file = self.client.files.upload(file='./img/tt.png')

    response = self.client.models.generate_content(
      model='gemini-2.5-flash',
      contents=[my_file, 'Caption this image.'],
    )
    return response.text
  
  def first(self):
    response = self.client.models.generate_content(
      model="gemini-2.5-flash",
      contents='Explain how AI works in a few words'
    )
    return response
