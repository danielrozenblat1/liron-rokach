import styles from "./ThirdScreen.module.css"
import rokach from "../images/liron.jpeg"
import Button from "../components/button/Button"
const ThirdScreen=()=>{
  

return <>
<div className={styles.header}>מי אני</div>
<div className={styles.wrapper}>


<div className={styles.left}>
<div className={styles.imageWrapper}><img className={styles.image} src={rokach}/></div>

</div>


<div className={styles.right}>
<div className={styles.title}>לירון רוקח</div>
<div className={styles.job}>קמפיינר ומשווק דיגיטלי</div>
<div className={styles.description}>תמיד משך אותי לעזור אנשים ולפתור את הבעיות שלהם ורק התחום תמיד היה בסימן שאלה עד שנחשפתי לתחום השיווק והבנתי ששם זה המקום שלי , ומאז אני עושה הכל כדי לסקרן כמה שיותר אנשים לגבי העסק שלכם !</div>
</div>

</div>
{/* <Button buttonText="איפה אני רואה עבודות שלך ?" to="עבודות"/> */}
</>


}
export default ThirdScreen