import styles from './button.module.css';

const Button = ({ color }) => {
	const colorStyles = styles[`${color}`];
	const { button } = styles;
	return <a className={`${button} ${colorStyles}`}>Learn More</a>;
};

export default Button;
