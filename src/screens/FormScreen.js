import { useRef } from "react"
import styles from "./FormScreen.module.css"
const FormScreen=()=>{

    const phoneRef=useRef(null)
    const mailRef=useRef(null)
    const nameRef=useRef(null)
    const reasonRef=useRef(null)
return <>
<div id="צור קשר" className={styles.title}>תשאיר פרטים ואחזור אליך בהקדם</div>

<form className={styles.form}>
<div className={styles.row}>
<input ref={nameRef} className={styles.input} placeholder="שם מלא"/>

<input ref={mailRef} className={styles.input} placeholder="מייל"/>
<input ref={phoneRef} className={styles.input} placeholder="מספר טלפון"/>
<input ref={reasonRef} className={styles.input} placeholder="סיבת הפנייה"/>
</div>


<div className={styles.center}><button className={styles.button}>שלח</button></div>
</form>

</>

}
export default FormScreen