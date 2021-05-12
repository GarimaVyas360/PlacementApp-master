import firestore from '@react-native-firebase/firestore';
import CreateUser from '../CreateUser';
import keywords from "../../res/databasekeywords/keywords";
import { exp } from 'react-native/Libraries/Animated/Easing';

export const UserSignUp = (firstName, lastName, gender, email, password, phoneno, branch, enrollment) => {
    console.log(firstName, lastName, gender, email, password, phoneno, branch, enrollment);
    // keywords.student_table.FirstName = FirstName;
    const status = 'Verified';
    firestore()
        .collection('Students')
        .add({
            FirstName: firstName,
            LastName: lastName,
            Gender: gender,
            Email: email,
            Password: password,
            Department: branch,
            Enrollment: enrollment,
            Phoneno: phoneno,
            value: status
        })
        .then(() => {
            console.log('Student  added!');
        });
    return true;
}

export const addTPO = (firstName, lastName, email, phoneno, selectedDepartment, password) => {
    console.log(firstName, lastName, email, password, phoneno, selectedDepartment);
    firestore()
        .collection('TPO')
        .add({
            FirstName: firstName,
            LastName: lastName,
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
    const subscriber = firestore()
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
    return () => subscriber();
}

export const deleteTpo = (key) => {
    firestore()
        .collection('TPO')
        .doc(key)
        .delete()
        .then(() => {
            console.log("tpo deleted");
        })
}

export const deleteStudents = (key) => {
    firestore()
        .collection('Students')
        .doc(key)
        .delete()
        .then(() => {
            console.log("Students deleted");
        })
}

export const deleteStudentList = (key) => {
    firestore()
        .collection('NewStudentsList')
        .doc(key)
        .delete()
        .then(() => {
            console.log("Students deleted");
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

export const UpdateAdmin = (firstName, lastName, email, phoneno, whatsAppNumber) => {
    console.log(firstName, lastName, email, phoneno, whatsAppNumber);
    firestore()
        .collection('Admin')
        .doc('YfqQCFkWSiWoGBeOoiCX')
        .update({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Mobile: phoneno,
            WhatsAppNumber: whatsAppNumber
        })
        .then(() => {
            console.log('Admin added!');
        });
}


export const UpdateStudent = (firstName, lastName, gender, email, phoneno, key) => {
    console.log(firstName, lastName, email, phoneno, key);
    firestore()
        .collection('Students')
        .doc(key)
        .update({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phoneno: phoneno,
            Gender: gender
        })
        .then(() => {
            console.log('Student added!');
        });
}

export const updateTpo = (firstName, lastName, department, email, phoneno, key) => {
    console.log(firstName, lastName, department, email, phoneno, key);
    firestore()
        .collection('TPO')
        .doc(key)
        .update({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phoneno: phoneno,
            Department: department
        })
        .then(() => {
            console.log('Tpo added!');
        });
}

export const suspendTPOList = (firstName, lastName, email, phoneno, selectedDepartment, password, key) => {
    console.log(firstName, lastName, email, password, phoneno, selectedDepartment);
    firestore()
        .collection('SuspendTpo')
        .add({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: password,
            Department: selectedDepartment,
            Mobileno: phoneno
        })
        .then(() => {
            console.log(' Suspended TPO added!');
            suspendTpo(key);
        });
}

export function suspendTpo(userId) {
    const suspendList = [];
    firestore()
        .collection('TPO')
        .doc(userId)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                console.log('User data: ', documentSnapshot.data());
                suspendList.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });

            }
            // setSuspendedList(suspendList);
            deleteTpo(userId);
            // suspendList.map((item, index) => {
            //     console.log("item :--" + item.FirstName);
            // })
        });

}

export const suspendStudentList = (firstName, lastName, email, phoneno, selectedDepartment, password, key) => {
    console.log(firstName, lastName, email, password, phoneno, selectedDepartment);
    firestore()
        .collection('SuspendStudents')
        .add({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: password,
            Department: selectedDepartment,
            Mobileno: phoneno
        })
        .then(() => {
            console.log(' Suspended Students added!');
            suspendStudent(key);
        });
}

export function suspendStudent(userId) {
    const suspendList = [];
    firestore()
        .collection('Students')
        .doc(userId)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                console.log('User data: ', documentSnapshot.data());
                suspendList.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });

            }
            // setSuspendedList(suspendList);
            deleteStudents(userId);
            // suspendList.map((item, index) => {
            //     console.log("item :--" + item.FirstName);
            // })
        });

}

export function SubmitGroup(groupName, id, sender, message, date, time) {
    firestore()
        .collection(groupName)
        .doc(id)
        .set({
            Sender: sender,
            Message: message,
            Date: date,
            Time: time
        }).then((response) => {
            console.log("reponse --->>", response);
        }).catch((error) => {
            console.log("error --->>", error)
        });
}


export const newUserSignup = (firstName, lastName, gender, email, password, phoneno, branch, enrollment, status) => {
    console.log(firstName, lastName, gender, email, password, phoneno, branch, enrollment);
    // keywords.student_table.FirstName = FirstName;
    firestore()
        .collection('NewStudentsList')
        .add({
            FirstName: firstName,
            LastName: lastName,
            Gender: gender,
            Email: email,
            Password: password,
            Department: branch,
            Enrollment: enrollment,
            Phoneno: phoneno,
            value: status
        })
        .then(() => {
            console.log('Students added!');
        });
    return true;
}


export const addGroupsChats = (sender, message, date, time, size, groupName) => {
    console.log(sender, message, date, time, size, groupName);
    // keywords.student_table.FirstName = FirstName;
    var groupSize = size + 1;
    firestore()
        .collection(groupName)
        .doc('' + groupSize)
        .set({
            id: groupSize,
            Sender: sender,
            Message: message,
            Date: date,
            Time: time,
        })
        .then(() => {
            console.log('group chat added!');
        });
    return true;
}
export const updatePassword = (newPassword) => {
    firestore()
        .collection('Admin')
        .doc('YfqQCFkWSiWoGBeOoiCX')
        .update({
            Password: newPassword,
        })
        .then(() => {
            console.log("Password updated");
        })
}

export const updateStudentPassword = (newPassword, Key) => {
    firestore()
        .collection('Students')
        .doc(Key)
        .update({
            Password: newPassword,
        })
        .then(() => {
            console.log("Password updated");
        })
}

export const updateTpoPassword = (newPassword, Key) => {
    firestore()
        .collection('TPO')
        .doc(Key)
        .update({
            Password: newPassword,
        })
        .then(() => {
            console.log("Password updated");
        })
}


export const addGroups = (sender, groupName, message, date, time, size, departmentName) => {
    console.log(sender, message, date, time, size, groupName);
    // keywords.student_table.FirstName = FirstName;
    const groups = groupName;
    var groupSize = size + 1;
    // const InfoTec = {

    //     id: groupSize,
    //     Sender: sender,
    //     Message: message,
    //     Date: date,
    //     Time: time,
    // }

    firestore()
        .collection('UserGroup')
        .doc(departmentName)
        .collection(groupName)
        .doc('' + groupSize)
        .set({
            id: groupSize,
            Sender: sender,
            Message: message,
            Date: date,
            Time: time,
        })
        .then(() => {
            console.log('groups chats added!');
        });
    return true;

}


export const addgroups = (sender, message, date, time, size, groupName) => {
    var groupSize = size + 1;
    const InfoTec = {

        id: groupSize,
        Sender: sender,
        Message: message,
        Date: date,
        Time: time,
    }

    firestore()
        .collection('GroupChats')
        .doc("" + groupSize)
        .collection(groupName)
        .collection('MU_IT_Group')
        .add({
            id: groupSize,
            Sender: sender,
            Message: message,
            Date: date,
            Time: time,
        })
        .then(() => {
            console.log('groups added!');
        });
    return true;

}

export const groupList = (groupName, department, groupSize) => {

    var groupsize = groupSize + 1;

    firestore()
        .collection('GroupList')
        .doc('' + groupsize)
        .set({
            id: groupsize,
            GroupName: groupName,
            Department: department
        })
        .then(() => {
            console.log('groups added!');
        });
    return true;
}