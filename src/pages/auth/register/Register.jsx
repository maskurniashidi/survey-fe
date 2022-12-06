import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import style from "./Register.module.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Radio, Select, Button, Space } from "antd";
import { FaUserAlt, FaStickyNote } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
function Register() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(3);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [role, setRole] = useState("1");
  const navigate = useNavigate();

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeRole = (e) => {
    setRole(e);
  };

  // register
  const handleClickRegister = () => {
    setLoading(true);
    var dataBody = new FormData();
    dataBody.append("name", data.name);
    dataBody.append("email", data.email);
    dataBody.append("password", data.password);
    dataBody.append("password_confirmation", data.password);
    dataBody.append("phone_number", `62${data.phoneNumber}`);
    dataBody.append("gender", value);
    dataBody.append("role_id", role);
    dataBody.append("status", "verified");

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/auth/register",
      data: dataBody,
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        toast.success("Registrasi Berhasil", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      })
      .catch(function (error) {
        toast.error("Registrasi gagal", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      });
  };

  return (
    <div className={style.wrapper}>
      <Navbar type="auth" />
      {/* modal */}
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className={style.container}>
        <div className={style.content}>
          {/* left */}
          <div className={style.leftContent}>
            <div className={style.leftMain}>
              <div className={style.leftInfo}>
                <FaUserAlt className={style.infoIconTitle} />
                <p className={style.infoTextTitle}>Kuisionerin</p>
              </div>
              <div className={style.leftInfo}>
                <FaStickyNote className={style.infoIcon} />
                <p className={style.infoText}>Buat pertanyaan sesuai dengan template</p>
              </div>
              <div className={style.leftInfo}>
                <FaStickyNote className={style.infoIcon} />
                <p className={style.infoText}>Ubah template pertanyaan sesuai keinginan Anda</p>
              </div>
              <div className={style.leftInfo}>
                <FaStickyNote className={style.infoIcon} />
                <p className={style.infoText}>Dapatkan hasil kuisioner dengan tepat</p>
              </div>
            </div>
          </div>
          {/* end left */}

          {/* right */}
          <div className={style.rightContent}>
            <h2 className={style.rightTitle}>Daftar</h2>
            <div className={style.rightFormGroup}>
              <label className={style.labelRight} htmlFor="name">
                Nama
              </label>
              <Input type="text" className={style.rightInput} placeholder="input your name" name="name" onChange={handleChangeData} value={data.name} />
            </div>
            <div className={style.rightFormGroup}>
              <label className={style.labelRight} htmlFor="email">
                Email
              </label>
              <Input type="email" className={style.rightInput} placeholder="input your email" name="email" onChange={handleChangeData} value={data.email} />
            </div>
            <div className={style.rightFormGroup}>
              <label className={style.labelRight} htmlFor="phoneNumber">
                No Telepon
              </label>
              <Input type="number" className={style.rightInput} prefix={"+62"} name="phoneNumber" onChange={handleChangeData} value={data.phoneNumber} />
            </div>
            <div className={style.rightFormGroup}>
              <label className={style.labelRight} htmlFor="role">
                Role
              </label>
              <Select
                className={style.rightInput}
                onChange={handleChangeRole}
                options={[
                  {
                    value: "3",
                    label: "Responden",
                  },
                  {
                    value: "2",
                    label: "Tester",
                  },
                ]}
              />
            </div>
            <div className={style.rightFormGroup}>
              <label className={style.labelRight} htmlFor="gender">
                Jenis Kelamin
              </label>
              <Radio.Group className={style.rightInput} onChange={onChange} value={value}>
                <Radio value={"L"}>Laki-laki</Radio>
                <Radio value={"P"}>Perempuan</Radio>
              </Radio.Group>
            </div>

            <div className={style.rightFormGroup}>
              <label className={style.labelRight} htmlFor="password">
                Password
              </label>
              <Input.Password className={style.rightInput} placeholder="input password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} name="password" onChange={handleChangeData} value={data.password} />
            </div>

            <p>
              Sudah punya akun ?{" "}
              <Link className={style.linkToLogin} to={"/login"}>
                Masuk
              </Link>{" "}
            </p>

            {loading ? (
              <button className={style.btnRegis}>Loading...</button>
            ) : (
              <button onClick={handleClickRegister} className={style.btnRegis}>
                Daftar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
