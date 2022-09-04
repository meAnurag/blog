const Highlight = ({ text }) => {
  console.log(text);
  return (
    <span style={{ backgroundColor: "yellow", color: "black" }}>{text}</span>
  );
};

export default Highlight;
