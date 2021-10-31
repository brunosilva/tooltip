// packages
import React from 'react'

// styles
import style from './style.module.scss'

// assets
import alertImage from '../../assets/images/alerta.png'

export interface IPropsTooltip {
  textMessage: string
}

const Tooltip: React.FC<IPropsTooltip> = ({ textMessage }) => {
  // const showMessage = () => {
  //   const currentStatus = `${style.message} ${style.dFlex}`
  // }
  // const removeMessage = () => {
  //   const currentStatus = `${style.message} ${style.dNone}`
  // }

  return (
    <div className={style.container}>
      <div className={style.message}>
        <span>{textMessage}</span>
      </div>
      <div className={style.icon}>
        <img src={alertImage} alt="alert icon" />
      </div>
    </div>
  )
}

export default Tooltip
