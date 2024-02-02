import axios from "axios";
import * as express from "express";
import { config } from "../src/config/config";
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
import { Countries } from "../src/utils/countries";

const app = express();

const port = 3000;

app.get("/mDiscover", async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc`;

    //Filtros para trabalhar:

    // includeAdult
    // includeVideo
    // page
    // sort_by (popularity, revenue, primary_release_date, vote_average, vote_count asc & desc)
    // language
    // with_original_language
    // incluir mais com o tempo

    // const response = await axios({
    //   url,
    //   method: "get",
    //   timeout: 8000,
    //   headers: {
    //     accept: "application/json",
    //     Authorization: config.token,
    //   },
    // });

    const response = Object.keys(countries).map((key) => countries[key]);
    // console.log("=>", Object.entries(countries).flat(Infinity));
    // console.log(
    //   "Countries =>",
    //   Object.keys(countries).map((key) => countries[key])
    // );
    console.log(
      "continents =>",
      Array.from(Object.entries(continents)).flat(Infinity)
    );
    // console.log("continents =>", Object.entries(continents));
    // console.log(
    //   "Countries =>",
    //   Array.from(Object.entries(countries)).flat(Infinity)
    // );

    const countriesUtils = new Countries();

    const countriesList = countriesUtils.getCountriesByContinent();

    console.log(countriesList);

    res.send(countriesList);
    // res.status(response.status).send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
