import "./card.css";

function Card(props) {
  return (
    <div onClick={props.onClick} className={props.visible ? "invisible" : ""}>
      <div className="card">
        {props.isOpen ? (
          <h1>{props.val}</h1>
        ) : (
          <>
            <img src="./Assets/react.svg" alt="Avatar" />
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
