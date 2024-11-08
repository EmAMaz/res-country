import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import data from "./utils/data.json";
import region from "./utils/region.json";
import CountriesCard from "./components/CountriesCard";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [countries, setCountries] = useState(data);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [countrySelected, setCountrySelected] = useState([]);
  const [regionSelected, setRegionSelected] = useState("");
  const [characters, setCharacters] = useState("");

  const handleRegion = (region) => {
    setRegionSelected(region);
    setOpenDropdown(false);
  };

  const handleSearchCountry = (e) => {
    setCharacters(e);
  };

  useEffect(() => {
    if (characters.length === 0) setCountries(data);
    if (!regionSelected) {
      if (characters.length >= 2) {
        setCountries(
          data.filter((country) => {
            return country.name
              .toLowerCase()
              .includes(characters.toLowerCase());
          })
        );
      }
    } else {
      setCountries(
        data.filter((country) => {
          return (
            country.name.toLowerCase().includes(characters.toLowerCase()) &&
            country.region === regionSelected
          );
        })
      );
    }
  }, [characters, regionSelected]);

  return (
    <div className="bg-zinc-50 dark:bg-darkBg min-h-screen">
      <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-slate-100 dark:bg-darkEl">
        <Header />
      </div>
      {!openDetails && countrySelected ? (
        <>
          <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex items-center gap-2 bg-white mb-4 md:mb-0 p-4 w-full md:w-2/6 rounded-lg dark:bg-darkEl dark:text-white">
              <ion-icon name="search-outline" size="small"></ion-icon>
              <input
                className="focus:outline-none dark:bg-darkEl dark:text-white dark:placeholder:text-white w-full"
                type="text"
                placeholder="Search for a country..."
                value={characters}
                onChange={(e) => handleSearchCountry(e.target.value)}
              ></input>
            </div>
            <div className="relative rounded-lg flex items-center dark:text-white w-44 dark:bg-darkEl">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="bg-white dark:bg-darkEl flex justify-between items-center p-4 gap-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                type="button"
              >
                {regionSelected ? regionSelected : "Filter by Region"}
                <ion-icon name="chevron-down-outline" size="small"></ion-icon>
              </button>
              {openDropdown && (
                <ul className="text-sm bg-white dark:bg-darkEl text-gray-700 absolute top-10 md:top-14 w-full flex flex-col rounded-lg mt-[3px]">
                  {region.map((item, index) => (
                    <li
                      onClick={() => handleRegion(item.name)}
                      className="cursor-pointer hover:bg-gray-300 p-2 rounded-lg dark:text-white"
                      key={index}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-24 mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {countries.length > 0 ? (
              <>
                {countries.map((country, index) => (
                  <CountriesCard
                    key={index}
                    openDetails={(countrySelected) => {
                      setOpenDetails(true);
                      setCountrySelected(countrySelected);
                    }}
                    country={country}
                  />
                ))}
              </>
            ) : (
              <p className="dark:text-white">No hay nada para mostrar</p>
            )}
          </div>
        </>
      ) : (
        <CountryDetail
          setOpenDetails={setOpenDetails}
          country={countrySelected}
        />
      )}
    </div>
  );
}

export default App;
