import React, { useContext, useRef, useEffect } from "react";
import { useState } from "react";
import AuthContext from "../context/AuthContext";

const ChatArea = ({ recieverId, sendMessage, messages,selectedUser }) => {

  console.log(messages,'its messssssssssssssssssssss')

  const { user, profileid, Setprofileid, authTokens } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const scrollRef = useRef();

  const sentMessage = (message, recieverId) => {
    if(!message) return;
    sendMessage(message, recieverId);
    setMessage("");
  };

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="message-content">
        <div className="messages-headline">
        {selectedUser ? 
          <h4>{selectedUser}</h4>
          :
          <h4>No User</h4>
        }
        </div>

        <div className="message-content-inner">
          
          {messages?.length !== 1 ? (
            <>
              {messages
                ?.filter((e) => e.message != null)
                .map((message) => {
                  return (
                    <div ref={scrollRef} >
                      {message?.sender?.id === user.user_id ? (
                        <>
                          <div className="message-bubble me">
                            <div className="message-bubble-inner">
                              <div className="message-avatar">
                                <img
                                  src="images/user-avatar-small-01.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="message-text">
                                <p>{message.message}</p>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="message-bubble">
                            <div className="message-bubble-inner">
                              <div className="message-avatar">
                                <img
                                  src="images/user-avatar-small-02.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="message-text">
                                <p>{message.message}</p>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
            </>
          ) : (
            <h3>No messages</h3>
          )}
        </div>

        <div className="message-reply">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            cols="1"
            rows="1"
            placeholder="Your Message"
            data-autoresize
          ></textarea>

          <button
            onClick={() => sentMessage(message, recieverId)}
            type="submit"
            className="button ripple-effect"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
