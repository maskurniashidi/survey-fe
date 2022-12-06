import React from "react";
import Navbar from "../../components/Navbar";
import style from "./Profile.module.css";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, Avatar } from "antd";
function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const changeUser = () => {};
  return (
    <div className={style.wrapper}>
      <Navbar type={"tester"} />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.info}>
            <h2 className={style.infoHasilTitle}>Profile</h2>
            <div className={style.imgUser}>
              <div className={style.imgContainer}>
                <img src={user.profileImage} className={style.imgProfile} alt="" />
              </div>
              <Button
                size="small"
                style={{
                  margin: "0 16px",
                  verticalAlign: "middle",
                }}
                onClick={changeUser}
              >
                Change Image
              </Button>
            </div>
            <div className={style.forGroup}>
              <div className={style.formField}>
                <label>Nama</label>
                <Input placeholder="input placeholder" value={user.name} />
              </div>
              <div className={style.formField}>
                <label>Email</label>
                <Input placeholder="input placeholder" value={user.email} />
              </div>
              <div className={style.formField}>
                <label>No Telepon</label>
                <Input placeholder="input placeholder" value={user.phone_number} />
              </div>
              <div className={style.formField}>
                <label>Dibuat pada</label>
                <Input placeholder="input placeholder" value={user.created_at.slice(0, 10)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
