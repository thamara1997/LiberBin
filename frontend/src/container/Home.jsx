import React,{useState, useRef, useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {client, Client} from "../client";
import Pin from "./Pin";
import { userQuery } from '../utils/data';
import { fetchUser } from '../utils/fetchUser';


const Home = () => {
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);
  // getting user info
  //const userInfo = localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")): localStorage.clear();

  const userInfo = fetchUser()

  useEffect(() => {
    const query = userQuery(userInfo?.uid);
    client.fetch(query)
    .then((data)=>{
      setUser(data[0]);
      
    });
  },[]);

  useEffect(() => {
    scrollRef.current.scrollTo(0,0);

  },[]);
  
  return <div className = "flex flex-col h-full transition-height duration-75 ease-out">
    <div
      className="pb-2 flex-1 h-screen overflow-y-scroll hide_scrollbar"
      ref={scrollRef}
    >
      <Routes>
        <Route path = '/*' element = {<Pin user = {user }/> }>

        </Route>
      </Routes>

    </div>
  </div>
};

export default Home;