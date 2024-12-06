import { StudentServices } from "./student_service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";

const getAllStudents = catchAsync(async(req, res) => {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Student retrieved successfully',
        data: result
    })
})

const getSingleStudent = catchAsync(async(req, res) => {
    const {studentId} = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Student - ${studentId} retrieved successfully`,
        data: result
    })
})

const deleteStudent = catchAsync(async (req, res) => {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Student is deleted succesfully',
        data: result,
    });
});

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteStudent,
}