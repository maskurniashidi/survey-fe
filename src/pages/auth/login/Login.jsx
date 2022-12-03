import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import style from "./Login.module.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Radio, Select, Button, Space } from "antd";
import { FaUserAlt, FaStickyNote } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleClickLogin = () => {
    setLoading(true);
    var dataBody = new FormData();
    dataBody.append("email", data.email);
    dataBody.append("password", data.password);

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/auth/login",
      data: dataBody,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setLoading(false);
        toast.success("Login Berhasil", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        toast.error("Login gagal", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <Navbar type="auth" />
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
            <h2 className={style.rightTitle}>Masuk</h2>
            <div className={style.rightFormGroup}>
              <label className={style.labelRight} htmlFor="email">
                Email
              </label>
              <Input type="email" className={style.rightInput} placeholder="input your email" name="email" value={data.email} onChange={handleChange} />
            </div>
            <div className={style.rightFormGroup}>
              <label className={style.labelRight} htmlFor="password">
                Password
              </label>
              <Input.Password className={style.rightInput} placeholder="input your password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} name="password" value={data.password} onChange={handleChange} />
            </div>

            <p>
              Belum punya akun ?{" "}
              <Link className={style.linkToLogin} to={"/register"}>
                Daftar
              </Link>{" "}
            </p>

            {loading ? (
              <button className={style.btnRegis}>Loading...</button>
            ) : (
              <button className={style.btnRegis} onClick={handleClickLogin}>
                Masuk
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
