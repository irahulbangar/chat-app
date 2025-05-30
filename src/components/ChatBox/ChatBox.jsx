import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="profile" />
        <p>
          Richard Sanford{" "}
          <img src={assets.green_dot} alt="grren-dot" className="dot" />
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <img src={assets.pic1} alt="" className="msg-img" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a message" />
        <input type="text" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="gallery-icon" />
        </label>
        <img src={assets.send_button} alt="send-icon" />
      </div>
    </div>
  );
};

export default ChatBox;
