import s from './project-item.module.scss'

export default function ProjectItem ({name, description}:{name:string, description:string}) {
    return (
        <div className={s.projectItem}>
          <h3 className={s.itemHeader}>{name}</h3>
          <p className={s.itemContent}>{description}</p>
        </div>
    )
}