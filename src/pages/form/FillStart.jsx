import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import style from "./styles/Fillstart.module.css";
import { Skeleton } from "antd";
function FillStart() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api-dev.maskurdev.site/public/api/v1/survey/${id}`,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.wrapper}>
      <Navbar type={"tester"} />
      {loading ? (
        <Skeleton />
      ) : (
        <div className={style.container}>
          <div className={style.content}>
            <h2 className={style.title}>{data.appsName}</h2>
            <div className={style.infoContainer}>
              <div className={style.infoLeft}>
                <h3 className={style.infoTitle}>Link Aplikasi</h3>
                <h3 className={style.infoTitle}>DesKripsi Aplikasi</h3>
              </div>
              <div className={style.infoRight}>
                <p className={style.infoDesc}>: {data.appsLink}</p>
                <p className={style.infoDesc}>: {data.appsDescription}</p>
              </div>
            </div>
            <Link to={`/form/fill-form/${id}`} className={style.linkStart}>
              Mulai
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default FillStart;
