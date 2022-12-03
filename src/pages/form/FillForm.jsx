import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import style from "./styles/FillForm.module.css";
import Navbar from "../../components/Navbar";
import Attractiveness from "./Attractiveness";

const steps = [
  {
    title: "Attractiveness",
    content: <Attractiveness />,
  },
  {
    title: "Perspicuity",
    content: "Second-content",
  },
  {
    title: "Efficiency",
    content: "Last-content",
  },
  {
    title: "Dependability",
    content: "First-content",
  },
  {
    title: "Stimulation",
    content: "Second-content",
  },
  {
    title: "Novelty",
    content: "Last-content",
  },
];

function FillForm() {
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

  return (
    <div>
      <Navbar type="tester" />
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
              <Button type="primary" onClick={() => message.success("Processing complete!")}>
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
