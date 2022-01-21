const withStyle = (Component) => {
  return props => {
    return <Component style={{ color: 'red', border: 'solid 1px blue', }} {...props} />
  }
}

export default withStyle;
