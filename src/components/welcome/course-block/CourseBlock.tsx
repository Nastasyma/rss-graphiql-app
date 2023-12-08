import s from './course-block.module.scss'

export default function CourseBlock () {
    return (
        <div className={s.courseBlock}>
            <div className={s.imageBlock}>
                <img src="./space.png" alt="" className={s.image}/>
            </div>
        </div>
    )
}