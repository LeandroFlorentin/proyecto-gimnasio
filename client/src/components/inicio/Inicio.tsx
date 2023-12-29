import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Tabs, Tab } from "react-bootstrap";
import AccordionGym from "../estructura/Accordion/AccordionGym.jsx";
import capitalize from "capitalize";
import data from "../../json/rutinas.json";
export default function Inicio() {
  return (
    <div className="row">
      <Tabs
        defaultActiveKey="Rutina1"
        id="uncontrolled-tab-example"
        className="mb-3 col-md-8 col-sm-12 mx-auto"
      >
        <Tab eventKey="Rutina1" title="Rutina general" className='mb-3 col-md-8 col-sm-12 mx-auto'>
          {
            data?.map((value: any, key: any) => {
              return (
                <AccordionGym eventKey={key} key={key} title={capitalize(value.dia) + " - " + capitalize(value.musculo)}>
                  <>
                    {
                      Object.values(value.ejercicios).map((values: any, key2: any) => {
                        return values.map((valor: any, llave: number) => {
                          return (
                            <Accordion key={llave}>
                              <Accordion.Item eventKey={key + key2}>
                                <Accordion.Header>{`${capitalize(valor.ejercicio)} ${valor.repeticiones} x ${valor.cantidad}`}</Accordion.Header>
                                <Accordion.Body>
                                  {valor.descripcion && capitalize(valor?.descripcion)}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          )
                        }
                        )
                      })
                    }
                  </>
                </AccordionGym>
              )
            })
          }
        </Tab>
      </Tabs >
    </div>
  )
}
