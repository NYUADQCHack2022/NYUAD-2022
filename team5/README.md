# NYUAD Hackathon for social good in the arab world
## Team 5 - Hayat( Life)

### Documentation

### People

-  Scott Oshiro (Mentor), Stanford University, USA
-  Aishwarya Sahai (Mentor), University of Massachusetts Amherst, USA
-  Ouassim Hamdani, Student, ESTIN, Algeria
-  Maryam Almetnawy, Student, Ajman University, US, UAE
-  Minwu Kim, Student, NYU Abu Dhabi, United Arab Emirates
-  Runyao Fan, Student, NYUAD,UAE
-  Swaraj Purohit, student, Dr. Vishwanath Karad Mit World Peace University, India
-  Mohammad issam aref muhsen, Student, Applied science private university, Jordan
-  Ahmad Fraij, student,  NYUAD, Abu Dhabi


### Getting started

Setting up React native CLI development environment
```console 
https://reactnative.dev/docs/environment-setup
```

Clone this repository
```console 
git clone https://github.com/NYUADQCHack2022/NYUAD-2022
```

Move to the `team5` folder
```console
cd .\NYUAD-2022\team5\hayat\
```
Steps to run
```console
yarn android
```
or
```console
 npx react-native start
```
then
```console
 npx react-native run-android
```

 
### Problem Statement + Solution

### Strategies Explored - Why Qubo

#### Data

The used database is MongoDB, the choice was made due to the dynamicity of the database, & the better searching speeds of it.

Each data entry has 5 values (meaning we have 5 columns)
First Name : (String).
Last Name : (String).
Key : (Integer) special ID of the patient (unique).
Compatibility rate : (Dictionary) where the key is the kidney ID, and the value is the compatibility rate of the patient with that kidney.
Priority : (Integer) Priority of the person from 1 to 5.
Distance : (Integer) The distance between the patient and the medical center.

### Demo

### Future Work Scope -Scalability

### Impact
```
