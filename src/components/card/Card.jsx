import styles from './card.module.css';

const Card = ({ children, color }) => {
	const colorStyles = styles[`${color}`];
	const { card } = styles;
	return <div className={`${card} ${colorStyles}`}>{children}</div>;
};

export default Card;
