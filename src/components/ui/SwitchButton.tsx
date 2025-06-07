import { useRef } from "react";
import styled from "styled-components";

const Switch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDownload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // Esperamos a que la animación termine (3.5s como tu CSS)
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/mario-salazar/cv_Mario_Salazar.pdf"; // Asegúrate de tenerlo en public/ o con ruta correcta
        link.download = "cv_Mario_Salazar.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1500); // coincidir con animación `showInstalledMessage`
    }
  };
  return (
    <StyledWrapper>
      <div className="container">
        <label className="label">
          <input
            ref={inputRef}
            type="checkbox"
            className="input"
            onChange={handleDownload}
          />
          <span className="circle">
            <svg
              className="icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>
            <div className="square" />
          </span>
          <p className="title">Descargar CV</p>
          <p className="title">Listo</p>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    background-color: transparent;
    border: 2px solid rgb(91, 91, 240);
    display: flex;
    align-items: center;
    border-radius: 50px;
    width: 190px;
    cursor: pointer;
    transition: all 0.4s ease;
    padding: 5px;
    position: relative;
  }

  .label::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    width: 8px;
    height: 8px;
    transition: all 0.4s ease;
    border-radius: 100%;
    margin: auto;
    opacity: 0;
    visibility: hidden;
  }

  .label .input {
    display: none;
  }

  .label .title {
    font-size: 17px;
    color: #fff;
    transition: all 0.4s ease;
    position: absolute;
    right: 18px;
    bottom: 14px;
    text-align: center;
  }

  .label .title:last-child {
    opacity: 0;
    visibility: hidden;
  }

  .label .circle {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: rgb(91, 91, 240);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    position: relative;
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    overflow: hidden;
  }

  .label .circle .icon {
    color: #fff;
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .label .circle .square {
    aspect-ratio: 1;
    width: 15px;
    border-radius: 2px;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .label .circle::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #3333a8;
    width: 100%;
    height: 0;
    transition: all 0.4s ease;
  }

  .label:has(.input:checked) {
    width: 57px;
    animation: installed 0.2s ease 1.5s forwards;
  }

  .label:has(.input:checked)::before {
    animation: rotate 1s ease-in-out 0.2s forwards;
  }

  .label .input:checked + .circle {
    animation: pulse 0.6s forwards, circleDelete 0.2s ease 1.5s forwards;
  }

  .label .input:checked + .circle::before {
    animation: installing 1.3s ease-in-out forwards;
  }

  .label .input:checked ~ .title:last-child {
    animation: showInstalledMessage 0.4s ease 1.5s forwards;
  }

  .label .input:checked ~ .title {
    opacity: 0;
    visibility: hidden;
  }

  .label .input:checked ~ .title:last-child {
    animation: showInstalledMessage 0.4s ease 1.5s forwards;
  }

  @keyframes pulse {
    0% {
      scale: 0.95;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    70% {
      scale: 1;
      box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);
    }
    100% {
      scale: 0.95;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes installing {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-90deg) translate(27px) rotate(0);
      opacity: 1;
      visibility: visible;
    }
    99% {
      transform: rotate(270deg) translate(27px) rotate(270deg);
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes installed {
    100% {
      width: 150px;
      border-color: rgb(35, 174, 35);
    }
  }

  @keyframes circleDelete {
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes showInstalledMessage {
    100% {
      opacity: 1;
      visibility: visible;
      right: 56px;
    }
  }
`;

export default Switch;
