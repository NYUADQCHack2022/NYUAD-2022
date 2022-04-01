from flask import Flask
import json

app = Flask(__name__)

x={
    '1':{'_id': '6246245277d0cc6fc1031e3f', 
    'firstName': 'Maryam', 
    'lastName': 'Almetnawy', 
    'key': 5861, 
    'cRate': {'468': 83, '381': 82, '688': 76, '210': 60, '668': 95}, 
    'priority': 3, 
    'distance': 12
},
'2':{'_id': '6246245277d0cc6fc1031e40', 'firstName': 'Ouassim', 'lastName': 'Hamdani', 'key': 9773, 'cRate': {'468': 75, '381': 39, '688': 70, '210': 27, '668': 89
    }, 'priority': 3, 'distance': 1293
},
'3':{'_id': '6246245277d0cc6fc1031e41', 'firstName': 'Aishwarya', 'lastName': 'Sahai', 'key': 9975, 'cRate': {'468': 73, '381': 69, '688': 60, '210': 42, '668': 85
    }, 'priority': 2, 'distance': 786
},
'4':{'_id': '6246245277d0cc6fc1031e42', 'firstName': 'Scott', 'lastName': 'Oshir', 'key': 7808, 'cRate': {'468': 40, '381': 42, '688': 14, '210': 94, '668': 59
    }, 'priority': 2, 'distance': 244
},
'5':{'_id': '6246245277d0cc6fc1031e43', 'firstName': 'Ahmad', 'lastName': ' Farai', 'key': 2191, 'cRate': {'468': 64, '381': 55, '688': 61, '210': 44, '668': 51
    }, 'priority': 1, 'distance': 1125
},
'6':{'_id': '6246245277d0cc6fc1031e44', 'firstName': 'Runyao', 'lastName': 'Fan', 'key': 7580, 'cRate': {'468': 100, '381': 46, '688': 89, '210': 5, '668': 68
    }, 'priority': 2, 'distance': 1036
},
'7':{'_id': '6246245277d0cc6fc1031e45', 'firstName': 'Mohamed', 'lastName': 'Qasrawi', 'key': 8037, 'cRate': {'468': 1, '381': 2, '688': 9, '210': 92, '668': 92
    }, 'priority': 1, 'distance': 145
},
'8':{'_id': '6246245277d0cc6fc1031e46', 'firstName': 'Swaraj', 'lastName': 'Purohit', 'key': 1151, 'cRate': {'468': 72, '381': 49, '688': 35, '210': 22, '668': 16
    }, 'priority': 1, 'distance': 1591
},
'9':{'_id': '6246245277d0cc6fc1031e47', 'firstName': 'Minwu', 'lastName': 'Kim', 'key': 4079, 'cRate': {'468': 41, '381': 20, '688': 82, '210': 30, '668': 100
    }, 'priority': 3, 'distance': 1718
}
}

@app.route("/")
def give_data():
    return json.dumps(x)