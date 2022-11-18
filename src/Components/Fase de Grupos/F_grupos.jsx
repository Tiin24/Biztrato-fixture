import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function F_grupos() {
  return (

    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Grupo A" title="Grupo A">
        <Card className="Card-matches">
          <Card.Header className="Card-title">PARTIDOS</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="Card-line">
            <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1920px-Flag_of_Qatar.svg.png"
                />
              </div>              
                <span className="Match"> CATAR </span>
                <div className="Match">
                  <input className="Score-box" type="Number" id="inputCatar1" />
                  <span> - </span>
                  <input className="Score-box" type="Number" id="inputEcuador1"/>
                </div>
                <span className="Match"> ECUADOR </span>              
              <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png"
                />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
            <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1024px-Flag_of_Senegal.svg.png"
                />
              </div>
                <span className="Match"> SENEGAL </span>
                <div className="Match">
                <input className="Score-box" type="Number" />
                <span> - </span>
                <input className="Score-box" type="Number" />
                </div>
                <span className="Match"> PAÍSES BAJOS </span>
              <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png"
                />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
            <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1920px-Flag_of_Qatar.svg.png"
                />
              </div>
                <span className="Match"> CATAR </span>
                <div className="Match">
                <input className="Score-box" type="Number" />
                <span> - </span>
                <input className="Score-box" type="Number" />
                </div>
                <span className="Match"> SENEGAL </span>
              <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1024px-Flag_of_Senegal.svg.png"
                />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
            <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png"
                />
              </div>
                <span className="Match"> PAÍSES BAJOS </span>
                <div className="Match">
                <input className="Score-box" type="Number" />
                <span> - </span>
                <input className="Score-box" type="Number" />
                </div>
                <span className="Match"> ECUADOR </span>
              <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png"
                />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
            <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png"
                />
              </div>
                <span className="Match"> ECUADOR </span>
                <div className="Match">
                <input className="Score-box" type="Number" />
                <span> - </span>
                <input className="Score-box" type="Number" />
                </div>
                <span className="Match"> SENEGAL </span>
              <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1024px-Flag_of_Senegal.svg.png"
                />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
            <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png"
                />
              </div>
                <span className="Match"> PAÍSES BAJOS </span>
                <div className="Match">
                <input className="Score-box" type="Number" />
                <span> - </span>
                <input className="Score-box" type="Number" />
                </div>
                <span className="Match"> CATAR </span>
              <div className="Flag-cont">
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1920px-Flag_of_Qatar.svg.png"
                />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>

      <Card className="Card-positions">
          <Card.Header className="Card-title">POSICIONES</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="Card-line">
              <span className="Minibox">Pos</span>
              <span className="Box">SELECCIÓN</span>
              <span className="Minibox">Pts</span>
              <span className="Minibox">PG</span>
              <span className="Minibox">PE</span>
              <span className="Minibox">PP</span>
              <span className="Minibox">GF</span>
              <span className="Minibox">GC</span>
              <span className="Minibox">DG</span>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
              <span className="Minibox">1.</span>
              <span className="Box">CATAR</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
            <span className="Minibox">2.</span>
              <span className="Box">ECUADOR</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
            <span className="Minibox">3.</span>
            <span className="Box">SENEGAL</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
            </ListGroup.Item>
            <ListGroup.Item className="Card-line">
            <span className="Minibox">4.</span>
            <span className="Box">PAÍSES BAJOS</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
              <span className="Minibox">0</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>      





      </Tab>
      
      
      <Tab eventKey="Grupo B" title="Grupo B">
        <div className="screen_div">
          <div className="container_card">
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Inglaterra</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Iran</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>EE.UU</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Gales</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Inglaterra</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>EE.UU</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Gales</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Iran</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Iran</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>EE.UU</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Gales</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Inglaterra</h1>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="position_table">
            <h1>Posiciones</h1>
            <div className="informacion">
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className="paises_table">
              <div className="position">
                <div className="name_pais">
                  <span>Inglaterra</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Iran</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>EE.UU</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Gales</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo C" title="Grupo C">
        <div className="screen_div">
          <div className="container_card">
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Argentina</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Arabia Saudita</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Mexico</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Polonia</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Argentina</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Mexico</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Polonia</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Arabia Saudita</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Arabia Saudita</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Mexico</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Polonia</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Argentina</h1>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="position_table">
            <h1>Posiciones</h1>
            <div className="informacion">
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className="paises_table">
              <div className="position">
                <div className="name_pais">
                  <span>Argentina</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Arabia Saudita</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Mexico</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Polonia</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo D" title="Grupo D">
        <div className="screen_div">
          <div className="container_card">
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Dinamarca</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Túnez</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Francia</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Australia</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Túnez</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Australia</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Francia</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Dinamarca</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Túnez</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Francia</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Australia</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Dinamarca</h1>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="position_table">
            <h1>Posiciones</h1>
            <div className="informacion">
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className="paises_table">
              <div className="position">
                <div className="name_pais">
                  <span>Dinamarca</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Túnez</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Francia</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Australia</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo E" title="Grupo E">
        <div className="screen_div">
          <div className="container_card">
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Alemania</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Japón</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>España</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Costa Rica</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Japón</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Costa Rica</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>España</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Alemania</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Costa Rica</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Alemania</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Japón</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>España</h1>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="position_table">
            <h1>Posiciones</h1>
            <div className="informacion">
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className="paises_table">
              <div className="position">
                <div className="name_pais">
                  <span>Alemania</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Japón</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>España</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Costa Rica</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo F" title="Grupo F">
        <div className="screen_div">
          <div className="container_card">
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Marruecos</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Croacia</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Bélgica</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Canadá</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Bélgica</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Marruecos</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Canadá</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Croacia</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Bélgica</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Croacia</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Canadá</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Marruecos</h1>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="position_table">
            <h1>Posiciones</h1>
            <div className="informacion">
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className="paises_table">
              <div className="position">
                <div className="name_pais">
                  <span>Marruecos</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Croacia</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Bélgica</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Canadá</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo G" title="Grupo G">
        <div className="screen_div">
          <div className="container_card">
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Suiza</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Camerún</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Brasil</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Serbia</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Serbia</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Camerún</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Brasil</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Suiza</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Brasil</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Camerún</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Serbia</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Suiza</h1>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="position_table">
            <h1>Posiciones</h1>
            <div className="informacion">
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className="paises_table">
              <div className="position">
                <div className="name_pais">
                  <span>Suiza</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Camerún</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Brasil</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Serbia</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo h" title="Grupo H">
        <div className="screen_div">
          <div className="container_card">
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Uruguay</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Corea del sur</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Portugal</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Ghana</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Ghana</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Corea del sur</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Jor</p>
              </div>
              <div className="pais1">
                <h1>Portugal</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Uruguay</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Portugal</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Corea del sur</h1>
                <input type="number" />
              </div>
            </div>
            <div className="container_countries">
              <div className="info">
                <p>Dom.20/11 {/*Horario*/} Doha</p>
              </div>
              <div className="pais1">
                <h1>Ghana</h1>
                <input type="number" />
              </div>
              <div className="pais2">
                <h1>Uruguay</h1>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="position_table">
            <h1>Posiciones</h1>
            <div className="informacion">
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className="paises_table">
              <div className="position">
                <div className="name_pais">
                  <span>Uruguay</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Corea del sur</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Portugal</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
              <div className="position">
                <div className="name_pais">
                  <span>Ghana</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
                <div className="container_point">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default F_grupos;
