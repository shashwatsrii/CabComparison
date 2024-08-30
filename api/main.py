from fastapi import FastAPI
from pydantic import BaseModel

# Create a FastAPI instance
app = FastAPI()

# Define a basic route
@app.get("/")
def read_root():
    return {"message": "Welcome to Cab Compare!"}


class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

@app.post("/items/")
def create_item(item: Item):
    return item