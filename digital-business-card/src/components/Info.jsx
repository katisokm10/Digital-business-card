
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Info() {
    return(
        <>
         <div className="info">
          <img src='./images/IMG_1054 (1).jpg' /> 
          <h1 className="info-name">Katiso Mokoena</h1>
          <p className="job-role">Fullstack Developer</p>
          <div className="button-container">
           <a href='mailto:Momokatiso@gmail.com'>
             <button className="email">
              <img src="./images/email-1572-svgrepo-com.svg" />Email
             </button>
           </a>

           <a href='https://www.linkedin.com/in/katiso-mokoena-a62989275/'>
            <button className="linkedln">
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />LinkedIn
            </button>
           </a>
         </div>
         </div>
        </>
    )
}