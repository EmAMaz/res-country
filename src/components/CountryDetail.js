export default function CountryDetail({ country, setOpenDetails }) {
  return (
    <div className="min-h-screen mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-12 flex flex-col">
      <button
        onClick={() => setOpenDetails(false)}
        className="flex w-min items-center gap-2 shadow-lg shadow-custom dark:bg-darkEl dark:text-white py-2 px-6 bg-white rounded-lg"
      >
        <ion-icon name="arrow-back-outline" size="small"></ion-icon>
        <span>Back</span>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <img src={country.flag} alt="Andorra" />
        </div>
        <div className="flex md:justify-center">
          <div className="flex flex-col justify-evenly dark:text-white">
            <h1 className="font-bold text-3xl mb-4">{country.name}</h1>
            <div className="flex flex-col md:flex-row justify-between w-full gap-12 md:gap-32">
              <div className="flex flex-col gap-1 ">
                <h3>
                  <strong className="font-semibold">Native Name:</strong>{" "}
                  {country.nativeName}
                </h3>
                <h3>
                  <strong className="font-semibold">Population:</strong>{" "}
                  {country.population}
                </h3>
                <h3>
                  <strong className="font-semibold">Region:</strong>{" "}
                  {country.region}
                </h3>
                <h3>
                  <strong className="font-semibold">Sub Region:</strong>{" "}
                  {country.subregion}
                </h3>
                <h3>
                  <strong className="font-semibold">Capital:</strong>{" "}
                  {country.capital}
                </h3>
              </div>
              <div className="flex flex-col gap-1">
                <h3>
                  <strong className="font-semibold">Top Level Domain:</strong>{" "}
                  {country.topLevelDomain[0]}
                </h3>
                <h3>
                  <strong className="font-semibold">Currencies:</strong>{" "}
                  {country.currencies[0].name}
                </h3>
                <h3>
                  <strong className="font-semibold">Languages:</strong>{" "}
                  {country.languages.length > 0
                    ? country.languages
                        .map((language) => language.name)
                        .join(", ")
                    : country.languages[0].name}
                </h3>
              </div>
            </div>
            <div className="flex gap-4 mt-7 flex-col md:flex-row md:items-center">
              <h3>
                <strong className="font-semibold">
                  {country.borders && "Border Countries:"}
                </strong>
              </h3>
              <ul className="flex gap-2 flex-wrap">
                {country.borders &&
                  country.borders.map((border) => (
                    <li
                      className="bg-white px-[10px] py-1 shadow-lg shadow-custom dark:bg-darkEl"
                      key={border}
                    >
                      {border}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
