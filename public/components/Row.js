const toInputUppercase = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

function Row() {
    let row = []
    for (let i = 0; i < n; ++i) {
      row.push(<input type="text" minlength="1" maxlength="1" onInput={toInputUppercase} key={i}></input>)
    }
  
    return (
      <div className="Row">
        {row}
      </div>
    )
  }
  
  export default Row