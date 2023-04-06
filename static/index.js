function Row() {
  let row = [];
  for (let i = 0; i < 6; ++i) {
    row.push(
      <input
        type="text"
        minlength="1"
        maxlength="1"
        key={i}
      ></input>
    );
  }
  return <div className="row">{row}</div>;
}

const sixRows = Array.from({length: 6}, (_,index) => {
    return <Row key={index} />;
});

const ReactAppFromCDN = () => {
  return (
    <div className="the-board">
      <h1>Wannabe Wordle</h1>
       {sixRows}
      <p>Good luck and have fun! &#128525;</p>
    </div>
  );
};

ReactDOM.render(<ReactAppFromCDN />, document.querySelector("#root"));
