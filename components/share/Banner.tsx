const Banner = props => (
  <div className="Banner" dangerouslySetInnerHTML={{ __html: props.html }} />
);

export default Banner;
