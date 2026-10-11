import {QRCodeSVG} from 'qrcode.react';
import {useState} from "react";
import styles from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  const onClickHandler = () => {
    setResult(value)
    setValue('')
  }

  const onChangeHandler = (e) => {
    setValue(e.target.value)
    setResult('')
  };

  return (
    <>
      <input type="text" onChange={onChangeHandler} className={styles.input}/>
      <button
        className={styles.generateButton}
        onClick={onClickHandler}
        type="button"
      >
        Сгенерировать
      </button>
      {result !== '' && <QRCodeSVG className={styles.qrCode} value={result}/>}
    </>
  )
}
