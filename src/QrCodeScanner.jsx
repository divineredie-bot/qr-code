import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import styles from './QrCodeScanner.module.css'

export const QrCodeScanner = () => {
  const [value, setValue] = useState('')

  const scanHandler = (result) => {
    setValue(result[0].rawValue)
  }

  const settings = {
    audio: true,
    finder: true,
  }


  const stylesSettings = {
    container: { width: '100%', maxWidth: 350, height: 350 },
  }

  return (
      <div className={styles.scannerView}>
        <Scanner
          onScan={scanHandler}
          components={settings}
          styles={stylesSettings}
        />
      <a
        className={styles.scannerResult}
        href={value}
        target="_blank"
        rel="noreferrer"
      >
        {value}
      </a>
    </div>
    )
}
