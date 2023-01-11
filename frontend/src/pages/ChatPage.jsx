import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import ChatArea from "../components/ChatArea";
import Header from "../components/Header";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export const ChatPage = () => {
  const { user, profileid, Setprofileid,authTokens } = useContext(AuthContext);

  const initialState = profileid ? profileid : null;
  const [receiverId, setReceiverId] = useState(initialState);
  const [ChatList, SetChatList] = useState([]);
  const [messages,setMessages] = useState([])
  

  const socket = new WebSocket(
    "ws://127.0.0.1:8000/ws/" + user.user_id + "/" + receiverId + "/"
  );

  socket.onopen = function (e) {
    console.log("Connection Established");
  };

  socket.onclose = function (e) {
    console.log("Connection lost");
  };

  socket.onerror = function (e) {
    console.log("Error", e);
  };

  socket.onmessage = function (e) {
    console.log(e)
    const data = JSON.parse(e.data)
    if (data) {
        chatdata(receiverId)
        user_chatlist()
    }

  };

  const user_chatlist = () => {
    axios.post("/chat/chatlist/",{
        'userid' : user.user_id,
    }).then((res) => {
      SetChatList(res.data);
    });
  };

  const messagetoserver = (message,recieverId) =>{

    socket.send(JSON.stringify({
        'message': message ,
        'senderId' : user.user_id,
        'recieverId' : recieverId
    }))
    chatdata(recieverId)
  }

  const chatdata = (receiverId) =>{
    axios.post("/chat/chatdata/",{
        'userId':user.user_id,
        'recieverId' : receiverId
    }).then((res)=>{
        setMessages(res.data)
    })

  }




  useEffect(() => {
  
    user_chatlist()
    if (profileid) {
        chatdata(profileid)
    }

    return () => {
      Setprofileid(null);
    };
  }, [receiverId]);

  return (
    <div>
      <Header />
      <div className="margin-top-70"></div>
      <div className="dashboard-container">
        <div className="dashboard-content-container" data-simplebar>
          <div className="dashboard-content-inner">
            <div className="messages-container margin-top-0">
              <div className="messages-container-inner" style={{ height: '80vh' }}>
                <div className="messages-inbox">
                  <div className="messages-headline">
                    <div className="input-with-icon">
                     <h4>Chat</h4>
                    </div>
                  </div>

                  <ul>
                    {ChatList.length !=0 ? ChatList?.map((x) => {
                        return(

                    <li>
                      <Link  onClick={()=> {
                        setReceiverId(x.id)
                        chatdata(x.id)
                    }}>
                        <div className="message-avatar">
                          <i className="status-icon status-online"></i>
                          <img src="images/user-avatar-small-03.jpg" alt="" />
                        </div>

                        <div className="message-by">
                          <div className="message-by-headline">
                            <h5>{x.username}</h5>
                            <span>4 hours ago</span>
                          </div>
                          <p>
                            Thanks for reaching out. I'm quite busy right now on
                            many
                          </p>
                        </div>
                      </Link>
                    </li>

                        )
                    }):
                    <div className="message-content-inner">
                        <div className="message-time-sign">
                         <strong> <span>No Chat</span> </strong>
                      </div>
                      </div>
                    
                    
                    }
                    
                  </ul>
                </div>

                <ChatArea messages={messages} recieverId={receiverId} messagetoserver={messagetoserver}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
