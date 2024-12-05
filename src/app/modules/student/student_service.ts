import { StudentModel } from "./student_model"

const getAllStudentsFromDB = async() => {
    const result = await StudentModel.find();
    return result;
}

const getSingleStudentFromDB = async(id: string) => {
    const result = await StudentModel.findById(id);
    return result;
}

export const StudentServices = {
    getAllStudentsFromDB,
    getSingleStudentFromDB,
}