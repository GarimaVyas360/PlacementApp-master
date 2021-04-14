import firestore from '@react-native-firebase/firestore';
import CreateUser from '../CreateUser';

const UserSignUp = (firstName, lastName, gender, email, password, phoneno, branch, enrollment) => {
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

export default UserSignUp;