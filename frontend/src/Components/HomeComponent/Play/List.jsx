import React from 'react';
import NavBar from '../../Navbar/Navbar.jsx';
import Preguntas from "./Preguntas";
import { useState, useEffect } from "react";
import "./Preguntas.css";
import "./images/captain.jpg"
import backgroundImageList from "./backgroundImageList";


function List() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(15);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      backgroundImage();
      if (preguntaActual === Preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(15);
      }
    }, 1500);

  }
   //setting the background image
   function backgroundImage() {
    document.querySelector(
      "body"
    ).style.backgroundImage = `url(${backgroundImageList[List]})`;
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [tiempoRestante]);


  if (isFinished)
    return (
      
     <div className="List">
       <div className="preguntas">
        <div className="juego-terminado">
          <span>
            {" "}
            Obtuviste {puntuación} de {Preguntas.length}{" "}
          </span>
          <button className="buttonList" onClick={() => (window.location.href = "/")}>
            {" "}
            Volver a jugar
          </button>
          <button className="buttonList"
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </div>
      </div>
    );

  if (answersShown)
    return (
      <div className="List">
      <div className="preguntas">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {Preguntas.length}
          </div>
          <div className="titulo-pregunta">
            {Preguntas[preguntaActual].titulo}
          </div>
          <div>
            {
              Preguntas[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button className="buttonList"
            onClick={() => {
              if (preguntaActual === Preguntas.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === Preguntas.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </div>
      </div>
     
    );

  return (
    <div className="List">
     <NavBar />
    <div className="preguntas">
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span> Pregunta {preguntaActual + 1} de</span> {Preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {Preguntas[preguntaActual].titulo}
        </div>
        <div>
          {!areDisabled ? (
            <span className="tiempo-restante">
              Tiempo restante: {tiempoRestante}{" "}
            </span>
          ) : (
            <button className="buttonList"
              onClick={() => {
                setTiempoRestante(15);
                setAreDisabled(false);
                if (preguntaActual === Preguntas.length - 1) {
                  setIsFinished(true);
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              Continuar
            </button>
          )}
        </div>
      </div>
      <div className="lado-derecho">
        {Preguntas[preguntaActual].opciones.map((respuesta) => (
          <button className="buttonList"
            disabled={areDisabled}
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
          >
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
    </div>
    </div>
     
  );
}

export default List;
