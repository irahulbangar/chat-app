import React, { useContext, useEffect, useState } from "react";
import "./RightSidebar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";
import { AppContext } from "../../context/AppContext";

const RightSidebar = () => {
  const { chatUser, messages } = useContext(AppContext);
  const [messageImages, setMessagesImages] = useState([
    assets.pic1,
    assets.pic2,
    assets.pic3,
    assets.pic4,
    assets.pic1,
    assets.pic2,
  ]);

  useEffect(() => {
    let tempVar = [];
    messages.map((msg) => {
      if (msg.image) {
        tempVar.push(msg.image);
      }
    });
    // setMessagesImages(tempVar);
  }, [messages]);

  return chatUser ? (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          {chatUser.userData.name}{" "}
          {Date.now() - chatUser.userData.lastSeen <= 70000 ? (
            <img src={assets.green_dot} alt="grren-dot" className="dot" />
          ) : null}
        </h3>
        <p>{chatUser.userData.bio}</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          {messageImages.map((url, index) => (
            <img
              onClick={() => window.open(url)}
              src={url}
              key={index}
              alt=""
            />
          ))}
          {/* <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" /> */}
        </div>
      </div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  ) : (
    <div className="rs">
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default RightSidebar;
