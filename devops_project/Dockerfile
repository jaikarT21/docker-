FROM ubuntu:latest

# Set non-interactive mode
ENV DEBIAN_FRONTEND=noninteractive


#update and install dependencies
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv bash

#set a working directory
WORKDIR /app

COPY requirements.txt /app/
COPY my_django_app /app/


# Create virtual environment and install dependencies
# /bin/sh does not support source, but bash does.
# Explicitly using /bin/bash -c ensures the activation command runs properly.

RUN python3 -m venv myenv && /bin/bash -c "source myenv/bin/activate && pip install --no-cache-dir -r requirements.txt"


EXPOSE 7000


CMD source myenv/bin/activate && \
python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:7000

