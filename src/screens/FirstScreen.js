import { Player } from "@lordicon/react";
import styles from "./FirstScreen.module.css";
import { useEffect, useRef } from "react";
import leads from "../icons/wired-lineal-952-business-network (1).json";

const FirstScreen = (props) => {
  const playerRef1 = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2000); // play again after 2 seconds
  };

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);

  return (
    <>
      <div
        className={!props.scrolled ? styles.description : styles.descriptionFixed}
        itemProp="articleBody"
      >
        אתה לא מקבל מספיק לידים ושורף המון זמן וכסף על שיווק <div className={styles.boldS}>שלא ממיר ?</div>
        <br /> הגיע הזמן
      </div>
      <div className={styles.title} itemProp="headline">
        ליצור <div className={styles.bold} itemProp="name"> מכונת לידים </div> לעסק
      </div>
      <div
        className={styles.description}
        itemProp="description"
      >
        בעזרת שיווק ממומן <div className={styles.boldS}>ממוקד ויעיל בדיגיטל</div>
      </div>
      <div className={styles.icon} itemProp="image">
        <Player
          zIndex={0}
          ref={playerRef1}
          icon={leads}
          size="100%"
          onComplete={handleComplete}
        />
      </div>
    </>
  );
};

export default FirstScreen;
