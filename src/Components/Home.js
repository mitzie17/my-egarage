import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

export default function Home() {
  return (
    <div>
      <h1 className="home">Welcome</h1>
      <div>
        <Alert variant="secondary">
          Start reviewing your favorite items...
        </Alert>
        <Image
          src="https://www.kindpng.com/picc/m/360-3602061_nurture-leads-to-close-more-deals-png-download.png"
          fluid
          roundedCircle
        />
      </div>
    </div>
  );
}
