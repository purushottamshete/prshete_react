import CourseDetailHeader from './courseDetailsHeader';
import CourseDetailContent from './courseDetailsContent';
import CourseDetailPrice from './courseDetailsPrice';

const CourseDetails = ({COURSE}) => {

    return (
        <>                                     
            <CourseDetailHeader title={COURSE.title} description={COURSE.description} video={COURSE.video} hours={COURSE.hours}/>
            <CourseDetailContent content={COURSE.content}/>
            <CourseDetailPrice price={COURSE.price} join={COURSE.join}/>
        </>
    );

}

export default CourseDetails;