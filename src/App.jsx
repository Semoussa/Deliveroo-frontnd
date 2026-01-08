import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import image from "./assets/logo-deliveroo.jpg";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--vh5s8x8f2hgt.code.run"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>
      <p>Téléchargement...</p>
    </div>
  ) : (
    <div>
      <Header image={image} />
      <FirstSection
        name={data.restaurant.name}
        picture={data.restaurant.picture}
        description={data.restaurant.description}
      />

      <SecondSection categories={data.categories} />
    </div>
  );
}

export default App;
