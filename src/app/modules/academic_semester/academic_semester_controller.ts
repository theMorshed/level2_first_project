import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterServices } from "./academic_semester_service";

const createAcademicSemester = catchAsync(async(req, res) => {
    
    const result = await academicSemesterServices.createAcademicSemesterIntoDB(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Academic Semester created successfully',
        data: result
    })
})

export const academicSemesterControllers = {
    createAcademicSemester,
}