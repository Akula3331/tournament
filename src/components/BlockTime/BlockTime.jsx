import React from 'react'
import cls from './BlockTime.module.scss'

export default function BlockTime() {
  return (
    <div>
        <div className={cls.header}>
            <p className={cls.headerItem}>Тип</p>
            <p className={cls.headerItem}>Дисциплина</p>
            <p className={cls.headerItem}>Дата</p>
        </div>
        <div className={cls.con}>
          <img src="/images/date" alt="" />

        </div>
    </div>
  )
}
