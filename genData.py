import random
def genOrgans(num=20,fileName="organs.csv"):
    '''Generate a csv file containing Organ,Organ Key, it"s randomized'''
    all = ['Organ,Key']
    keys = []
    for i in range(num):
        key = random.randint(100,999)
        while key in keys:
            key = random.randint(100,999)
        keys.append(key)
        all.append('\nKidney,'+str(key))
    with open(fileName,'w') as f:
        f.writelines(all)
def getNames(num,fileName="names2.csv"):
    '''Pull up a random sequence of names from a the particpants list or any list to use as a dummy data'''
    with open(fileName) as f:
        return random.sample([x[:-1].split(',') for x in f.readlines()],num)
def generateSet(numPatients=100,fileName="data.csv"):
    '''This is the main function it generates a dataset of patients containting first name, last name,key, compatibility rate, priority & distance'''
    names = getNames(numPatients)
    with open(fileName,"w") as f:
        lines = ['First Name,Last Name,Key,Compatibility rate %,Priority,Distance(KM)']
        for i in range(numPatients):
            keys = []
            key = random.randint(1000,9999)
            while key in keys:
                key = random.randint(1000,9999)
            keys.append(key)
            kidneys = [468,381,688,210,668]
            lines.append('\n'+names[i][0]+","+names[i][1]+","+str(key)+','+"-".join([str(kidneys[x])+":"+str(random.randint(0,100)) for x in range(5)])+','+str(random.randint(1,5))+','+str(random.randint(5,2000)))
        f.writelines(lines)