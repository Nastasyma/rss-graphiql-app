import { useState } from 'react'
import s from './burger.module.scss'
export default function Burger() {
  const [open, setOpen] = useState(false)

  return (
    <div className={s.wrap} onClick={() => setOpen(!open)}>
      <div className={`${s.burger} ${open ? `${s.active}` : ''}`}></div>
    </div>
  )
}
