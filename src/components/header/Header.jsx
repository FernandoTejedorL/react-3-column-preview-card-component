import styles from './header.module.css';

const Header = ({ text }) => {
	const { header } = styles;
	return <h2 className={header}>{text}</h2>;
};

export default Header;
