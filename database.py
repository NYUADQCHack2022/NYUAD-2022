import pymongo



client = pymongo.MongoClient("mongoDbLink") #connecting to the database
myDb = client.test
listAll = []
with open("data.csv") as f: #opening our dataset and loading the data
    f.readline()
    all = f.readlines()
for l in all: #iterating the data and striping informations
    nl = l.strip().split(",")
    cDict = {}
    for x in nl[3].split("-"):
        l = x.split(":")
        cDict[l[0]]=int(l[1])
    listAll.append({'firstName':nl[0],'lastName':nl[1],'key':int(nl[2]),'cRate':cDict,'priority':int(nl[4]),'distance':int(nl[5])})
#myDb.patients.insert_many(listAll) #write info
#for x in myDb.patients.find(): #read info
#    print(x)