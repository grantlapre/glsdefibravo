
import Card from 'react-bootstrap/Card';
import Amount from './amount';
import PixelateImage from './pixelateImage';


function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <PixelateImage />
      <Card.Body>
        <Card.Title>Mint Amount...</Card.Title>
        <Card.Text>
          Each NFT = 0.06ETH
        </Card.Text>
        <Amount />
      </Card.Body>
    </Card>
  );
}

export default Cards;