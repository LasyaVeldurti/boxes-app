const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="box-container">
      <Box className="small-container" text="Small" />
      <Box className="medium-container" text="Medium" />
      <Box className="large-container" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
