import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import style from "./styles/Form.module.css";
import DocAdd from "../../assets/doc-add.png";
import { FloatButton, Radio, Skeleton } from "antd";
import { BiPlus } from "react-icons/bi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { CustomerServiceOutlined } from "@ant-design/icons";

function Form() {
  const [loading, setLoading] = useState(true);
  const [tabsType, setTabsType] = useState("kuisioner berjalan");
  const [checkData, setCheckData] = useState("not null");
  const [data, setData] = useState([]);
  const [dataFinish, setDataFinish] = useState([]);
  const navigate = useNavigate();
  const [dataResp, setDataResp] = useState([]);
  const [dataRespFinish, setDataRespFinish] = useState([]);

  const [respFinish, setRespFinish] = useState([]);
  const [respNotFinish, setRespNotFinish] = useState([]);

  let user = JSON.parse(localStorage.getItem("user"));
  let role = user.role_id;

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/v1/survey",
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        if (user.role_id === 2) {
          let dataSumFilter = response.data.data.filter((item) => item.user_id === user.id && item.totalRespondent !== 0);
          let dataFinishSumFilter = response.data.data.filter((item) => item.user_id === user.id && item.totalRespondent === 0);
          setData(dataSumFilter);
          setDataFinish(dataFinishSumFilter);
          if (dataSumFilter.length === 0) {
            setCheckData("null");
          }
        } else {
          let dataRespSumFilter = response.data.data.filter((item) => item.totalRespondent !== 0);
          setDataResp(dataRespSumFilter);
          let dataRespFinishSumFilter = response.data.data.filter((item) => item.totalRespondent === 0);
          setDataRespFinish(dataRespFinishSumFilter);
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleClickFill = (id) => {
    localStorage.removeItem("resultAtt");
    localStorage.removeItem("resultEff");
    localStorage.removeItem("resultSti");
    localStorage.removeItem("resultNov");
    localStorage.removeItem("resultDep");
    localStorage.removeItem("resultPer");
  };

  // logic
  // filter data yg belum selesai
  // looping data
  // cari satu satu, apakah di result ada id_user ini. pake find
  // jika iya
  // tambahkan data tsb, ke data yg sudah diisini/kuisioner selesai
  //jika tidak
  // tambahkan data tsb, ke data list kuisioner

  return (
    <div className={style.wrapper}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Navbar type="tester" />
          {/* {role === 2 && (
            <Link to="/form/add-form">
              <FloatButton icon={<BiPlus />} type="primary" shape="circle" />
            </Link>
          )} */}

          <div className={style.container}>
            <div className={style.content}>
              <div className={style.infoTop}>
                <h2 className={style.infoTopTitle}>Mulai buat pertanyaan dan dapatkan hasil testing segera !</h2>
                <p className={style.infoTopDesc}>Mulai pengamalan testing dengan mudah dan tepat </p>
              </div>
              <div className={style.main}>
                {role === 2 && (
                  <div className={style.tabs}>
                    <button onClick={() => setTabsType("kuisioner berjalan")} className={style.tab}>
                      Kuisoner Berjalan
                    </button>
                    <button onClick={() => setTabsType("kuisioner selesai")} className={style.tab}>
                      Kuisoner Selesai
                    </button>
                  </div>
                )}

                {role === 3 && (
                  <div className={style.tabs}>
                    <button onClick={() => setTabsType("kuisioner berjalan")} className={style.tab}>
                      List Kuisioner
                    </button>
                    <button onClick={() => setTabsType("kuisioner selesai")} className={style.tab}>
                      Kuisoner Selesai
                    </button>
                  </div>
                )}

                {role === 2 && (
                  <div className={style.mainContent}>
                    {tabsType === "kuisioner berjalan" && (
                      <div>
                        {checkData === "null" ? (
                          <div className={style.blankContent}>
                            <img className={style.imgDoc} src={DocAdd} />
                            <p className={style.addText}>Yah masih kosong nih daftar pertanyaan kamu</p>
                            <Link to={"/form/add-form"} className={style.addFormBtn}>
                              Mulai Buat
                            </Link>
                          </div>
                        ) : (
                          <div className={style.cardContainer}>
                            {data.map((item) => (
                              <Link className={style.cardSurvey}>
                                <div className={style.leftCard}>
                                  <HiClipboardDocumentList className={style.cardIcon} />
                                  <div className={style.cardInfo}>
                                    <h4 className={style.cardTitle}>{item.appsName}</h4>
                                    <p className={style.cardDescription}>Dibuat : {item.created_at.slice(0, 10)} </p>
                                  </div>
                                </div>
                                <div className={style.rightCard}>Responden saat ini : {item.maxTotalRespondent - item.totalRespondent}</div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {tabsType === "kuisioner selesai" && (
                      <div>
                        {checkData === "null" ? (
                          <div>
                            <div className={style.blankContent}>
                              <img className={style.imgDoc} src={DocAdd} />
                              <p className={style.addText}>Yah masih kosong nih daftar pertanyaan kamu</p>
                              <Link to={"/form/add-form"} className={style.addFormBtn}>
                                Mulai Buat
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className={style.cardContainer}>
                            {dataFinish.map((item) => (
                              <Link className={style.cardSurvey}>
                                <div className={style.leftCard}>
                                  <HiClipboardDocumentList className={style.cardIcon} />
                                  <div className={style.cardInfo}>
                                    <h4 className={style.cardTitle}>{item.appsName}</h4>
                                    <p className={style.cardDescription}>dibuat pada : {item.created_at.slice(0, 10)}</p>
                                  </div>
                                </div>
                                <Link to={`/form/result-form/${item.id}`} className={style.rightCardBtn}>
                                  Lihat Hasil
                                </Link>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {role === 3 && (
                  <div className={style.mainContent}>
                    {tabsType === "kuisioner berjalan" && (
                      <div className={style.cardContainer}>
                        {dataResp.map((item) => (
                          <Link className={style.cardSurvey}>
                            <div className={style.leftCard}>
                              <HiClipboardDocumentList className={style.cardIcon} />
                              <div className={style.cardInfo}>
                                <h4 className={style.cardTitle}>{item.appsName}</h4>
                                <p className={style.cardDescription}>dibuat pada : {item.created_at.slice(0, 10)}</p>
                              </div>
                            </div>
                            <Link to={`/form/fill-form/${item.id}`} onClick={() => handleClickFill(item.id)} className={style.rightCardBtn}>
                              Mulai
                            </Link>
                          </Link>
                        ))}
                      </div>
                    )}
                    {tabsType === "kuisioner selesai" && (
                      <div className={style.cardContainer}>
                        {dataRespFinish.map(() => (
                          <Link className={style.cardSurvey}>
                            <div className={style.leftCard}>
                              <HiClipboardDocumentList className={style.cardIcon} />
                              <div className={style.cardInfo}>
                                <h4 className={style.cardTitle}>Form Aplikasi 2</h4>
                                <p className={style.cardDescription}>Kamis, 14 November 2022</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Form;
