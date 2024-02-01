"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const express = require("express");
const app = express();
const port = 3000;
app.get("/mDiscover", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc`;
        // includeAdult
        // includeVideo
        // page
        // sort_by (popularity, revenue, primary_release_date, vote_average, vote_count asc & desc)
        // language
        // with_original_language
        // incluir mais com o tempo
        const response = yield (0, axios_1.default)({
            url,
            method: "get",
            timeout: 8000,
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzY4MTU2MWMzZjAxN2QwMDE5MjBmNmI3ZDYwNmY0MCIsInN1YiI6IjY1YjhkZWExOTBmY2EzMDE3YjA2YzE1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m5eDm2vb_BPMO6E8DmkKnC7Xz9OVzst5ez2g41WNaUo",
            },
        });
        console.log(response);
        res.status(response.status).send(response.data);
    }
    catch (error) {
        console.error(error);
    }
}));
//# sourceMappingURL=app.js.map