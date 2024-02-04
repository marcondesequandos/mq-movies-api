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
import { countReset } from "console";
import { checkServerIdentity } from "tls";

const app = express();

const port = 3000;

app.get("/mDiscover", async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=2&sort_by=popularity.desc&with_runtime.lte=400`;

    //Filtros para trabalhar:

    // includeAdult
    // includeVideo
    // page
    // sort_by (popularity, revenue, primary_release_date, vote_average, vote_count asc & desc)
    // language
    // with_original_language
    // incluir mais com o tempo

    const response = await axios({
      url,
      method: "get",
      timeout: 8000,
      headers: {
        accept: "application/json",
        Authorization: config.token,
      },
    });

    const apiResponse = response.data.results;

    //esboçando método para filtrar idiomas

    // está retornando null o que excluo, preciso resolver

    const withoutEn = apiResponse.filter(
      (movie) => movie.original_language !== "en"
    );

    // res.status(response.status).send(apiResponse);
    res.status(response.status).send(withoutEn);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
