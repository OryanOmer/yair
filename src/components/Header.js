import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">

      <div className="container">
        <div className="header-wrapper">
          <div>
          <script src="https://unpkg.com/whatsapp-button?module" type="module"></script>
          </div>
          <Fade bottom>
            <h2>
              היי אני יאיר זקס
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
            <div className='yair-picture'>
              <img src='https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119588945_3401312286582407_3706684961984721063_o.jpg?_nc_cat=104&ccb=3&_nc_sid=174925&_nc_ohc=Awhgh4dRAFwAX8T6VSb&_nc_ht=scontent.fsdv3-1.fna&oh=29e761907197af2730d8fe6584bf0afb&oe=605736B1'/>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                מנעולן מוסמך
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p></p>
            <p>אשמח להציע לך שירות אדיב ומקצועי</p>
          </Fade>
          <whatsapp-button phone="0549133012" dialcode="972" text="היי אני מעוניין/ת בשירותים שלך, אשמח לקבל פרטים נוספים" label="צור איתי קשר"/>

        </div>
      </div>
    </div>
  )
}

export default Header
