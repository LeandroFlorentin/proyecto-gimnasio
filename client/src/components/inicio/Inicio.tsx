import "bootstrap/dist/css/bootstrap.min.css";
import { tabs } from "./data/index.js";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import MyCard from "../estructura/Card/MyCard.js";
import { toUppercaseFirstLetter } from "../../plugins/index.js";
import data from "../../json/rutinas.json";
type TCard = {
  orden: number;
  ejercicio: string;
  cantidad: string;
  repeticiones: string;
  musculo?: string;
  url_demostracion?: string;
};
export default function Inicio() {
  return (
    <div className="container">
      <Tabs
        defaultActiveKey="Rutina1"
        id="uncontrolled-tab-example"
        className="mb-3 col-md-8 col-sm-12 mx-auto"
      >
        {tabs.map((value, key: number) => (
          <Tab
            eventKey={value.eventKey}
            title={value.title}
            className={value.className}
          >
            {data[key]?.map((value: any, key: any) => {
              const arraysExecices = Object.entries(value.ejercicios);
              console.log("ACA", arraysExecices);
              return (
                <Row key={key} className="border rounded container mb-3">
                  <h1>{toUppercaseFirstLetter(value.dia)}</h1>
                  {value.descripcion && (
                    <h6>{toUppercaseFirstLetter(value.descripcion)}</h6>
                  )}
                  {value.url_demostracion && (
                    <a className="mb-2" href={value.url_demostracion}>
                      Ver demostración de la rutina.
                    </a>
                  )}
                  {arraysExecices.map((execice: any) => {
                    const data = execice[1];
                    return data.map((exe: TCard, key: number) => (
                      <Col xs={12} lg={6}>
                        <MyCard
                          key={key}
                          {...{
                            exe,
                            musculo: execice[0],
                          }}
                        />
                      </Col>
                    ));
                  })}
                </Row>
              );
            })}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
