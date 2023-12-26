import Header from "../Header";
import styles from './style.module.scss';
import clock from '../../img/MeetPage/Clock.png';
import globe from '../../img/MeetPage/Globe.png';
import avatar from '../../img/MeetPage/avatar.png';
import {useState} from 'react'
import { style } from "@mui/system";
// import Card from "../Card";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


// const httpApiMethods = new HttpApiMethods()
// const meets = await httpApiMethods.GetMeetings()

const MeetPage = () => {
   
    // const filterMeet = meets.filter( (item, index) => index <= 3 )
    // console.log(filterMeet)
    // const id = 0
    // console.log(httpApiMethods.APIURL_FILES + meets[id].speackerImage)
    // const meetPng = (id) => {
    //     console.log(httpApiMethods.APIURL_FILES + meets[id].speackerImage)
    //     return httpApiMethods.APIURL_FILES + meets[id].speackerImage 
        
    // }
    // console.log(meetPng(id))
    // function extractDateTime(dateString) {
    //     const dateTime = new Date(dateString);
    //     const date = dateTime.toLocaleDateString();
    //     const time = dateTime.toLocaleTimeString();
        
    //     return { date, time };
    // }
    
    return (
        <>
            <Header></Header>

            <section className={styles.meets}>
                <div className={styles.meets__mainInfo_container}>
                    <span className={styles.meets__mainInfo_descr}>Интерактивная лекция «Управление инжиниринговыми проектами на базе вуза»</span>
                    <span className={styles.meets__mainInfo_type}>Психология</span>
                    <div className={styles.meets__mainInfo_status}><img className={styles.meets__mainInfo_status_img} src={clock} alt="clock"></img> <span>Онлайн</span> </div>
                    <div className={styles.meets__mainInfo_time}><img className={styles.meets__mainInfo_status_img} src={globe} alt="globe"></img> <span>22 декабря, с 10:00 до 22:00 по Московскому времени</span> </div>
                </div>
                {/* <div className={styles.meets__img}><img src={meetPng(id)}></img></div> */}
               
            </section>
            <div className={styles.meets__otziv_container}>
                <div className={styles.meets__otziv}>
                    <span className={styles.meets__otziv_title}>Отзывы</span>
                    Оставьте первый отзыв
                </div>
            </div>
            <section className={styles.aboutMeet}>
                <div className={styles.aboutMeet__title}>О мероприятии</div>
                <div className={styles.aboutMeet__descr}>Известным спикером будут продемонстрированы основные механизмы психологического воздействия в политике, а также особенности восприятия общественно-политической информации. Слушатели смогут узнать, как следует противостоять манипулятивному воздействию, фейковой информации, а также порассуждать о том, возможно ли существование мира без обмана.</div>
            </section>
            <section className={styles.expert}>
                <div className={styles.expert__title}>Специалист</div>
                <div className={styles.expert__container}>
                    <div className={styles.expert__img_container}><img className={styles.expert__img} src={avatar} alt="avatar"></img></div>
                    <div className={styles.expert__descr_container}>
                        <div className={styles.expert__descr_fullname}>Иванов Иван Иванович</div>
                        <div className={styles.expert__descr_speciality}>Психолог, таролог</div>
                        <div className={styles.expert__descr_phone}>+7 (888) 888 - 88 - 88</div>
                        <a href="#" className={styles.expert__descr_email}>exampl@ya.ru</a>
                    </div>
                </div>
            </section>
            <section className={styles.someMeetings}>
            <div className={styles.someMeetings__title}>Еще мероприятия</div>
            <Box sx={{ flexGrow: 1 }}>
                {/* <Grid container spacing={1}>
                    {Array.isArray(meets) ? (
                        filterMeet.map((item, index) => (
                        
                            
                            <Grid item sm={6} xl={3} md={6} lg={4} key={index}>
                               <div className='event_card' >
                                    <div className="event-card__photo"><img className='img' src={httpApiMethods.APIURL_FILES + item.speackerImage} alt="{item.speackerImage}" /></div>
                                        <div className="taggs">
                                            <div className='tagged'>{item.tags}</div>
                                            <div className="feautures">{item.type}</div>
                                        </div>
                                    <h4 className="event-card__title">{item.title}</h4>
                                    <p className="event-card__date">{extractDateTime(item.time).date}, в {extractDateTime(item.time).time} по Московскому времени</p>
                                </div>
                            </Grid>
                        
                        
                        
                        ))
                    ) : (
                        <p>Неверный тип данных с сервера!</p>
                )}
                
                </Grid> */}
            </Box>
            </section>
        </>
        
    )


}
export default MeetPage;