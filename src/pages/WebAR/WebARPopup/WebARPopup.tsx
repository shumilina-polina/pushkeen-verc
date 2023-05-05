import s from "./webARPopup.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useLocation } from "react-router-dom";

const WebARPopup = ({ open, setOpen }: any) => {
  const { t } = useTranslation();
  const { hash } = useLocation();
  useEffect(() => {
    if (hash === `#gaga`) setOpen(true);
  }, [hash]);
  // useEffect(() => {
  //   open
  //     ? window.XRIFrame.registerXRIFrame("gaga-iframe")
  //     : window.XRIFrame.deregisterXRIFrame("gaga-iframe");
  // }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className={s.sale}>
      <Dialog
        scroll="paper"
        className={cn(s.dialog, "webar-dialog")}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle className={s.header}>
          <button className={s.button_close} onClick={handleClose}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
              <line
                x1="0.707107"
                y1="1.29289"
                x2="25.7071"
                y2="26.2929"
                stroke="#B3B3B3"
                strokeWidth="2"
              />
              <line
                x1="25.7071"
                y1="0.707107"
                x2="0.707107"
                y2="25.7071"
                stroke="#B3B3B3"
                strokeWidth="2"
              />
            </svg>
          </button>
          <ReactMarkdown>{t("project.list.webar.popup.title")}</ReactMarkdown>
        </DialogTitle>

        {/* <DialogContent className={s.content}>
          <ul>
            {[1, 2].map((item) => (
              <li key={item}>
                <div>{item}</div>
                <ReactMarkdown>
                  {t(`project.list.webar.popup.text_${item}`)}
                </ReactMarkdown>
              </li>
            ))}
          </ul>
          <div className={s.images}>
            <svg
              width="72"
              height="220"
              viewBox="0 0 72 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.5 219.502L65.7284 219.354L68.7426 214.429L71.5 219.502ZM28.127 0.995357C5.5073 29.7696 -2.77479 72.103 3.73486 113.073C10.2435 154.037 31.5269 193.559 67.9342 216.733L67.3972 217.577C30.6984 194.217 9.29062 154.413 2.74725 113.23C-3.79511 72.0541 4.50997 29.4202 27.3408 0.377344L28.127 0.995357Z"
                fill="#181818"
              />
            </svg>
            <svg width="78" height="142" viewBox="0 0 78 142" fill="none">
              <path
                d="M0.500018 139.501L6.0595 141.058L4.62849 135.465L0.500018 139.501ZM55.6216 0.828003C78.7021 27.5522 81.2322 57.5608 70.392 83.0107C59.5427 108.482 35.2823 129.422 4.7231 137.904L4.99056 138.868C35.8155 130.312 60.3328 109.179 71.3121 83.4026C82.3006 57.6043 79.7102 27.1895 56.3785 0.174375L55.6216 0.828003Z"
                fill="#181818"
              />
            </svg>

            <img
              className={s.images_ellipse}
              src={require("assets/projects/webar/ellipse-1.png")}
              alt="Web AR"
            />
            <img
              className={s.images_ellipse}
              src={require("assets/projects/webar/ellipse-2.png")}
              alt="Web AR"
            />
          </div>
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {t("project.list.webar.popup.button")}
            </a>
          </button>
        </DialogContent> */}
        <DialogContent className={s.content}>
          <iframe
            src="https://lenor.8thwall.app/gagagames/"
            id="gaga-iframe"
            allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
          ></iframe>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WebARPopup;
