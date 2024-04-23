import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from '../button/Button';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 0px 3px 1px black',
          width: "100%",
          margin: "auto",
        
          padding:"0.2rem",
          background: "linear-gradient(190deg, rgba(255,255,255,1) 0%, rgba(220, 180, 255, 0.979) 50%, rgba(255,255,255,1) 100%);",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
       
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              color: 'black', // Apply black color to content
              fontFamily: 'RubikR',
              direction: "rtl",
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
         
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'RubikR'}}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            direction:"rtl",
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
     
    <div className={styles.title} id="שאלות נפוצות">שאלות נפוצות</div>
      <DropdownAccordion title="מה זה שיווק דיגיטלי ?" content="שיווק דיגיטלי כבעל עסק נותן לך פלטפורמה להרחבת הלקוחות וקהל היעד שלך, מגדיל לך באופן משמעותי את הלידים והמכירות הצפויות ונותן לך שקט נפשי בכל הקשור למציאת לקוחות חדשים."/>
      <DropdownAccordion title="מה זה קמפיין ?" content="קמפיין זהו תכנית ממומנת אשר נפתחת לך לאחר שיחת היכרות ותיאום ציפיות, במהלך הקמפיין יתפרסמו מודעות בפלטפורמות השונות המדברות על העסק שלך. מודעות אלה מתפרסמות לקהל יעד ספציפי ומושכות אליהן לידים חמים." />
      <DropdownAccordion title="למה שאעסיק קמפיינר אם אני יכול לעשות את זה בעצמי ?" content="יש שני סוגים של שיווק - אונליין ואופליין: שיווק אופליין הוא שיווק ברדיו, טלוויזיה ועיתון. זהו שיווק מיושן אשר לא מכוון לקהל יעד ספציפי אלא מכוון לכל אשר שומע. בנוסף הוא יקר להחריד. באונליין אתה מכוון לקהל יעד ספציפי ומשלם הרבה פחות"/>
      <DropdownAccordion title="לממן מודעות בדיגיטל זה עסק יקר, למה שאעשה את זה ?" content="סכום מימון המודעות תלוי אך ורק בך, זה יכול להתחיל בסכומים קטנים יותר כדי להבין איך זה עובד, ולאחר שתבין את רמת החשיפה הפוטנציאלית, תמיד אפשרי להעלות את המימון בכל רגע נתון. יש לשים לב שככל שסכום המימון גבוה יותר, ככה גם החשיפה איכותית יותר ."/>
      <Button buttonText="לשיחת ייעוץ חינמית" to="צור קשר"/>
    </div>
  
  );
}
