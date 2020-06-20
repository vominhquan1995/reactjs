const Menu = props => (
  <div className="Menu" dangerouslySetInnerHTML={{ __html: props.html }} />
);

export default Menu;
