import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Partidos from "./Partidos"
import Equipos from "./Equipos"

function F_grupos() {
  const [match, setMatch] = useState([]);
  const [teams, setTeams] = useState([]);
  const [tabs, setTabs] = useState('A');
  const grupos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  useEffect(()=>{
    Partidos&&setMatch(Partidos);
    Equipos&&setTeams(Equipos);
  },[]);

  return (
    
    <Tabs
      onSelect={(e)=>setTabs(e)}
      defaultActiveKey={'A'}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      {Partidos.map((e,i)=>
      <Tab key={i} eventKey={e.tab_name} title={`Group ${e.tab_name}`}>
        <Card className="Card-matches" style={{ borderColor: "#28040E" }}>
          <Card.Header className="Card-title">PARTIDOS</Card.Header>
          <ListGroup variant="flush">
            {e.match.map((e,i)=>
              <ListGroup.Item key={i} className="Card-line">
              <div className="Date-cont">
                <p className="Date">20 de Nov. 13:00 hs.</p>
              </div>
            <div className="Flag-cont">
                <img
                  alt={e.home.name}
                  className="Flag"
                  src={`https://countryflagsapi.com/png/${e.home.name}`}
                />
              </div>              
                <span className="Match">{e.home.name}</span>
                <div className="Match">
                  <input className="Score-box" type="Number" id="inputCatar1" />
                  <span> - </span>
                  <input className="Score-box" type="Number" id="inputEcuador1"/>
                </div>
                <span className="Match">{e.away.name}</span>              
              <div className="Flag-cont">
                <img
                  alt={e.away.name}
                  className="Flag"
                  src={`https://countryflagsapi.com/png/${e.away.name}`}
                />
              </div>
            </ListGroup.Item>)}
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
            {Equipos.filter(team => team.group === tabs).map((e,i)=>
                        <ListGroup.Item key={i} className="Card-line">
                        <span className="Minibox">{e.position}</span>
                        <span className="Box">{e.name}</span>
                        <span className="Minibox">{e.score}</span>
                        <span className="Minibox">{e.wins}</span>
                        <span className="Minibox">{e.draws}</span>
                        <span className="Minibox">{e.losses}</span>
                        <span className="Minibox">{e.goalsFor}</span>
                        <span className="Minibox">{e.goalsAgainst}</span>
                        <span className="Minibox">{0}</span>
                      </ListGroup.Item>
            )}
          </ListGroup>
        </Card>      
      </Tab>)}
      
    </Tabs>
      );
    }
    
    export default F_grupos;