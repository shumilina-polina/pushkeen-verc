import { useEffect, useRef, useState } from "react";
import s from "./Video.module.scss";

const Video = ({ videoSrc, poster = "" }) => {
  const video = useRef(null);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    isMuted: true,
  });
  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    if (playerState.isPlaying) {
      video.current.play();
      // video.current.requestFullscreen();
    } else {
      video.current.pause();
    }
  }, [playerState.isPlaying, video]);

  const handleOnTimeUpdate = () => {
    const progress = (video.current.currentTime / video.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    video.current.currentTime = (video.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isMuted
      ? (video.current.muted = true)
      : (video.current.muted = false);
  }, [playerState.isMuted, video]);

  const fullScreen = () => {
    if (video.current.requestFullscreen) {
      video.current.requestFullscreen();
    } else if (video.current.mozRequestFullScreen) {
      video.current.mozRequestFullScreen();
    } else if (video.current.webkitEnterFullscreen) {
      video.current.webkitEnterFullscreen()();
    } else if (video.current.webkitRequestFullscreen) {
      video.current.webkitRequestFullscreen();
    } else if (video.current.msRequestFullscreen) {
      video.current.msRequestFullscreen();
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.button_wrapper}>
        <div className={s.video_wrapper}>
          <video
            loop={true}
            ref={video}
            onTimeUpdate={handleOnTimeUpdate}
            preload="metadata"
            playsInline
            poster={poster ? require(`assets/${poster}`) : undefined}
            onPlay={() => {
              setPlayerState({
                ...playerState,
                isPlaying: true,
              });
            }}
            onPause={() => {
              setPlayerState({
                ...playerState,
                isPlaying: false,
              });
            }}
            onClick={togglePlay}
          >
            <source src={require(`assets/${videoSrc}`)} type="video/mp4" />
            Тег video не поддерживается вашим браузером.
          </video>
          <span
            className={s.backdrop}
            style={{
              opacity: playerState.isPlaying ? 0 : 1,
            }}
          ></span>
        </div>

        <button
          className={s.button_play}
          style={{
            opacity: playerState.isPlaying ? 0 : 1,
          }}
          onClick={togglePlay}
        >
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_1609_209)">
              <circle cx="80" cy="81" r="79" fill="white" fillOpacity="0.1" />

              <path
                d="M120.627 78.356C121.775 79.1514 121.775 80.8486 120.627 81.644L62.389 121.993C61.0626 122.911 59.25 121.962 59.25 120.349L59.25 39.6515C59.25 38.0378 61.0626 37.0885 62.389 38.0075L120.627 78.356Z"
                fill="#1858FB"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_1609_209"
                x="-10"
                y="-10"
                width="180"
                height="180"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1609_209"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1609_209"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button className={s.button_mute} onClick={toggleMute}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1" />

            {!playerState.isMuted ? (
              <>
                <g clipPath="url(#clip0_1616_241)">
                  <path
                    d="M45.9569 30.6728C45.8708 31.3508 45.8277 31.9864 45.6985 32.6644C45.1386 35.9695 43.7604 38.8932 41.5639 41.4779C41.004 42.1135 40.1426 42.1983 39.5397 41.6898C38.7214 41.0542 38.5491 40.2491 39.109 39.5288C39.8412 38.5966 40.5303 37.622 41.0902 36.5627C41.8654 34.9949 42.4253 33.3847 42.6406 31.6474C43.1574 27.6644 42.2099 24.0627 39.8412 20.7576C39.4966 20.2915 39.1521 19.9101 38.8075 19.444C38.3338 18.8508 38.4199 18.1305 38.9798 17.5373C39.5828 16.944 40.3149 16.8593 40.9609 17.1983C41.0902 17.283 41.1763 17.3678 41.3055 17.4949C43.6743 20.1644 45.1386 23.2152 45.7416 26.7322C45.8277 27.3678 45.9138 28.0034 46 28.5966C45.9569 29.3169 45.9569 29.9949 45.9569 30.6728Z"
                    fill="#1858FB"
                  />
                  <path
                    d="M29.9785 29.6552C29.9785 32.8332 29.9785 36.0111 29.9785 39.1891C29.9785 40.0366 29.4616 40.6721 28.6433 40.7569C28.1696 40.7993 27.825 40.6298 27.4805 40.3332C25.0686 38.384 22.6999 36.4349 20.288 34.4433C19.8573 34.062 19.3836 33.8925 18.8237 33.9349C17.747 33.9772 16.6703 33.9349 15.5935 33.9349C14.5599 33.9349 14 33.3416 14 32.3671C14 30.5874 14 28.7654 14 26.9857C14 25.9688 14.603 25.4179 15.5935 25.4179C16.8425 25.4179 18.1346 25.4179 19.3836 25.4179C19.5559 25.4179 19.7281 25.3332 19.8573 25.2484C22.3984 23.1721 24.9394 21.1382 27.4805 19.062C28.2557 18.4264 29.1602 18.5111 29.7201 19.2315C29.9785 19.5281 30.0215 19.9094 30.0215 20.2908C29.9785 23.384 29.9785 26.5196 29.9785 29.6552Z"
                    fill="#1858FB"
                  />
                  <path
                    d="M38.937 29.6563C38.937 32.1563 38.1618 34.4444 36.6544 36.4783C36.1806 37.1139 35.3193 37.2834 34.6732 36.8597C33.8549 36.3512 33.5965 35.4614 34.0272 34.741C34.4579 34.0207 34.9316 33.3003 35.2331 32.4953C36.2237 29.741 35.8361 27.1563 34.1133 24.7834C34.0272 24.6563 33.9411 24.5715 33.8549 24.4444C33.4673 23.9359 33.4242 23.3427 33.7688 22.7919C34.1564 22.241 34.6732 21.8597 35.4054 21.9444C35.793 21.9868 36.0945 22.1986 36.3098 22.4529C37.688 24.1478 38.5494 26.0969 38.8078 28.258C38.894 28.7241 38.894 29.1902 38.937 29.6563Z"
                    fill="#1858FB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1616_241">
                    <rect
                      width="32"
                      height="25"
                      fill="white"
                      transform="translate(14 17)"
                    />
                  </clipPath>
                </defs>
              </>
            ) : (
              <>
                <path
                  d="M29.9785 29.6552C29.9785 32.8332 29.9785 36.0111 29.9785 39.1891C29.9785 40.0366 29.4616 40.6721 28.6433 40.7569C28.1696 40.7993 27.825 40.6298 27.4805 40.3332C25.0686 38.384 22.6999 36.4349 20.288 34.4433C19.8573 34.062 19.3836 33.8925 18.8237 33.9349C17.747 33.9772 16.6703 33.9349 15.5935 33.9349C14.5599 33.9349 14 33.3416 14 32.3671C14 30.5874 14 28.7654 14 26.9857C14 25.9688 14.603 25.4179 15.5935 25.4179C16.8425 25.4179 18.1346 25.4179 19.3836 25.4179C19.5559 25.4179 19.7281 25.3332 19.8573 25.2484C22.3984 23.1721 24.9394 21.1382 27.4805 19.062C28.2557 18.4264 29.1602 18.5111 29.7201 19.2315C29.9785 19.5281 30.0215 19.9094 30.0215 20.2908C29.9785 23.384 29.9785 26.5196 29.9785 29.6552Z"
                  fill="#1858FB"
                />
                <rect
                  x="43.4414"
                  y="25"
                  width="2.20442"
                  height="13.2265"
                  rx="1.10221"
                  transform="rotate(45 43.4414 25)"
                  fill="#1858FB"
                />
                <rect
                  x="44.9111"
                  y="34.3535"
                  width="2.20442"
                  height="13.2265"
                  rx="1.10221"
                  transform="rotate(135 44.9111 34.3535)"
                  fill="#1858FB"
                />
              </>
            )}
          </svg>
        </button>
        <button className={s.button_fullscreen} onClick={fullScreen}></button>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step={1}
        value={playerState.progress}
        onChange={(e) => handleVideoProgress(e)}
      />
    </div>
  );
};

export default Video;
