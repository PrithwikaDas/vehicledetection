# Use the official Python image as base
FROM python:latest

# Set the working directory in the container
WORKDIR /app/backend


COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]