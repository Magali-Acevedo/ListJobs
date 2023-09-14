import clsx from "clsx";
import style from "../Card/cardStyle.module.css";
import { ButtonPrimary } from "../Commons/Buttons";

export const Card = ({ 
    isNew = true,
    isFeatured = true,
 
    logo,
    company,
    languages,

    position ,

    postedAt,
    contract ,
    location ,

    role ,
    level 

}) => {


  return (
    <>
      <article className={style.wrapper}>
        <div className={style.containerCard}>
          <div className={style.containerRigth}>
            <figure className={style.figureIcon}>
              <img src={logo} alt="logo" />
            </figure>
            <div>
              <div className={style.containerLeft}>
                <h3 className={style.title}>{company} </h3>
                {isNew && (
                  <span className={clsx(style.btnFilled, style.colorPrimary)}>
                    NEW!
                  </span>
                )}
                {isFeatured && (
                  <span
                    className={clsx(
                      style.btnFilled,
                      style.colorNeutralVeryDark
                    )}
                  >
                    FEATURED
                  </span>
                )}
              </div>

              <p className={style.cardSubTitle}>{position}</p>

              <ul className={style.listDetailsJobs}>
                <li>{postedAt}</li>
                <li>·</li>
                <li>{contract}</li>
                <li>·</li>
                <li>{location}</li>
              </ul>
            </div>
          </div>
          <div className={style.line}></div>
          <div className={style.listDetailsTags}>
            {
                languages.map((element,index) =>(
                <ButtonPrimary key={index} contentBtn={element}  />)
                )

                
            }
           
            {
                role && <ButtonPrimary contentBtn={role} />
            }
            {
                level && <ButtonPrimary contentBtn={level} />
            }
          </div>
        </div>
      </article>
    </>
  );
};
