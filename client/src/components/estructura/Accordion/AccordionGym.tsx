import { Accordion } from "react-bootstrap";
export default function AccordionGym({ eventKey, activateKey, key, title, children }: any) {
  return (
    <Accordion key={key}>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}