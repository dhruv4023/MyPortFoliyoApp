from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["pymongotest"]
project = db["project"]
contact = db["contact"]
chat = db["chat"]
messages = db["messages"]
