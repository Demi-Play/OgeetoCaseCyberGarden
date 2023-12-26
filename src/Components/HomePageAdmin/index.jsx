import Header from "../Header";
import styles from "./style.module.scss";
import TableMeets from '../TableMeets/TableMeets'
// import Home from "../Home/Home";
// import FetchUtils from "../utils/FetchUtils";
// import EditForm from "../edit/EditForm";
// import PostForm from "../post/PostForm";
// import GetMeets from '../get/Meets';
import { useNavigate } from "react-router-dom";
import Users from "../post/Users";
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
    const navigate = useNavigate();
    const handleMeet = () => {
        navigate('/adminMeets');
    }
    return (
    <>

        <Header></Header>
        <section className={styles.muza__container}>
           <button onClick={handleMeet} className={styles.muza__container_button}>Создать мероприятие</button>
            
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
            <Users></Users>
            {/* <Home></Home> */}
            {/* <FetchUtils></FetchUtils> */}
            {/* <PostForm /> */}
            {/* <EditForm /> */}
        </section>
        


        
    </>
    

    )
}
export default HomePage;