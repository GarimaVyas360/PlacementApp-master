import firestore from '@react-native-firebase/firestore';
import CreateUser from '../CreateUser';

export const UserSignUp = (firstName, lastName, gender, email, password, phoneno, branch, enrollment) => {
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
    return true;
}

export const addTPO = (firstName, lastName, email, phoneno, selectedDepartment, password) => {
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



function onSuccess(allow) {
    return allow;
}



const count = 0;
const departmentList = [];

export const createDepartment = (department) => {
    firestore()
        .collection('departments')
        .add({
            department: department,
            alias: ''
        }).then((response) => {
            console.log("reponse --->>", response);
        }).catch((error) => {
            console.log("error --->>", error)
        });
}


export function departmentListCollection(department) {
    var size;
    firestore()
        .collection("departments")
        // order by asc and desc order
        .where('department', '==', department)
        .get()
        .then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
            size = querySnapshot.size;
            querySnapshot.forEach(documentSnapshot => {
                console.log('User exists: ', size);

                if (documentSnapshot.exists) {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    // return true;

                }
            });
            if (size == 0) {
                console.log('Total success user: ', querySnapshot.size);
                createDepartment(department);
            }
        });
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