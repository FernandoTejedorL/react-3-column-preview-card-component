import styles from './text.module.css';

const Text = ({ textum }) => {
	const { text } = styles;
	return <p className={text}>{textum}</p>;
};

export default Text;
