import React from "react";
import { closeSendMessage } from "../features/mailSlice"; //redux 使用前需要引入此函式
import { useDispatch } from "react-redux"; // redux
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form"; // react-hook-form
import firebase from "firebase"; // for this module ==> timestamp: firebase.firestore.FieldValue.serverTimestamp()
import db from "../firebase"; //
const SendMail = () => {
  const { register, handleSubmit, errors } = useForm(); // react-hook-form
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    console.log("data");
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage()); // 當傳完資料，關掉表單
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })} // react-hook-form  # required 是否一定要填入值
        />
        {errors.to && <p className="sendMail__error">To is Required!</p>}
        {/* react-hook-form  # 顯示錯誤 error  # errors.to 指向 name = 'to'*/}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })} // react-hook-form
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required!</p>
        )}
        <input
          name="message"
          className="sendMail__message"
          placeholder="Message . . . "
          type="text"
          ref={register({ required: true })} // react-hook-form
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required!</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            type="submit"
            color="primary"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
