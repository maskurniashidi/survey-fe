import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Button, message, Steps } from "antd";
import axios from "axios";
import style from "./styles/FillForm.module.css";
import Navbar from "../../components/Navbar";
import Attractiveness from "./Attractiveness";
import Perspicuity from "./Perspicuity";
import Efficiency from "./Efficiency";
import Dependability from "./Dependability";
import Stimulation from "./Stimulation";
import Novelty from "./Novelty";
import { ToastContainer, toast } from "react-toastify";
const steps = [
  {
    title: "Attractiveness",
    content: <Attractiveness />,
  },
  {
    title: "Perspicuity",
    content: <Perspicuity />,
  },
  {
    title: "Efficiency",
    content: <Efficiency />,
  },
  {
    title: "Dependability",
    content: <Dependability />,
  },
  {
    title: "Stimulation",
    content: <Stimulation />,
  },
  {
    title: "Novelty",
    content: <Novelty />,
  },
];

function FillForm() {
  const navigate = useNavigate();
  const [survey, setSurvey] = useState();
  const [totResp, setTotResp] = useState();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api-dev.maskurdev.site/public/api/v1/survey/${id}`,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setSurvey(response.data.data);
        setTotResp(response.data.data.totalRespondent);
        console.log(totResp);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleFinish = () => {
    if (localStorage.getItem("resultAtt") && localStorage.getItem("resultPer") && localStorage.getItem("resultEff") && localStorage.getItem("resultDep") && localStorage.getItem("resultSti") && localStorage.getItem("resultNov")) {
      let resultAtt = JSON.parse(localStorage.getItem("resultAtt"));
      let resultPer = JSON.parse(localStorage.getItem("resultPer"));
      let resultEff = JSON.parse(localStorage.getItem("resultEff"));
      let resultDep = JSON.parse(localStorage.getItem("resultDep"));
      let resultSti = JSON.parse(localStorage.getItem("resultSti"));
      let resultNov = JSON.parse(localStorage.getItem("resultNov"));
      console.log(resultAtt, resultPer, resultEff, resultDep, resultSti, resultNov);
      let data = new FormData();
      data.append("q1", resultAtt.q1);
      data.append("q2", resultAtt.q2);
      data.append("q3", resultAtt.q3);
      data.append("q4", resultAtt.q4);
      data.append("q5", resultAtt.q5);
      data.append("q6", resultAtt.q6);
      data.append("q7", resultPer.q7);
      data.append("q8", resultPer.q8);
      data.append("q9", resultPer.q9);
      data.append("q10", resultPer.q10);
      data.append("q11", resultEff.q11);
      data.append("q12", resultEff.q12);
      data.append("q13", resultEff.q13);
      data.append("q14", resultEff.q14);
      data.append("q15", resultDep.q15);
      data.append("q16", resultDep.q16);
      data.append("q17", resultDep.q17);
      data.append("q18", resultDep.q18);
      data.append("q19", resultSti.q19);
      data.append("q20", resultSti.q20);
      data.append("q21", resultSti.q21);
      data.append("q22", resultSti.q22);
      data.append("q23", resultNov.q23);
      data.append("q24", resultNov.q24);
      data.append("q25", resultNov.q25);
      data.append("q26", resultNov.q26);
      data.append("user_id", user.id);
      data.append("survey_id", id);

      let config = {
        method: "post",
        url: "https://api-dev.maskurdev.site/public/api/v1/result",
        data: data,
      };

      axios(config)
        .then(function (response) {
          // update data survey
          var dataBody = JSON.stringify({
            totalRespondent: (parseInt(totResp) - 1).toString(),
          });

          var config = {
            method: "put",
            url: `https://api-dev.maskurdev.site/public/api/v1/survey/${id}`,
            headers: {
              "Content-Type": "application/json",
            },
            data: dataBody,
          };

          axios(config)
            .then(function (response) {
              toast.success("Mengisi form berhasil", {
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
            });
        })
        .catch(function (error) {
          toast.error("Pastikan semua form terisi", {
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
    } else {
      toast.error("Pastikan semua form terisi", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <Navbar type="tester" />
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className={style.container}>
        <div className={style.content}>
          <Steps current={current} items={items} />
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Selanjutnya
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={handleFinish}>
                Selesai
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Sebelumnya
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FillForm;
