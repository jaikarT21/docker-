FROM ubuntu

WORKDIR /app

COPY requirements.txt /app/
COPY my_django_app /app/


RUN apt-get update && apt-get install python3 python3-pip python3-venv


RUN source myenv/bin/activate && pip install --no--cache-dir -r requirements.txt


EXPOSE 7000


CMD source myenv/bin/activate && python3 manage.py runserver 0.0.0.0:7000

