import Header from "../Header";
import styles from "./style.module.scss"
import Calendar from "../Calendar";
import avatar from '../../img/profilePage/avatar.png';
import gift from '../../img/profilePage/gift.png';
import Users from "../post/Users";
import EditMeetsForm from "../edit/EditMeetsForm";
import PostForm from "../post/Meets";
// import Home from '../Home/Home';
const ProfilePage = () => {

    return (
        <>
            <Header></Header>
            <section className={styles.profile__container}>
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
                            <img src={gift} className={styles.profile__user_progress_img}></img>
                        </div>
                    </div>
                </div>
                <div className={styles.calendar__container}>
                    <Calendar></Calendar>
                </div>
            </section>
            <section className={styles.myMeets}>
                <div className={styles.myMeets__title}>Ваши мероприятия</div>
                <div className={styles.meeting__container}>
                    <input className={styles.meeting__inputs} placeholder="Найти мероприятие"></input>
                    <div className={styles.container}>
                        <div className={styles.select__container}>
                            <select className={styles.select} name="time__meeting">
                                <option value="">Время мироприятия</option>
                            </select>
                            <select className={styles.select} name="type__meeting">
                                <option value="">Тип мероприятия</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.NewContainer}>
                        <div className={styles.search_container}>
                            <div className={styles.search__descr}>100 мероприятий</div>
                            <select className={styles.select} name="type__meeting">
                                <option value="">Тип мероприятия</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.cards__container}>
                        <div className={styles.card}></div>
                    </div>
                    {/* <Home></Home> */}
                    {/* <FetchUtils></FetchUtils> */}
                    {/* <PostForm /> */}
                    {/* <EditForm /> */}
                    <Users></Users>
                    <PostForm></PostForm>
                </div>
            </section>
        </>
        


    )


}
export default ProfilePage;