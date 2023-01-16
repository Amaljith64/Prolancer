import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import ChatArea from "../components/ChatArea";
import Header from "../components/Header";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export const ChatPage = () => {
  const { user, profileid, Setprofileid } = useContext(AuthContext);

  const [receiverId, setReceiverId] = useState(profileid || null);
  const [chatList, setChatList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [selectedUser, setselectedUser] = useState(null)

  useEffect(() => {
    if (receiverId) {
      const newSocket = new WebSocket(
        `ws://127.0.0.1:8000/ws/${user.user_id}/${receiverId}/`
      );

      setSocket(newSocket);

      newSocket.onopen = () => {
        console.log("Connection Established");
      };

      newSocket.onclose = () => {
        console.log("Connection lost");
      };

      newSocket.onerror = (e) => {
        console.log("Error", e);
      };

      newSocket.onmessage = (e) => {
        console.log(e);
        const data = JSON.parse(e.data);
        if (data) {
          getChatList();
          getChatData(receiverId);
        }
      };
    }
  }, [receiverId]);

  useEffect(() => {
    getChatList();
    if (profileid) {
        getChatData(profileid);
    }

    return () => {
      Setprofileid(null);
      if (socket) {
        socket.close();
      }
    };
  }, []);


  const getChatList = () => {
    axios
      .post("/chat/chatlist/", {
        userid: user.user_id,
      })
      .then((res) => {
        setChatList(res.data);
      });
  };

  const sendMessageToServer = (message, recieverId) => {
    socket.send(
      JSON.stringify({
        message,
        senderId: user.user_id,
        recieverId,
      })
    );
    getChatList();
    getChatData(recieverId);
  };

  const getChatData = (receiverId) => {
    axios
      .post("/chat/chatdata/", {
        userId: user.user_id,
        recieverId : receiverId,
      })
      .then((res) => {
        setMessages(res.data);
      });
  };


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
                    {chatList.length !== 0 ? (
                      chatList.map((x) => (
                        <li key={x.id}>
                          <Link
                            onClick={() => {
                              setReceiverId(x.id);
                              getChatData(x.id);
                              setselectedUser(x.username);
                            }}
                          >
                            <div className="message-avatar">
                              <i className="status-icon status-online"></i>
                              <img src="images/user-avatar-small-03.jpg" alt="" />
                            </div>

                            <div className="message-by">
                              <div className="message-by-headline">
                                <h5>{x.username}</h5>
                                <span>4 hours ago</span>
                              </div>
                              <p>Thanks for reaching out. I'm...</p>
                            </div>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>No chats found.</li>
                    )}
                  </ul>
                </div>
                <ChatArea
                  messages={messages}
                  selectedUser={selectedUser}
                  sendMessage={(message) => sendMessageToServer(message, receiverId)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};