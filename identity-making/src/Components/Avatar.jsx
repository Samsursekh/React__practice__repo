function Avatar(props) {
  const { name, src } = props;

  const style = {
    height: "150px",
    width: "150px",
    // border:"2px solid red",
    borderRadius: "50%"
  };
  return (
    <div>
      <img
        // src="https://th.bing.com/th/id/OIP.mFTbuZJ1wpmNF1TDmbmzXAHaML?pid=ImgDet&rs=1"
        src={props.src}
        style={style}
        alt="images"
      />
      <h3> {props.name} </h3>
    </div>
  );
}

export default Avatar;
