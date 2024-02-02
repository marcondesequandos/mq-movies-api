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

console.log(
  "Countries =>",
  Object.keys(countries).map((key) => countries[key])
);

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
        languages: country.languages[0],
      };
    });

    const continentsObj = {};

    countriesListLanguages.forEach((country) => {
      const { continent } = country;

      // Se o continente ainda não existe no objeto, criamos um array vazio para ele
      if (!continentsObj[continent]) {
        continentsObj[continent] = [];
      }

      // Adicionando o país ao array do continente correspondente
      continentsObj[continent].push(country);
    });

    // Transformando o objeto em um array de objetos com a estrutura desejada
    const continentsArray = Object.entries(continentsObj).map(
      ([continent, countries]) => ({
        [continent]: countries,
      })
    );

    return continentsArray;
  }
}
