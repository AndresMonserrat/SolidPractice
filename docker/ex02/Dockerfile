FROM ubuntu

RUN apt-get update && apt-get install -y python3 python3-flask

COPY app.py /opt/app/app.py

ENV FLASK_APP=/opt/app/app.py

ENTRYPOINT flask run --host=0.0.0.0 --port 5000
