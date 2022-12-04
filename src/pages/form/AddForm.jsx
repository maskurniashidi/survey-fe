import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./styles/AddForm.module.css";
import Navbar from "../../components/Navbar";
import { DatePicker, Space, Input } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ToastContainer, toast } from "react-toastify";
const { TextArea } = Input;
dayjs.extend(customParseFormat);
function AddForm() {
  const [data, setData] = useState({
    appsName: "",
    appsDescription: "",
    appsLink: "",
    maxTotalRespondent: "",
  });
  const [maxDate, setMaxDate] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.id;

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDate = (e) => {
    setMaxDate(`${e.$y}-${e.$M + 1}-${e.$D}`);
  };

  const addForm = () => {
    if (data.maxTotalRespondent < 10) {
      toast.error("Pastikan maksimal responden minimal 10", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      var dataBody = new FormData();
      dataBody.append("appsName", data.appsName);
      dataBody.append("appsDescription", data.appsDescription);
      dataBody.append("appsLink", data.appsLink);
      dataBody.append("maxTotalRespondent", data.maxTotalRespondent);
      dataBody.append("maxDate", maxDate);
      dataBody.append("totalRespondent", data.maxTotalRespondent);
      dataBody.append("user_id", user_id);

      var config = {
        method: "post",
        url: "https://api-dev.maskurdev.site/public/api/v1/survey",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: dataBody,
      };

      axios(config)
        .then(function (response) {
          toast.success("Buat form berhasil", {
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
            navigate("/form");
          }, 1500);
        })
        .catch(function (error) {
          console.log(error);
          toast.error("Buat form gagal, pastikan semua terisi", {
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
    }
  };

  return (
    <div className={style.wrapper}>
      <Navbar type="tester" />
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Buat Pertanyaan</h2>
          <div className={style.formGroup}>
            <div className={style.leftGroup}>
              <div className={style.formField}>
                <label className={style.labelForm} htmlFor="name">
                  Nama aplikasi/survey
                </label>
                <Input type="text" name="appsName" value={data.appsName} onChange={handleChange} />
              </div>
              <div className={style.formField}>
                <label className={style.labelForm} htmlFor="name">
                  Link Aplikasi
                </label>
                <Input type="text" name="appsLink" value={data.appsLink} onChange={handleChange} />
              </div>
              <div className={style.formField}>
                <label className={style.labelForm} htmlFor="name">
                  Deskripsi
                </label>
                <TextArea
                  name="appsDescription"
                  value={data.appsDescription}
                  onChange={handleChange}
                  showCount
                  maxLength={100}
                  style={{
                    height: 120,
                    resize: "none",
                  }}
                />
              </div>
            </div>
            <div className={style.rightGroup}>
              <div className={style.formField}>
                <label className={style.labelForm} htmlFor="name">
                  Jumlah Responden
                </label>
                <Input type="number" name="maxTotalRespondent" value={data.maxTotalRespondent} onChange={handleChange} />
              </div>
              <div className={style.formField}>
                <label className={style.labelForm} htmlFor="name">
                  Batas Pengisian
                </label>
                <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} name="maxDate" onChange={handleChangeDate} />
              </div>
            </div>
          </div>
          <button onClick={addForm} className={style.btnAdd}>
            Buat Survey
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
