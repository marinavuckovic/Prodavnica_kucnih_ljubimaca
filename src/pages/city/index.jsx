import { useState, useEffect } from "react";
import { axiosInstance } from "../../service/api";
import { Card } from "../../components/Card";
import "./style.css";
export const CityPage = () => {
  const [city, setCity] = useState("");
  const [petType, setPetType] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    if (city && petType) {
      try {
        const response = await axiosInstance.get(
          `pet_type_filter/${petType}/${city}`
        );
        setResults(response.data);
      } catch (error) {}
    }
  };

  useEffect(() => {
    fetchResults();
  }, [city, petType]);

  return (
    <div className="container">
      <div className="buttons">
        <div className="select-div">
          <select
            className="select-city"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="" selected>
              {" "}
              Select City:
            </option>
            <option value="Berane">Berane</option>
            <option value="Podgorica">Podgorica</option>
            <option value="Niksic">Niksic</option>
          </select>

          <select
            className="select-pet"
            onChange={(e) => setPetType(e.target.value)}
          >
            <option value="" selected>
              {" "}
              Select Pet:
            </option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Fish">Fish</option>
            <option value="Bird">Bird</option>
            <option value="Rabbit">Rabbit</option>
          </select>

          <button
            className="button-city"
            onClick={fetchResults}
            disabled={city === "" || petType === ""}
          >
            Search
          </button>
        </div>
        {results && results.ads ? (
          <div className="result-div">
            {results.ads.map((character, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Card key={index} character={character} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h1>No results</h1>
          </div>
        )}
      </div>
    </div>
  );
};
