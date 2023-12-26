import styles from './style.module.scss';
import { useState } from 'react';
import avatar from '../../img/profilePage/avatar.png';
import Header from '../Header';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import del from '../../img/AddUsers/delete.png';
import perm from '../../img/AddUsers/permission.png';
import newAvatar from '../../img/AddUsers/newAvatar.png';
import Users from '../post/Users';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "46%",
    height: "60vh",
    bgcolor: 'background.paper',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
  };
const AddUsers = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Header></Header>


            <section className={styles.addUsers__container}>
                <input className={styles.addUsers__search} type='text' placeholder='Найти мероприятие'></input>
                <div className={styles.select__container}>
                    <select className={styles.select} name="time__meeting">
                        <option value="">роль пользователя</option>
                    </select>

                </div>
                <div className={styles.addUser__container}>
                    <div className={styles.addUser__cards_container}>
                        <div className={styles.addUser__card_container}>
                            <div onClick={handleOpen} className={styles.round}>+</div>
                            <div className={styles.addUser__card_text}>Добавить пользователя</div>
                        </div>
                        <div className={styles.profile__user_container}>
                            <div className={styles.profile__user_img_container}>
                                <img src={avatar} className={styles.profile__user_img}></img>
                                <div className={styles.profile__user_role}>Участник</div>
                            </div>
                            <div className={styles.profile__user_info_container}>
                                <div className={styles.profile__user_fullName}><span>К</span>ирсанов Дмитрий </div>
                                <div className={styles.profile__user_spaciality}>Junior PHP разработчик</div>
                                <div className={styles.profile__user_socialMedia}>TG: @dkir</div>
                                <div className={styles.profile__user_email}>gmail@gmail.com</div>
                                <div className={styles.profile__user_progress_container}>
                                    <span>0</span>
                                    <span className={styles.profile__user_progress_line}></span>
                                    <span>1</span>

                                </div>
                                <div className={styles.delete_container}><img src={del} className={styles.delete_img}></img></div>
                                <div className={styles.feautures}>Отправлено</div>
                            </div>
                        </div>
                        <div className={styles.profile__user_container}>
                            <div className={styles.profile__user_img_container}>
                                <img src={avatar} className={styles.profile__user_img}></img>
                                <div className={styles.profile__user_role}>Участник</div>
                            </div>
                            <div className={styles.profile__user_info_container}>
                                <div className={styles.profile__user_fullName}><span>К</span>ирсанов Дмитрий </div>
                                <div className={styles.profile__user_spaciality}>Junior PHP разработчик</div>
                                <div className={styles.profile__user_socialMedia}>TG: @dkir</div>
                                <div className={styles.profile__user_email}>gmail@gmail.com</div>
                                <div className={styles.profile__user_progress_container}>
                                    <span>0</span>
                                    <span className={styles.profile__user_progress_line}></span>
                                    <span>1</span>

                                </div>
                                <div className={styles.delete_container}><img src={del} className={styles.delete_img}></img></div>
                                <div className={styles.permission_container}><img src={perm} className={styles.permission_img}></img></div>
                            </div>
                        </div>
                        <div className={styles.profile__user_container}>
                            <div className={styles.profile__user_img_container}>
                                <img src={avatar} className={styles.profile__user_img}></img>
                                <div className={styles.profile__user_role}>Участник</div>
                            </div>
                            <div className={styles.profile__user_info_container}>
                                <div className={styles.profile__user_fullName}><span>К</span>ирсанов Дмитрий </div>
                                <div className={styles.profile__user_spaciality}>Junior PHP разработчик</div>
                                <div className={styles.profile__user_socialMedia}>TG: @dkir</div>
                                <div className={styles.profile__user_email}>gmail@gmail.com</div>
                                <div className={styles.profile__user_progress_container}>
                                    <span>0</span>
                                    <span className={styles.profile__user_progress_line}></span>
                                    <span>1</span>

                                </div>
                                <div className={styles.delete_container}><img src={del} className={styles.delete_img}></img></div>
                                <div className={styles.permission_container}><img src={perm} className={styles.permission_img}></img></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div className={styles.addModal__title_container}>
                                <div className={styles.addModal__title}>Добавление пользователя</div>
                                <div onClick={handleClose} className={styles.addModal__close}><div className={styles.addModal__close_img}>+</div></div>
                            </div>
                            <div className={styles.addModal_user_container}>
                                <div className={styles.addModal_user_img_container}>
                                <form className={styles.addModal_form} method="post" encType="multipart/form-data">
                                    <div className={styles.input_file_row}>
                                        <label className={styles.input_file}>
                                            <input type="file" name="file[]" multiple accept="image/*"/>	
                                            <span><img src={newAvatar}></img></span>
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
                                    <input placeholder='TG' className={styles.addModal_user}></input>
                                    <div className={styles.modal__question_button_container}>
                                        <button className={styles.modal__question_button + ' ' + styles.yellow}>Добавить</button>
                                        <button className={styles.modal__question_button + ' ' + styles.gray}>Отменить</button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                    <Users></Users>
            </section>

        </>
        

    )
}
export default AddUsers;