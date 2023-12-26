/* eslint-disable no-unused-vars */
import axios from "axios"
import { useState } from "react"
import './style.css'
import { Cookie } from "@mui/icons-material"



export class HttpApiMethods {

  token;
  HttpApiMethods()
  {
    token = Cookie,get('token')
  }
  // URL`s
  user_id = '17e5fc7a-8f22-4c0b-8b33-5dc3a6937561'
  APIURL = "https://cyberbloom.zetcraft.ru/api"
  APIURL_FILES = "https://cyberbloom.zetcraft.ru/api/cyber-boom-files/"
  // получение мероприятий по ID
  GetByID = async (id) => {

    let innerUrl = this.APIURL + `/meetings?id=${id}`

    const response = await axios.get(innerUrl)

    return response.data;
  }



  // 
  //  Получение всех мероприятий
  // 
  GetMeetings = async () => {
    let innerUrl = this.APIURL + `/meetings/list?offset=0&limit=20`;

    const response = await axios.get(innerUrl);

    return response.data;
  }
  // Создание мероприятия
  AddMeetings = async (data) => {
    let innerUrl = this.APIURL + `/meetings`;

    let response = await axios.postForm(innerUrl, data); //
    return response.data;

  }
  // Редактирование уже существующего мероприятия
  EditMeetings = async (data) => {
    let innerUrl = this.APIURL + `/meetings`;
    let response = await axios.putForm(innerUrl, data); //
    return response.data;
  }

  // Удалить мероприятие, пока что не реализовано
  DeleteMeetings = async (id) => {
    let innerUrl = this.APIURL + `/meetings?id=${id}`

    const response = await axios.get(innerUrl) //

    return response.data;
  }



  // 
  // Users
  // 
  PostUsers = async (data) => {
    let innerUrl = this.APIURL + `/users`
    const responce = await axios.postForm(innerUrl, data)
    return responce.data
  }
  PostUsersModerator = async (data) => {
    let innerUrl = this.APIURL + `/users/moderator`
    const responce = await axios.postForm(innerUrl, data, { headers: {"Authorization" : `Bearer ${token}`} })
    return responce.data.id
  }
  EditUsers = async (data) => {
    let innerUrl = this.APIURL + `/users`
    const responce = await axios.putForm(innerUrl, data, { headers: {"Authorization" : `Bearer ${token}`} }) // 
    return responce.data.id
  }
  GetUsers = async (id) => {
    let innerUrl = this.APIURL + `/users?id=${id}`

    const responce = await axios.get(innerUrl) //

    return responce.data
  }
  GetUsersStats = async (id) => {
    let innerUrl = this.APIURL + `/users/stats?id=${id}`

    const responce = await axios.get(innerUrl) //

    return responce.data
  }



  // 
  // Questions
  // 
  GetByIDQuestions = async (id) => {

    let innerUrl = this.APIURL + `/questions?id=${id}`

    const response = await axios.get(innerUrl)

    return response.data;
  }
  //  Получение всех мероприятий
  GetQuestions = async () => {
    let innerUrl = this.APIURL + `/questions/list?offset=0&limit=20`;

    const response = await axios.get(innerUrl);

    return response.data;
  }
  // Создание мероприятия
  PostQuestions = async (data) => {
    let innerUrl = this.APIURL + `/questions`;

    let response = await axios.post(innerUrl, data, { headers: {"Authorization" : `Bearer ${token}`} }); //
    return response.data;

  }
  // Редактирование уже существующего мероприятия
  EditQuestions = async (data) => {
    let innerUrl = this.APIURL + `/questions`;
    let response = await axios.put(innerUrl, data, { headers: {"Authorization" : `Bearer ${token}`} }); //
    return response.data;
  }


  // 
  // Reactions
  //
  GetByIDReactions = async (id) => {

    let innerUrl = this.APIURL + `/reactions?id=${id}`

    const response = await axios.get(innerUrl)

    return response.data;
  }
  //  Получение всех мероприятий
  GetReactions = async () => {
    let innerUrl = this.APIURL + `/reactions/list?offset=0&limit=20`;

    const response = await axios.get(innerUrl);

    return response.data;
  }
  // Создание мероприятия
  PostReactions = async (data) => {
    let innerUrl = this.APIURL + `/reactions`;

    let response = await axios.post(innerUrl, data, { headers: {"Authorization" : `Bearer ${token}`} }); //
    return response.data;

  }
  // Редактирование уже существующего мероприятия
  DeleteReactions = async (id) => {
    let innerUrl = this.APIURL + `/reactions?id=${id}`;
    let response = await axios.delete(innerUrl, data, { headers: {"Authorization" : `Bearer ${token}`} }); //
    return response.data;
  }

  // 
  // Reviews
  //
  GetByIDReviews = async (id) => {

    let innerUrl = this.APIURL + `/reviews?id=${id}`

    const response = await axios.get(innerUrl)

    return response.data;
  }
  GetReviews = async () => {
    let innerUrl = this.APIURL + `/reviews/list?offset=0&limit=20`;

    const response = await axios.get(innerUrl);

    return response.data;
  }
  // Создание мероприятия
  PostReviews = async (data) => {
    let innerUrl = this.APIURL + `/reviews`;

    let response = await axios.post(innerUrl, data, { headers: {"Authorization" : `Bearer ${token}`} }); //
    return response.data;

  }
  // Редактирование уже существующего мероприятия
  EditReviews = async (data) => {
    let innerUrl = this.APIURL + `/reviews`;
    let response = await axios.put(innerUrl, data, { headers: {"Authorization" : `Bearer ${token}`} }); //
    return response.data;
  }
}





const FetchUtils = async () => {
  const httpApiMethods = new HttpApiMethods() // Создание экземпляра класса HttpApiMethods

  const meets = await httpApiMethods.GetMeetings()
  const [user, setUser] = useState([])

  // async function getData() {
    // const response = await axios.get()
    // console.log(response.data)
    // setUser(response.data)
  // }

  const removeList = () => {
    setUser([])
  }

  return (
    <>
      <button onClick={getData}>Click to Get Data</button>
      <button onClick={removeList}>Click to Remove Data Listing</button>
      {/* Mapping of data */}
      <div>
        {Array.isArray(meets) ? (
          <ul>
            {meets.map((item) => (
              <ol key={item.id}>
                <li>{item.title}</li>
                <li>{item.time}</li>
                <li>{item.speakerName}</li>
                <li>{item.speackerImage}</li>
                <li>{item.splecializations}</li>
                <li>{item.type}</li>
                <li>{item.speakerTelephone}</li>
                <li>{item.speakerEmail}</li>
                <li>{item.tags}</li>
                <li>{item.videoUrl}</li>
              </ol>
            ))}
          </ul>
        ) : (
          <p>Bad data type from server!</p>
        )}
      </div>
    </>
  );
}
export default FetchUtils;