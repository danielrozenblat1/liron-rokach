import { useEffect, useRef } from "react"
import styles from "./SecondScreen.module.css"
import { Player } from "@lordicon/react"
import ScrollReveal from "scrollreveal"
import noMovement from "../icons/wired-lineal-38-error-cross-simple.json"
import Button from "../components/button/Button"
import document from '../icons/wired-lineal-56-document.json'
import chart from "../icons/wired-lineal-152-bar-chart-arrow.json"
import manage from "../icons/wired-lineal-978-project-management.json"
import crowd from "../icons/wired-lineal-2374-crowdfunding.json"
const SecondScreen=()=>{

    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()
    const playerRef4=useRef()
    const playerRef5=useRef()
    useEffect(()=>{
  
  
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.section}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.stepHeader}`, {
              duration: 1000,
              distance: "30px",
              origin: "top", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();    
        playerRef5.current?.playFromBeginning();  
    },[])
    return <>
<div className={styles.title} id="שיווק בדיגיטל"> למה צריך שיווק בדיגיטל ?</div>
<div className={styles.bigWrapper}>

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()}
icon={noMovement}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>יותר לקוחות</div>
    <div className={styles.section}>בלי שיווק איכותי וממוקד, בעל עסק יכול להרחיב את קהל הלקוחות אך ורק בשיטת מפה לאוזן, שזו שיטה טובה, אך לא מביאה תוצאות לטווח הארוך. שיווק דיגיטלי מרחיב את קהל הלקוחות בצורה דרמטית ונותנת לבעל העסק קפיצת מדרגה.</div>
</div>
</div>
{/* חץ לשלב הבא */}

<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>מגדילה רווחיות</div>
    <div className={styles.section}> בעל עסק טוב יודע שהוא צריך לדאוג לרווחיות העסק בכל רגע נתון. עם לקוחות שמגיעים בתדירות מתמדת כך גם רווחיות העסק תזנק משמעותית</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()}
icon={document}/>
</div>
</div>

{/* חץ לשלב הבא */}

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()}
icon={crowd}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>שקט תעשייתי</div>
    <div className={styles.section}>כל בעל עסק חווה בתקופה כזו או אחרת רגעי משבר בצורה של לקוחות שלא מגיעים. עם שיווק ממוקד ונכון, לא תצטרך לדאוג עוד דקה אחת בנוגע ללקוחות שלך</div>
</div>
</div>
<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>חסכון בזמן</div>
    <div className={styles.section}>המון בעלי עסקים מחליטים לקחת קורס מזורז בשיווק כדי לחסוך עלויות, ולמעשה גם פוגעים בעסק בכך שעושים עבודה לא נכונה וגם מבזבזים זמן על תחום שהם לא באמת טובים בו.</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()}
icon={chart}/>
</div>
</div>
<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef5} size="100%" onComplete={() => playerRef5.current?.playFromBeginning()}
icon={manage}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>דיוק בקהל היעד</div>
    <div className={styles.section}>בניגוד לשיווק בעיתון, רדיו או טלוויזיה שמכוון לכל מי שצופה, בשיווק דיגיטלי אנחנו מכוונים בדיוק לקהל היעד שרלוונטי לעסק שלך. כל שקל שתוציא על שיווק יפגוש את קהל הלקוחות המתאים ביותר עבורך</div>
</div>
</div>

</div>
<Button buttonText="לשיחת ייעוץ חינמית" to="צור קשר" />

    </>
}
export default SecondScreen