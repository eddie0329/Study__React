import withStyle from "./hoc/withStyles";

const Text = ({ style, children }) => <p style={style}>{ children }</p>

const StyledText = withStyle(Text);

export default StyledText;
