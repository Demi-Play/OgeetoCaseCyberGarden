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
                    <span className={styles.meets__mainInfo_descr}>Интерактивная лекция «Управление инжиниринговыми проектами на базе вуза»</span>
                    <span className={styles.meets__mainInfo_type}>Психология</span>
                    <div className={styles.meets__mainInfo_status}><img className={styles.meets__mainInfo_status_img} src={clock} alt="clock"></img> <span>Онлайн</span> </div>
                    <div className={styles.meets__mainInfo_time}><img className={styles.meets__mainInfo_status_img} src={globe} alt="globe"></img> <span>22 декабря, с 10:00 до 22:00 по Московскому времени</span> </div>
                </div>
                <div className={styles.meets__img}></div>
                
            </section>
            <div className={styles.container}>
              
                <div className={styles.meets__otziv_container}>
                    <div className={styles.newMeeting__container}>
                        <button className={styles.newMeeting__button}>ЗАПИСАТЬСЯ НА МЕРОПРИЯТИЕ</button>
                        <a href="#" className={styles.newMeeting__link}>Ссылка на мероприятие</a>
                        <a href="#" className={styles.newMeeting__ling_video}>СКАЧАТЬ ВИДЕО</a>
                    </div>
                    <div onClick={handleOpen} className={styles.meets__otziv}>
                        <span className={styles.meets__otziv_title}>Оставить вопрос</span>
                        Оставьте вопрос первым
                    </div>
                    
                </div>
            </div>
           
            <section className={styles.aboutMeet}>
                <div className={styles.aboutMeet__title}>О мероприятии</div>
                <div className={styles.aboutMeet__descr}>Известным спикером будут продемонстрированы основные механизмы психологического воздействия в политике, а также особенности восприятия общественно-политической информации. Слушатели смогут узнать, как следует противостоять манипулятивному воздействию, фейковой информации, а также порассуждать о том, возможно ли существование мира без обмана.</div>
            </section>
            <section className={styles.expert}>
                <div className={styles.expert__title}>Специалист</div>
                <div className={styles.newContainer}>
                    <div className={styles.expert__container}>
                        <div className={styles.expert__img_container}><img className={styles.expert__img} src={avatar} alt="avatar"></img></div>

                        <div className={styles.expert__descr_container}>
                            <div className={styles.expert__descr_fullname}>Иванов Иван Иванович</div>
                            <div className={styles.expert__descr_speciality}>Психолог, таролог</div>
                            <div className={styles.expert__descr_phone}>+7 (888) 888 - 88 - 88</div>
                            <a href="#" className={styles.expert__descr_email}>exampl@ya.ru</a>
                        </div>

                    </div>     
                    <div className={styles.container__links}>
                        <div className={styles.links__title}>Ссылки на материалы специалиста</div>
                        <div className={styles.links__img_container}>
                            <a href="#"><img src={vk} className={styles.links__img}></img></a>
                            <a href="#"><img src={tg} className={styles.links__img}></img></a>
                            <a href="#"><img src={book} className={styles.links__img}></img></a>
                        </div>

                    </div>
                </div>
                
            </section>
            <section className={styles.comments}>
                <div className={styles.comments__title}>Комментарии</div>
                <div className={styles.newInputContainer}>
                    <div className={styles.comments__number}>3 КОММЕНТАРИЯ</div>
                    <div className={styles.comments__input_container}>
                        <div className={styles.comments__input_img_container}>
                            <img className={styles.comments__input_img} src={newAvatar} alt='avatar'></img>
                            <textarea placeholder="Дмитрий Кирканов" className={styles.comments__input}></textarea>
                        </div>
                        <div className={styles.comments__button_container}>
                            <button className={styles.comments__button}>ОТПРАВИТЬ</button>
                        </div>
                    </div>
                    <div className={styles.comments__all_container}>
                        <div className={styles.oneComment__container}>
                            <div className={styles.oneComment__img}><img alt='avatar' src={newAvatar}></img></div>
                            <div className={styles.oneComment__descr_container}>
                                <div className={styles.oneComment__descr_title_container}>
                                    <div className={styles.oneComment__descr_title}><span className={styles.yellowSpan}>Д</span>митрий Кирсанов</div>
                                    <div className={styles.oneComment__descr_time}>4 мая 1990, 00:00</div>
                                </div>
                                <div className={styles.oneComment__descr}>
                                    Хорошее мероприятие, специалист знает свое дело
                                </div>
                            </div>
                        </div>
                        <div className={styles.oneComment__container}>
                            <div className={styles.oneComment__img}><img alt='avatar' src={newAvatar}></img></div>
                            <div className={styles.oneComment__descr_container}>
                                <div className={styles.oneComment__descr_title_container}>
                                    <div className={styles.oneComment__descr_title}><span className={styles.yellowSpan}>Д</span>митрий Кирсанов</div>
                                    <div className={styles.oneComment__descr_time}>4 мая 1990, 00:00</div>
                                </div>
                                <div className={styles.oneComment__descr}>
                                    Хорошее мероприятие, специалист знает свое дело
                                </div>
                            </div>
                        </div>
                        <div className={styles.oneComment__container}>
                            <div className={styles.oneComment__img}><img alt='avatar' src={newAvatar}></img></div>
                            <div className={styles.oneComment__descr_container}>
                                <div className={styles.oneComment__descr_title_container}>
                                    <div className={styles.oneComment__descr_title}><span className={styles.yellowSpan}>Д</span>митрий Кирсанов</div>
                                    <div className={styles.oneComment__descr_time}>4 мая 1990, 00:00</div>
                                </div>
                                <div className={styles.oneComment__descr}>
                                    Хорошее мероприятие, специалист знает свое дело
                                </div>
                            </div>
                        </div>
                        <div className={styles.oneComment__container}>
                            <div className={styles.oneComment__img}><img alt='avatar' src={newAvatar}></img></div>
                            <div className={styles.oneComment__descr_container}>
                                <div className={styles.oneComment__descr_title_container}>
                                    <div className={styles.oneComment__descr_title}><span className={styles.yellowSpan}>Д</span>митрий Кирсанов</div>
                                    <div className={styles.oneComment__descr_time}>4 мая 1990, 00:00</div>
                                </div>
                                <div className={styles.oneComment__descr}>
                                    Хорошее мероприятие, специалист знает свое дело
                                </div>
                            </div>
                        </div>
                        <div className={styles.oneComment__container}>
                            <div className={styles.oneComment__img}><img alt='avatar' src={newAvatar}></img></div>
                            <div className={styles.oneComment__descr_container}>
                                <div className={styles.oneComment__descr_title_container}>
                                    <div className={styles.oneComment__descr_title}><span className={styles.yellowSpan}>Д</span>митрий Кирсанов</div>
                                    <div className={styles.oneComment__descr_time}>4 мая 1990, 00:00</div>
                                </div>
                                <div className={styles.oneComment__descr}>
                                    Хорошее мероприятие, специалист знает свое дело
                                </div>
                            </div>
                        </div>
                        <div className={styles.oneComment__container}>
                            <div className={styles.oneComment__img}><img alt='avatar' src={newAvatar}></img></div>
                            <div className={styles.oneComment__descr_container}>
                                <div className={styles.oneComment__descr_title_container}>
                                    <div className={styles.oneComment__descr_title}><span className={styles.yellowSpan}>Д</span>митрий Кирсанов</div>
                                    <div className={styles.oneComment__descr_time}>4 мая 1990, 00:00</div>
                                </div>
                                <div className={styles.oneComment__descr}>
                                    Хорошее мероприятие, специалист знает свое дело
                                </div>
                            </div>
                        </div>
                        <div className={styles.oneComment__container}>
                            <div className={styles.oneComment__img}><img alt='avatar' src={newAvatar}></img></div>
                            <div className={styles.oneComment__descr_container}>
                                <div className={styles.oneComment__descr_title_container}>
                                    <div className={styles.oneComment__descr_title}><span className={styles.yellowSpan}>Д</span>митрий Кирсанов</div>
                                    <div className={styles.oneComment__descr_time}>4 мая 1990, 00:00</div>
                                </div>
                                <div className={styles.oneComment__descr}>
                                    Хорошее мероприятие, специалист знает свое дело
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className={styles.someMeetings}>
            <div className={styles.someMeetings__title}>Еще мероприятия</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                <Grid item xs={6}  md={4} lg={3} >
                    <Card></Card>
                </Grid>
                <Grid item xs={6}  md={4} lg={3} >
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={4} lg={3} >
                    <Card></Card>
                </Grid>
                <Grid item xs={6}  md={4} lg={3} >
                    <Card></Card>
                </Grid>
                
                </Grid>
            </Box>
            </section>
            <div>
     
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <div className={styles.modal__title}>Вопросы</div>
                        <div onClick={handleClose} className={styles.modal__close}><div className={styles.modal__close_img}>+</div></div>
                        <div className={styles.modal__line}></div>
                        <div className={styles.modal__question_number}>Всего  <span>1</span></div>
                        <div className={styles.modal__question_container}>
                            <div className={styles.modal__question_containerSecond}>
                                <div className={styles.modal__question_user}>
                                    <div className={styles.modal__question_user_img_container}><img src={newAvatar} alt='avatar' className={styles.modal__question_user_img}></img> Дмитрий Кирсанов</div>
                                    <div className={styles.modal__question_user_descr}>Задача организации, в особенности же начало повседневной работы по формированию позиции обеспечивает актуальность приоретизации разума над эмоциями. </div>
                                    <div className={styles.modal__question_time_container}>
                                        <div className={styles.modal__question_time}>4 мая 1990, 00:00</div>
                                        <div className={styles.modal__question_like_container}><img src={like} alt='like' className={styles.modal__question_like_container}></img> <span className={styles.modal__question_like}>0</span></div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={styles.modal__question_containerThird}>
                                <div className={styles.modal__question_user_img_container}><img src={newAvatar} alt='avatar' className={styles.modal__question_user_img}></img> Дмитрий Кирсанов</div>
                                <textarea placeholder="Дмитрий Кирканов" className={styles.modal__question_input}></textarea>
                                <div className={styles.modal__question_button_container}>
                                    <button className={styles.modal__question_button + ' ' + styles.yellow}>Задать вопрос</button>
                                    <button className={styles.modal__question_button + ' ' + styles.gray}>Отменить</button>
                                </div>
                            </div>
                        </div>
                        </Box>
                    </Modal>
                    </div>
        </>
        
    )


}
export default MeetPage;