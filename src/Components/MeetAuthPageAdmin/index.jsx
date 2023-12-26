import Header from "../Header";
import styles from './style.module.scss';
import clock from '../../img/MeetPage/Clock.png';
import globe from '../../img/MeetPage/Globe.png';
import avatar from '../../img/MeetPage/avatar.png';
import like from '../../img/MeetPage/Facebook.png';
import Card from "../Card";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import { useState, CSSProperties, useEffect, useRef } from "react";
import newAvatar from '../../img/MeetPage/newAvatar.png';
import vk from '../../img/MeetPage/Vk.png';
import tg from '../../img/MeetPage/Telegram.png';
import book from '../../img/MeetPage/Book.png';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import newAvatarSecond from '../../img/AddUsers/newAvatar.png';
import EditMeetsForm from "../edit/EditMeetsForm";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "56%",
  height: "80vh",
  bgcolor: 'background.paper',
  borderRadius: '25px',
  boxShadow: 24,
  p: 4,
};
const MeetPage = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    return (
        <>
         
            <Header></Header>

            <section className={styles.meets}>
                <div className={styles.meets__mainInfo_container}>
                    <input placeholder="Ввести название мероприятия" className={styles.meets__mainInfo_descr}></input>
                    <input placeholder='Тип мероприятия' className={styles.meets__mainInfo_type}></input>
                    <div className={styles.meets__mainInfo_status}><img className={styles.meets__mainInfo_status_img} src={clock} alt="clock"></img> <input className={styles.time_input} placeholder="Время миропириятия" ></input> </div>
                    <div className={styles.meets__mainInfo_time}><img className={styles.meets__mainInfo_status_img} src={globe} alt="globe"></img> <input className={styles.status_input} placeholder='Дата проведения'></input> </div>
                </div>
               
                        <form className={styles.addModal_form} method="post" encType="multipart/form-data">
                                    <div className={styles.input_file_row}>
                                        <label className={styles.input_file}>
                                            <input type="file" name="file[]" multiple accept="image/*"/>	
                                            <div className={styles.addUser__card_container_new}>
                                                <div className={styles.round}>+</div>
                                                <div className={styles.addUser__card_text}>Добавить пользователя</div>
                                            </div>
                                        </label>
                                        <div className={styles.input_file_list}></div>  
                                    </div>
                                </form>
                
            </section>
            <div className={styles.container}>
              
                <div className={styles.meets__otziv_container}>
                    <div className={styles.newMeeting__container}>
                        
                        <input placeholder="Ссылка на мероприятие" className={styles.newMeeting__link}></input>
                        <input placeholder="Добавить ссылку на видео" className={styles.newMeeting__link_video}></input>
                    </div>
                    
                    
                </div>
            </div>
           
            <section className={styles.aboutMeet}>
                <div className={styles.aboutMeet__title}>О мероприятии</div>
                <textarea placeholder="Написать описание мероприятия" style={{marginTop: '50px'}} className={styles.comments__input}></textarea>
            </section>
            <section className={styles.expert}>
                <div className={styles.expert__title}>Специалист</div>
                <div className={styles.addModal_user_container}>
                                <div className={styles.addModal_user_img_container}>
                                <form className={styles.addModal_form} method="post" encType="multipart/form-data">
                                    <div className={styles.input_file_row}>
                                        <label className={styles.input_file}>
                                            <input type="file" name="file[]" multiple accept="image/*"/>	
                                            <span><img src={newAvatarSecond}></img></span>
                                        </label>
                                        <div className={styles.input_file_list}></div>  
                                    </div>
                                </form>
                                </div>
                                <div className={styles.addModal_user_input_container}>
                                    <input placeholder='ФИО специалиста' className={styles.addModal_user}></input>
                                    <input placeholder='Должность' className={styles.addModal_user}></input>
                                    <select className={styles.addModal_user_select}>
                                        <option>Пользователь</option>
                                        <option>Администратор</option>
                                    </select>
                                    <input placeholder='Почта' className={styles.addModal_user}></input>
                                    <input placeholder='Номер телефона' className={styles.addModal_user}></input>
                                   
                                </div>
                                
                </div>
                <div className={styles.btn_contain}>
                    <button className={styles.newMeeting__button}>Опубликовать мероприятие</button>
                </div>
               
                <EditMeetsForm></EditMeetsForm>
            </section>
            
        </>
        
    )


}
export default MeetPage;