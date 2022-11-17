import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function F_grupos() {
  return (
<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Grupo A" title="Grupo A">
        <div className='screen_div'>
          <div className='container_card'>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Qatar</h1><input type="number" /></div>
            <div className='pais2'><h1>Ecuador</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Senegal</h1><input type="number" /></div>
            <div className='pais2'><h1>P.Bajos</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>P.Bajos</h1><input type="number"/></div>
            <div className='pais2'><h1>Ecuador</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Qatar</h1><input type="number" /></div>
            <div className='pais2'><h1>Senegal</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>P.Bajos</h1><input type="number"/></div>
            <div className='pais2'><h1>Qatar</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Ecuador</h1><input type="number"/></div>
            <div className='pais2'><h1>Senegal</h1><input type="number" /></div>
          </div>
          </div>
          
          <div className='position_table'>
            <h1>Posiciones</h1>
            <div className='informacion'>
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className='paises_table'>
              <div className="position">
                <div className='name_pais'><span>Qatar</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Ecuador</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Senegal</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Paises Bajos</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo B" title="Grupo B">
        <div className='screen_div'>
          <div className='container_card'>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Inglaterra</h1><input type="number" /></div>
            <div className='pais2'><h1>Iran</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
          <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>EE.UU</h1><input type="number" /></div>
            <div className='pais2'><h1>Gales</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Inglaterra</h1><input type="number"/></div>
            <div className='pais2'><h1>EE.UU</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Gales</h1><input type="number" /></div>
            <div className='pais2'><h1>Iran</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Iran</h1><input type="number"/></div>
            <div className='pais2'><h1>EE.UU</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Gales</h1><input type="number"/></div>
            <div className='pais2'><h1>Inglaterra</h1><input type="number" /></div>
          </div>
          </div>
          <div className='position_table'>
            <h1>Posiciones</h1>
            <div className='informacion'>
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className='paises_table'>
              <div className="position">
                <div className='name_pais'><span>Inglaterra</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Iran</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>EE.UU</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Gales</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo C" title="Grupo C">
        <div className='screen_div'>  
          <div className='container_card'>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Argentina</h1><input type="number" /></div>
            <div className='pais2'><h1>Arabia Saudita</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Mexico</h1><input type="number" /></div>
            <div className='pais2'><h1>Polonia</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Argentina</h1><input type="number"/></div>
            <div className='pais2'><h1>Mexico</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Polonia</h1><input type="number" /></div>
            <div className='pais2'><h1>Arabia Saudita</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Arabia Saudita</h1><input type="number"/></div>
            <div className='pais2'><h1>Mexico</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Polonia</h1><input type="number"/></div>
            <div className='pais2'><h1>Argentina</h1><input type="number" /></div>
          </div>
          </div>
          <div className='position_table'>
            <h1>Posiciones</h1>
            <div className='informacion'>
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className='paises_table'>
              <div className="position">
                <div className='name_pais'><span>Argentina</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Arabia Saudita</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Mexico</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Polonia</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo D" title="Grupo D">
        <div className='screen_div'>  
          <div className='container_card'>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Dinamarca</h1><input type="number" /></div>
            <div className='pais2'><h1>Túnez</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Francia</h1><input type="number" /></div>
            <div className='pais2'><h1>Australia</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Túnez</h1><input type="number"/></div>
            <div className='pais2'><h1>Australia</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Francia</h1><input type="number"/></div>
            <div className='pais2'><h1>Dinamarca</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Túnez</h1><input type="number"/></div>
            <div className='pais2'><h1>Francia</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Australia</h1><input type="number"/></div>
            <div className='pais2'><h1>Dinamarca</h1><input type="number" /></div>
          </div>
          </div>
          <div className='position_table'>
            <h1>Posiciones</h1>
            <div className='informacion'>
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className='paises_table'>
              <div className="position">
                <div className='name_pais'><span>Dinamarca</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Túnez</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Francia</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Australia</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo E" title="Grupo E">
        <div className='screen_div'>
          <div className='container_card'>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Alemania</h1><input type="number" /></div>
            <div className='pais2'><h1>Japón</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>España</h1><input type="number" /></div>
            <div className='pais2'><h1>Costa Rica</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Japón</h1><input type="number"/></div>
            <div className='pais2'><h1>Costa Rica</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>España</h1><input type="number"/></div>
            <div className='pais2'><h1>Alemania</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Costa Rica</h1><input type="number"/></div>
            <div className='pais2'><h1>Alemania</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Japón</h1><input type="number"/></div>
            <div className='pais2'><h1>España</h1><input type="number" /></div>
          </div>
          </div>
          <div className='position_table'>
            <h1>Posiciones</h1>
            <div className='informacion'>
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className='paises_table'>
              <div className="position">
                <div className='name_pais'><span>Alemania</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Japón</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>España</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Costa Rica</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo F" title="Grupo F">
        <div className='screen_div'>
          <div className='container_card'>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Marruecos</h1><input type="number" /></div>
            <div className='pais2'><h1>Croacia</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Bélgica</h1><input type="number" /></div>
            <div className='pais2'><h1>Canadá</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Bélgica</h1><input type="number"/></div>
            <div className='pais2'><h1>Marruecos</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Canadá</h1><input type="number"/></div>
            <div className='pais2'><h1>Croacia</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Bélgica</h1><input type="number"/></div>
            <div className='pais2'><h1>Croacia</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Canadá</h1><input type="number"/></div>
            <div className='pais2'><h1>Marruecos</h1><input type="number" /></div>
          </div>
          </div>
          <div className='position_table'>
            <h1>Posiciones</h1>
            <div className='informacion'>
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className='paises_table'>
              <div className="position">
                <div className='name_pais'><span>Marruecos</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Croacia</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Bélgica</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Canadá</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo G" title="Grupo G">
        <div className='screen_div'>  
          <div className='container_card'>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Suiza</h1><input type="number" /></div>
            <div className='pais2'><h1>Camerún</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Brasil</h1><input type="number" /></div>
            <div className='pais2'><h1>Serbia</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Serbia</h1><input type="number"/></div>
            <div className='pais2'><h1>Camerún</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Brasil</h1><input type="number"/></div>
            <div className='pais2'><h1>Suiza</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Brasil</h1><input type="number"/></div>
            <div className='pais2'><h1>Camerún</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Serbia</h1><input type="number"/></div>
            <div className='pais2'><h1>Suiza</h1><input type="number" /></div>
          </div>
          </div>
          <div className='position_table'>
            <h1>Posiciones</h1>
            <div className='informacion'>
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className='paises_table'>
              <div className="position">
                <div className='name_pais'><span>Suiza</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Camerún</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Brasil</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Serbia</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Grupo h" title="Grupo H">
        <div className='screen_div'>  
          <div className='container_card'>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Uruguay</h1><input type="number" /></div>
            <div className='pais2'><h1>Corea del sur</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Portugal</h1><input type="number" /></div>
            <div className='pais2'><h1>Ghana</h1><input type="number"/></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Ghana</h1><input type="number"/></div>
            <div className='pais2'><h1>Corea del sur</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Jor</p></div>
            <div className='pais1'><h1>Portugal</h1><input type="number"/></div>
            <div className='pais2'><h1>Uruguay</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Portugal</h1><input type="number"/></div>
            <div className='pais2'><h1>Corea del sur</h1><input type="number" /></div>
          </div>
          <div className='container_countries'>
            <div className='info'><p>Dom.20/11  {/*Horario*/}  Doha</p></div>
            <div className='pais1'><h1>Ghana</h1><input type="number"/></div>
            <div className='pais2'><h1>Uruguay</h1><input type="number" /></div>
          </div>
          </div>
          <div className='position_table'>
            <h1>Posiciones</h1>
            <div className='informacion'>
              <span>Pais</span>
              <span>PTS {/* Puntuacion Total */}</span>

              <span>Gan {/* Partidos Ganados */}</span>
              <span>Emp {/* Partidos Empatados */}</span>
              <span>Per {/* Partidos Perdidos */}</span>
              <span>GF {/* Goles A Favor */}</span>
              <span>GC {/* Goles En Contra */}</span>
            </div>
            <div className='paises_table'>
              <div className="position">
                <div className='name_pais'><span>Uruguay</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Corea del sur</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Portugal</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
              <div className="position">
                <div className='name_pais'><span>Ghana</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
                <div className='container_point'><span>0</span></div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  )
}

export default F_grupos