import firestore from '@react-native-firebase/firestore';
import CreateUser from '../CreateUser';

export const UserSignUp = (firstName, lastName, gender, email, password, phoneno, branch, enrollment) => {
    CreateUser(email, password);
    console.log(firstName, lastName, gender, email, password, phoneno, branch, enrollment);
    firestore()
        .collection('Students')
        .add({
            FirstName: firstName,
            lastName: lastName,
            Gender: gender,
            Email: email,
            Password: password,
            Department: branch,
            Enrollment: enrollment,
            Phoneno: phoneno
        })
        .then(() => {
            console.log('User added!');
        });
}

export const addTPO = (firstName, lastName, email, phoneno, selectedDepartment, password) => {
    CreateUser(email, password);
    console.log(firstName, lastName, email, password, phoneno, selectedDepartment);
    firestore()
        .collection('TPO')
        .add({
            FirstName: firstName,
            lastName: lastName,
            Email: email,
            Password: password,
            Department: selectedDepartment,
            Mobileno: phoneno
        })
        .then(() => {
            console.log('TPO added!');
        });
}







const count = 0;
export const createDepartment = (department) => {
    id = parseInt(count) + 1
    firestore()
        .collection('departments')
        .add({
            id: id + 1,
            department: department,
            alias: ''
        })
        .then(() => {
            console.log("department added");
        })
}


export const deleteDepartment = (key) => {
    firestore()
        .collection('departments')
        .doc(key)
        .delete()
        .then(() => {
            console.log("department deleted");
        })
}

export const updateDepartment = (key, newdepartment) => {
    firestore()
        .collection('departments')
        .doc(key)
        .update({
            department: newdepartment,
        })
        .then(() => {
            console.log("department updated");
        })
}