function Skills(props) {
  const { src, desc } = props;
  const style = {
    width: "15px",
    height: "15px",
    // border: "1px solid blue",
    margin: "auto"
  };
  return (
    <div>
      <div className="icon_div">
        <div style={style}>
          <img style={style} src={props.src} alt="icon" />
        </div>

        <div>
          <p style={{ color: "blue", fontSize: "12px" }}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
