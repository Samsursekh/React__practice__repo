import Skills from "./Skills";

function AllSkills() {
  return (
    <div
      style={{
        display: "grid",
        width: "350px",
        gridTemplateColumns: " repeat(3, 1fr)"
      }}
    >
      <Skills
        src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
        desc="ReactJS"
      />

      <Skills
        src="https://th.bing.com/th/id/OIP.g1KfG8APYNeP-B_8fEd1rQHaHa?pid=ImgDet&rs=1g"
        desc="JavaScript"
      />

      <Skills
        src="https://javascript.tutorialhorizon.com/files/2016/06/redux-logo.png"
        desc="Redux"
      />

      <Skills
        src="https://th.bing.com/th/id/R.3851cc047b9284b97c521cc1a7d8a512?rik=Q%2fhqhGlhZoUjmg&pid=ImgRaw&r=0&sres=1&sresct=1"
        desc="MongoDB"
      />

      <Skills
        src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
        desc="ReactJS"
      />

      <Skills
        src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
        desc="ReactJS"
      />

      <Skills
        src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
        desc="ReactJS"
      />

      <Skills
        src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
        desc="ReactJS"
      />
    </div>
  );
}

export default AllSkills;
