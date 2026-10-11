import {QrCodeGenerator} from "./QrCodeGenerator.jsx";
import {QrCodeScanner} from "./QrCodeScanner.jsx";
import {useState} from "react";
import styles from './Layout.module.css';

export const Layout = () => {
  const [mode, setMode] = useState('generator')

  return (
    <div className={styles.appShell}>
      <div className="mode-switch" role="tablist" aria-label="Режим QR-кода">
        <button
          className={`${styles.modeButton} ${mode === 'generator' ? styles.active : ''}`}
          onClick={() => setMode('generator')}
          role="tab"
          aria-selected={mode === 'generator'}
          type="button"
        >
          Генератор QR
        </button>
        <button
          className={`${styles.modeButton} ${mode === 'scanner' ? styles.active : ''}`}
          onClick={() => setMode('scanner')}
          role="tab"
          aria-selected={mode === 'scanner'}
          type="button"
        >
          Сканер
        </button>
      </div>
      {mode === 'generator' ? <QrCodeGenerator /> : <QrCodeScanner />}
    </div>
  )
}
