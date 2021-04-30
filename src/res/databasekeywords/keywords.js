const keywords = {
    table_name: {
        admin: 'admin',
        tpo: 'tpo',
        student: 'student',
        new_student: 'new_student',
        suspended_student: 'suspended_student',
        suspended_tpo: 'suspended_tpo',
        college: 'college',
        department: 'department',
        group: 'group',
    },
    admin_table: {
        First_name: 'FirstName',
        last_name: 'LastName',
        email: 'email',
        contact_no: 'contact_no',
        whatsapp_no: 'whatsapp_no',
        username: 'username',
        online_status: 'online_status',
        last_seen: 'last_seen',
        password: 'password',
        security_password: 'security_password',
        mpin: 'mpin',
        access_group: 'access_group',
        image: 'image',
        id: 'id',
    },
    tpo_table: {
        first_name: 'first_name',
        last_name: 'last_name',
        email: 'email',
        contact_no: 'contact_no',
        whatsapp_no: 'whatsapp_no',
        username: 'username',
        online_status: 'online_status',
        last_seen: 'last_seen',
        password: 'password',
        security_password: 'security_password',
        mpin: 'mpin',
        access_group: 'access_group',
        image: 'image',
        id: 'id',
    },
    student_table: {
        first_name: 'FirstName',
        last_name: 'LastName',
        gender: 'Gender',
        email: 'Email',
        contact_no: 'Phoneno',
        whatsapp_no: 'whatsapp_no',
        username: 'username',
        enrollment: 'Enrollment',
        department: 'Department',
        session: 'session',
        semester: 'semester',
        dob: 'dob',
        password: 'Password',
        mpin: 'mpin',
        access_group: 'access_group',
        online_status: 'online_status',
        last_seen: 'last_seen',
        resume: 'resume',
        image: 'image',
        id: 'id',
        approved_by: 'approved_by',
        joining_date: 'joining_date',
        status: 'status',
    },
    department_table: {
        id: 'id',
        department_name: 'department_name',
        department_code: 'department_code',
    },
    group_table: {
        group_name: 'group_name',
        group_icon: 'group_icon',
        // participant: 'participant',
        participant_id: 'participant_id',
        participant_name: 'participant_name',
        participant_type: 'participant_type',
        participant_status: 'participant_status',
        // message: 'message',
        message_id: 'message_id',
        message_text: 'message_text',
        message_by: 'message_by',
        message_time: 'message_time',
        // read_by: 'read_by',
        reader_id: 'reader_id',
        reader_name: 'reader_name',
        reader_time: 'reader_time',
    },
    college_table: {
        college_name: 'college_name',
        college_logo: 'college_logo',
        description: 'description',
        contact_no: 'contact_no',
        whatsapp_no: 'whatsapp_no',
        web_link: 'web_link',
    }
}
export default keywords;