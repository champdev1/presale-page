const Button = ({ children, ...props }) => {
	return (
		<a href="#" className="button" {...props}>
			{children}
		</a>
	);
};

export default Button;
