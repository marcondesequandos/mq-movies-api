import type {
  ICountry,
  ICountryData,
  ILanguage,
  TContinentCode,
  TCountryCode,
  TLanguageCode,
} from "countries-list";

// Main data and utils
import { continents, countries, languages } from "countries-list";

export class Countries {
  public getCountries() {
    const countriesList = [...Object.values(countries)];
    return countriesList;
  }

  // Eu quero criar um array com os continentes e dentro de cada elemento do array tem um array com os países de cada continente

  public getCountriesByContinent() {
    const countriesList = this.getCountries();
    const countriesListLanguages = countriesList.map((country) => {
      return {
        name: country.name,
        continent: country.continent,
        main_language: country.languages[0],
      };
    });

    // const continentsObj = {};

    // countriesListLanguages.forEach((country) => {
    //   const { continent } = country;

    //   if (!continentsObj[continent]) {
    //     continentsObj[continent] = [];
    //   }

    //   continentsObj[continent].push(country);
    // });

    // const continentsArray = Object.entries(continentsObj).map(
    //   ([continent, countries]) => ({
    //     [continent]: countries,
    //   })
    // );

    return countriesListLanguages;
  }
}
