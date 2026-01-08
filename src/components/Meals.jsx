export default function Meals(props) {
  // console.log(props);
  // const tab = props.meals.length;
  // console.log(tab);
  return (
    <div className="meals">
      {props.meals.map((elem) => {
        return (
          <div key={elem.id} className="item">
            <div className="item-desc">
              <h3>{elem.title}</h3>
              <p className="description">{elem.description}</p>
              <div className="price">
                <p>{elem.price} €</p>
                {elem.popular ? <p>Populaire</p> : ""}
              </div>
            </div>
            <div className="item-picture">
              <img src={elem.picture} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
