import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

// Home component only returns an h1 and div with an Alert and Image components inside
export default function Home() {
  return (
    <div>
      <h1 className="home">Welcome</h1>
      <div className="text-center">
        <Alert variant="secondary">
          Start reviewing your favorite items...
        </Alert>
        <Image
          fluid
          align="center"
          src="https://www.kindpng.com/picc/m/360-3602061_nurture-leads-to-close-more-deals-png-download.png"
          roundedCircle
        />
      </div>
    </div>
  );
}
