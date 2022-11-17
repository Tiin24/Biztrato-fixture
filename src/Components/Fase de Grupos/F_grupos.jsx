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
      <Tab eventKey="Grupo A" title="Grupo A"></Tab>
      <Tab eventKey="Grupo B" title="Grupo B"></Tab>
      <Tab eventKey="Grupo C" title="Grupo C"></Tab>
      <Tab eventKey="Grupo D" title="Grupo D"></Tab>
      <Tab eventKey="Grupo E" title="Grupo E"></Tab>
      <Tab eventKey="Grupo F" title="Grupo F"></Tab>
      <Tab eventKey="Grupo G" title="Grupo G"></Tab>
      <Tab eventKey="Grupo h" title="Grupo H"></Tab>
    </Tabs>
  )
}

export default F_grupos