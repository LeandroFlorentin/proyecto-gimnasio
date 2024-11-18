import { toUppercaseFirstLetter } from "../../../plugins/index.js";
import { Card } from "react-bootstrap";
type TCard = {
  orden: number;
  ejercicio: string;
  tiempo?: string;
  cantidad?: string;
  repeticiones?: string;
  musculo?: string;
  url_demostracion?: string;
};

type TMyCard = {
  exe: TCard;
  musculo: string;
};

const MyCard = ({ exe, musculo }: TMyCard) => {
  console.log(exe);
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{toUppercaseFirstLetter(exe.ejercicio)}</Card.Title>
        {musculo && (
          <Card.Subtitle className="mb-2 text-muted">
            Musculo general : {toUppercaseFirstLetter(musculo)}
          </Card.Subtitle>
        )}
        {exe.musculo && (
          <Card.Subtitle className="mb-2 text-muted">
            Musculos especificos : {toUppercaseFirstLetter(exe.musculo)}
          </Card.Subtitle>
        )}
        {exe.cantidad && exe.repeticiones && (
          <Card.Text>
            {`Vas a hacer ${exe.repeticiones} de ${exe.cantidad}`}
          </Card.Text>
        )}
        {exe.url_demostracion && (
          <Card.Link href={exe.url_demostracion}>
            Ver demostración del ejercicio
          </Card.Link>
        )}
        {exe.tiempo && <Card.Text>{exe.tiempo}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default MyCard;
