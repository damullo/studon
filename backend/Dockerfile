FROM python:3.11-slim

WORKDIR /code

COPY ./app /code/app

RUN pip install --upgrade pip && \
    pip install "Django==3.2.25" \
                "djongo==1.3.6" \
                "djangorestframework==3.14.0" \
                "djangorestframework-simplejwt==5.3.1" \
                pymongo==3.12.3

CMD ["python", "app/manage.py", "runserver", "0.0.0.0:8000"]
