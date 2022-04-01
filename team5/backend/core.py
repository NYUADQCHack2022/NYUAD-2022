from flask import Flask 
import pymongo

client = pymongo.MongoClient("mongodb link here")
myDb = client.test
test={}
for x in myDb.patients.find():
    test[x['_id']]=x
for i in range(len(test)):
    print(list(test.values())[i]["cRate"])