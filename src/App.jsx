import Button from './components/button/Button';
import Card from './components/card/Card';
import Container from './components/container/Container';
import Header from './components/header/Header';
import Image from './components/image/Image';
import Text from './components/text/Text';

// {} -> <>
const App = () => {
	return (
		<Container>
			<Card color='orange'>
				<Image url={'/assets/images/sedan.svg'} />
				<Header text='SEDANS' />
				<Text textum='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' />
				<Button color='orange' />
			</Card>
			<Card color='blue'>
				<Image url={'/assets/images/suv.svg'} />
				<Header text='SUVS' />
				<Text textum='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' />
				<Button color='blue' />
			</Card>
			<Card color='green'>
				<Image url={'/assets/images/luxury.svg'} />
				<Header text='LUXURY' />
				<Text textum='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.' />
				<Button color='green' />
			</Card>
		</Container>
	);
};

export default App;
