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
              <img src='https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119588945_3401312286582407_3706684961984721063_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=mG3MR8ZKVB8AX9rAx31&_nc_ht=scontent.fsdv3-1.fna&oh=8a4d541d43bc2c71f181364c552b5626&oe=607EC3B1'/>
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
            <p>מנעולן מקצועי המתמחה במיגון, אבטחה, מתן שירות ומענה לכלל הצרכים - פיתרון לכל סוגי בעיות
              </p>
            <p>
              צילינדר,רכבים,כספות מנגנונים, התקנת מצלמות, אמצעי אבטחה ועוד
              תוך הקפדה על אמינות יושרה ומקצועיות</p>
          </Fade>
          <whatsapp-button phone="0549133012" dialcode="972" text="היי אני מעוניין/ת בשירותים שלך, אשמח לקבל פרטים נוספים" label="צור איתי קשר"/>

        </div>
      </div>
    </div>
  )
}

export default Header
