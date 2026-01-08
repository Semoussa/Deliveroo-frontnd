import Meals from "./Meals";

export default function SecondSection({ categories }) {
  // console.log(categories);
  // const mealsTab = categories.meals;
  // console.log(mealsTab);

  return (
    <div className="second-section">
      <div className="container">
        <div className="left-part">
          {categories.map((elem) => {
            return elem.meals.length === 0 ? (
              ""
            ) : (
              <div key={elem.name} className="category">
                <h2>{elem.name}</h2>
                <Meals meals={elem.meals} />
              </div>
            );
          })}
        </div>
        <div className="right-part">panier</div>
      </div>
    </div>
  );
}
