def checkCol(arr,i,j,numOfElementsinrow):
    '''Given a matrix arr of integers,
    integers i : index of element one,
    j : index of the 2nd element 
    & numOfElemenetsInrow represent how many elements we have in a row
    This function checks and verify if the both elemets are in the same column or not, if yes it turns their matrix position to 1 marking a connection.
    '''
    if abs(i-j) % numOfElementsinrow ==0: #If the difference between elements index is a multiple of numOfElementsInRow, then they share the same column
        arr[i][j]=1
def checkRow(arr,i,j,numOfElementsInRows):
    '''Given a matrix arr of integers,
    integers i : index of element one,
    j : index of the 2nd element 
    & numOfElemenetsInrow represent how many elements we have in a row
    This function checks and verify if the both elemets are in the same row or not, if yes it turns their matrix position to 1 marking a connection.
    '''
    if (i // numOfElementsInRows) == (j // numOfElementsInRows): #here we calculate the row of each element by floor division on numOfElementsInRow, and verify if they are equal, if yes they share the same row
        arr[i][j] = 1
def genMat(n,numOfElementsInRow):
    '''Given integer n : a matrix dimenesion (representing the number of elements in the graph),
    And integer numOfElementsInRow representing the length of the row in the graph,
    The function will create the nxn matrix of connection between the elements
    '''
    mat = [] #our matrix
    for i in range(n):
        mat.append( [0] * n) #creating an nxn matrix of 0s
    for i in range(len(mat)): # iterating the rows
        for j in range(len(mat[i])): #iterating the elements in the row
            if i!=j: # when i==j it means they are the same element so no connection
                checkCol(mat,i,j,numOfElementsInRow) #check if they are in the same column, if yes mat[i][j] will be one.
                if mat[i][j]==0: #if the checkCol already have set it to one, meaning no need to check the row, else check it
                    checkRow(mat,i,j,numOfElementsInRow) #check if they are in the same row, if yes mat[i][j] will be one.
    return mat                