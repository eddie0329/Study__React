import withStyle from "./hoc/withStyles";

const Button = ({ style, children }) => <button style={style}>{ children }</button>;

const StyledButton = withStyle(Button);

export default StyledButton;
