FROM python:3.11.3-buster
ENV PYTHONDONTWRITEBYTECODE=1
ENV PORT=8000
WORKDIR /app
ADD . /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE ${PORT}
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]