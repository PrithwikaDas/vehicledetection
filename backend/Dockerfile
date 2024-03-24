# Use the official Python image as base
FROM python:latest

# Set the working directory in the container
WORKDIR /app/backend

# Copy the backend directory contents to the container
COPY . .

# Install dependencies
RUN pip install -r requirements.txt



# Expose the port on which the Flask app will run
EXPOSE 5000

# Command to run the Flask app
CMD ["python", "app.py"]
