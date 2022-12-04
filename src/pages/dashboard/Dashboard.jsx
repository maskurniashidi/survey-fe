import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Dashboard.module.css";
import Navbar from "../../components/Navbar";

import { BsCheckCircle } from "react-icons/bs";
import { Skeleton } from "antd";
function Dashboard() {
  const [sumTesterRun, setSumTesterRun] = useState(0);
  const [sumTesterEnd, setSumTesterEnd] = useState(0);
  const [sumResRun, setSumResRun] = useState(0);
  const [sumResEnd, setSumResEnd] = useState(0);
  const [loading, setLoading] = useState(true);
  const [checkData, setCheckData] = useState("not null");
  const [data, setData] = useState([]);
  const [dataFinish, setDataFinish] = useState([]);
  const navigate = useNavigate();
  const [dataResp, setDataResp] = useState([]);
  const [dataRespFinish, setDataRespFinish] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role_id;

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api-dev.maskurdev.site/public/api/v1/survey",
    };

    axios(config)
      .then(function (response) {
        if (user.role_id == 2) {
          let dataSumFilter = response.data.data.filter((item) => item.user_id == user.id && item.totalRespondent != 0);
          let dataFinishSumFilter = response.data.data.filter((item) => item.user_id == user.id && item.totalRespondent == 0);
          setData(dataSumFilter);
          setDataFinish(dataFinishSumFilter);
          if (dataSumFilter.length === 0) {
            setCheckData("null");
          }
          setSumTesterEnd(dataFinishSumFilter.length);
          setSumTesterRun(dataSumFilter.length);
        } else {
          let tempResp = [];
          let tempFinishResp = [];
          for (let i = 0; i < response.data.data.length; i++) {
            let checkData = response.data.data[i];
            let myArray = checkData.result;
            if (myArray.find((x) => x.user_id == user.id) == undefined && [checkData].filter((item) => item.totalRespondent != 0).length != 0) {
              tempResp.push(checkData);
              setDataResp(tempResp);
              setSumResRun(tempResp.length);
            } else if (myArray.find((x) => x.user_id == user.id) != undefined || [checkData].filter((item) => item.totalRespondent != 0).length == 0) {
              tempFinishResp.push(checkData);
              setDataRespFinish(tempFinishResp);
              setSumResEnd(tempFinishResp.length);
            }
          }
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className={style.wrapper}>
      <Navbar type="tester" />
      {loading ? (
        <Skeleton />
      ) : (
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.infoTop}>
              <h2 className={style.infoTopTitle}>Selamat Datang di Kuisionerin</h2>
              <p className={style.infoTopDesc}>Mulai pengamalan testing dengan mudah dan tepat</p>
            </div>
            {user.role_id == 2 && (
              <div className={style.cardBox}>
                <Link to="/form" className={style.card}>
                  <div className={style.topCard}>
                    <BsCheckCircle className={style.icon} />
                    <h4 className={style.topCardInfo}>Kuisioner Selesai</h4>
                  </div>
                  <p className={style.topCardSum}>{sumTesterEnd}</p>
                </Link>
                <Link to="/form" className={style.card}>
                  <div className={style.topCard}>
                    <BsCheckCircle className={style.icon} />
                    <h4 className={style.topCardInfo}>Kuisioner Berjalan</h4>
                  </div>
                  <p className={style.topCardSum}>{sumTesterRun}</p>
                </Link>
              </div>
            )}

            {user.role_id == 3 && (
              <div className={style.cardBox}>
                <Link to="/form" className={style.card}>
                  <div className={style.topCard}>
                    <BsCheckCircle className={style.icon} />
                    <h4 className={style.topCardInfo}>List Kuisioner</h4>
                  </div>
                  <p className={style.topCardSum}>{sumResRun}</p>
                </Link>
                <Link to="/form" className={style.card}>
                  <div className={style.topCard}>
                    <BsCheckCircle className={style.icon} />
                    <h4 className={style.topCardInfo}>Kuisioner Selesai</h4>
                  </div>
                  <p className={style.topCardSum}>{sumResEnd}</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
