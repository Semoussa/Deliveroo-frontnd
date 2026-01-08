export default function FirstSection({ name, description, picture }) {
  return (
    <div className="first-section">
      <div className="container">
        <div className="left-part">
          <h1>{name}</h1>
          <div>
            <p>{description}</p>
          </div>
        </div>
        <div className="right-part">
          <img src={picture} alt="" />
        </div>
      </div>
    </div>
  );
}
