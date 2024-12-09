import QueryBuilder from "../../builder/QueryBuilder";
import { courseSearchableFields } from "./course.constant";
import { TCourse } from "./course.interface";
import { Course } from "./course.model"

const createCourseIntoDB = async(payload: TCourse) => {
    const result = await Course.create(payload);
    return result;
}

const getAllCoursesFromDB = async(query: Record<string, unknown>) => {
    const courseQuery = new QueryBuilder(Course.find().populate('prerequisiteCourses.course'), query)
    .search(courseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

    const result = await courseQuery.modelQuery;
    return result;
}

const getSingleCourseFromDB = async(id: string) => {
    const result = await Course.findById(id);
    return result;
}

const deleteCourseFromDB = async(id: string) => {
    const result = await Course.findByIdAndUpdate(id, {isDeleted: true}, {new: true});
    return result;
}

export const courseServices = {
    createCourseIntoDB,
    getAllCoursesFromDB,
    getSingleCourseFromDB,
    deleteCourseFromDB,
}