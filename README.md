# FastAPI Starter Application

This is a basic FastAPI application to get you started with building APIs using the FastAPI framework. The app includes simple endpoints for demonstration purposes and provides interactive API documentation.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Interactive Documentation](#interactive-documentation)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.

## Features

- High performance, on par with Node.js and Go (thanks to Starlette and Pydantic).
- Automatic interactive API documentation (Swagger UI and ReDoc).
- Simple and intuitive request validation using Pydantic models.
- Supports asynchronous programming for highly scalable applications.

## Getting Started

### Prerequisites

- Python 3.7 or higher
- Virtual environment tool (recommended)
- Pip (Python package installer)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/shashwatsrii/CabComparison.git
    cd CabComparison
    ```

2. **Create and activate a virtual environment:**

    ```bash
    # On Windows
    python -m venv venv
    .\venv\Scripts\activate

    # On Unix or MacOS
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

### Running the App

1. **Start the FastAPI app with Uvicorn:**

    ```bash
    uvicorn main:app --reload
    ```

2. **Access the app:**

    Open your browser and navigate to `http://127.0.0.1:8000` to see the "Hello, FastAPI!" message.

## API Endpoints

- **GET /**: Returns a welcome message.

    ```json
    GET / HTTP/1.1
    Host: 127.0.0.1:8000
    ```

    Response:

    ```json
    {
        "message": "Hello, FastAPI!"
    }
    ```

- **GET /items/{item_id}**: Fetches item details based on the provided item ID.

    Example request:

    ```json
    GET /items/1?q=example HTTP/1.1
    Host: 127.0.0.1:8000
    ```

    Response:

    ```json
    {
        "item_id": 1,
        "q": "example"
    }
    ```

## Interactive Documentation

FastAPI provides automatically generated interactive API documentation.

- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

These can be used to test API endpoints directly from the browser.

## Project Structure

Here's an overview of the project structure:

