import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
  });

  const Ashish = () => {
    setCar((x) => {
      return { ...x, year: 2023, model: "Scorpio", brand: "Mahindra" };
    });
  };

  return (
    <>
      <h>React useState Hook</h>
      <h1 style={{ color: "red" }}>
        {car.brand} {car.model} {car.year}
      </h1>
      <Button variant="contained" type="submit" onClick={Ashish}>
        Contained
      </Button>
    </>
  );
}

export default App;
