mat = [[200,2,120],[40,180,20],[50,160,380]]
maxvDict ={}
#iterating the combainaisons and adding them up to a dictionary where the key is the summed up value and the valye is the list of items summed
for i1 in range(len(mat[0])):
    maxv=mat[0][i1]
    for i2 in range(len(mat[1])):
        if i1 != i2:
            maxv+=mat[1][i2]
            for i3 in range(len(mat[2])):
                if i3 != i2 and i3 != i1 :
                    maxv+= mat[2][i3]
                    maxvDict[maxv] = [mat[0][i1],mat[1][i2],mat[2][i3]]
                    break
#finding the max sum
l = []
for i in maxvDict.keys():
    l.append(i)
maxvKey = max(l)
print(len(maxvDict))
print(maxvDict[maxvKey])
print(maxvDict)