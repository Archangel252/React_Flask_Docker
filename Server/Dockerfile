# Use the official Python image from the Docker Hub
FROM python:3.9-slim

RUN mkdir /backend

# Set the working directory
WORKDIR /backend

COPY requirements.txt /backend/requirements.txt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt
    
COPY . .