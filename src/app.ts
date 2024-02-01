import axios from "axios";
import * as express from "express";

const app = express();

const port = 3000;

app.get("/mDiscover", async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc`;

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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzY4MTU2MWMzZjAxN2QwMDE5MjBmNmI3ZDYwNmY0MCIsInN1YiI6IjY1YjhkZWExOTBmY2EzMDE3YjA2YzE1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m5eDm2vb_BPMO6E8DmkKnC7Xz9OVzst5ez2g41WNaUo",
      },
    });
    console.log(response.data);
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
