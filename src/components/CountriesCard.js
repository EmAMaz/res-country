export default function CountriesCard({ country, openDetails }) {
    return (
        <div onClick={() => openDetails(country)} className="bg-white dark:bg-darkEl rounded-lg cursor-pointer hover:shadow-lg">
            <img className="rounded-t-lg" src={country.flag} alt={country.name} />
            <div className="p-4 dark:text-white">
                <h3 className="font-bold text-xl mb-4">{country.name}</h3>
                <p className="font-semibold">Population: <span className="font-normal">{country.population}</span></p>
                <p className="font-semibold">Region: <span className="font-normal">{country.region}</span></p>
                <p className="font-semibold">Capital: <span className="font-normal">{country.capital}</span></p>
            </div>
        </div>
    )
}