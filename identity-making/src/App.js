import "./styles.css";
import Button from "./Components/Button";
import Avatar from "./Components/Avatar";
import AllSkills from "./Components/AllSkills";

// function Button() {
//   return <button> I am a Button </button>;
// }

export default function App() {
  return (
    <div className="App">
      {/* <div
        style={{
          display: "flex",
          border: "1px solid red",
          width: "200px",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <h2> DON </h2>
        <Button text="Click Me"></Button> 
      </div> */}

      <div
        style={{
          width: "600px",
          marginTop: "100px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          // border:"1px solid red",
          padding: "12px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              // border: "1px solid red",
              width: "200px",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <h2> DON No. 1 </h2>
            <Button text="Follow"></Button>
          </div>
          <div>
            <h3 style={{ textAlign: "left" }}>Softower Engineer</h3>
          </div>
          <div>
            <AllSkills />
          </div>
        </div>
        <div>
          <Avatar src="https://th.bing.com/th/id/OIP.mFTbuZJ1wpmNF1TDmbmzXAHaML?pid=ImgDet&rs=1" />
        </div>
      </div>
    </div>
  );
}
