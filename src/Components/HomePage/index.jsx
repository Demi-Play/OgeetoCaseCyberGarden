import Header from "../Header";
import styles from "./style.module.scss";
// import TableMeets from '../TableMeets/TableMeets'
// import EditForm from "../edit/EditMeetsForm";
// import PostForm from "../post/Meets";
// import Users from "../post/Users";
// import User from "../get/User";
// import Questions from "../post/Questions";
// import { GetQuestions } from "../get/Questions";


import muza from '../../img/homePage/muza.png';
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";
const APIURL = ''

// const events = [
//     {
//       id: 1,
//       date: '10.10.2022',
//       time: '14:00',
//       title: 'Мероприятие 1',
//       speaker: 'Спикер 1',
//       avatar: 'speaker1.jpg',
//       description: 'Описание мероприятия 1',
//       isExpanded: true,
//     },
//     {
//       id: 2,
//       date: '11.10.2022',
//       time: '15:30',
//       title: 'Мероприятие 2',
//       speaker: 'Спикер 2',
//       avatar: 'speaker2.jpg',
//       description: 'Описание мероприятия 2',
//       isExpanded: true,
//     },
//     // Добавьте другие мероприятия сюда
//   ];
const HomePage = () => {
    
    return (
    <>

        <Header></Header>
        <div className={styles.muza_img_container}><img src={muza} alt='muza' className={styles.muza_img}></img></div>
        <section className={styles.muza__container}>
            
            <div className={styles.muza__title}>МУЗА</div>
            <div className={styles.muza__descr_container}>
                <div className={styles.muza__descr}>Платформа для проведения well-being мероприятий</div>
            </div>
            
        </section>
        <section className={styles.meeting__container}>
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
            {/* <Questions></Questions> */}
            <Home></Home>
            
            
            {/* <Users></Users> */}
            
            {/* <GetQuestions></GetQuestions> */}
            {/* <Users></Users> */}

        </section>
        


        
    </>
    

    )
}
export default HomePage;