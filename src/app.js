const path = require("path");
const express = require("express");
const request = require("request");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");

//extension routes
app.get("/extension", (req, res) => {
  res.render("extension");
});

//app routes
app.get("", (req, res) => {
  res.render("index");
});

//data api
app.get("/data", (req, res) => {
  if (!req.query.id) {
    return res.send({ Error: "ID not found" });
  }
  const url =
    "https://codeforces.com/api/user.status?handle=" +
    req.query.id +
    "&from=1&count=1000000000";

  request({ url: url, json: true }, (error, response) => {
    if (!response.body.result[response.body.result.length - 1]) {
      return res.send({ Error: "ID not found" });
    }
    let arr = response.body.result;
    let unique = new Array();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].problem.rating) {
        let found = false;
        for (let j = 0; j < unique.length; j++) {
          if (
            arr[i].problem.contestID == unique[j].problem.contestID &&
            arr[i].problem.index == unique[j].problem.index
          ) {
            found = false;
            break;
          }
        }
        if (!found && arr[i].verdict == "OK") {
          unique.push(arr[i]);
        }
      }
    }

    let p800 = 0,
      p900 = 0,
      p1000 = 0,
      p1100 = 0,
      p1200 = 0,
      p1300 = 0,
      p1400 = 0,
      p1500 = 0,
      p1600 = 0,
      p1700 = 0,
      p1800 = 0,
      p1900 = 0,
      p2000 = 0,
      p2100 = 0,
      p2200 = 0,
      p2300 = 0,
      p2400 = 0,
      p2500 = 0,
      p2600 = 0,
      p2700 = 0,
      p2800 = 0,
      p2900 = 0,
      p3000 = 0,
      p3100 = 0,
      p3200 = 0,
      p3300 = 0,
      p3400 = 0,
      p3500 = 0;

    let implementation = 0,
      math = 0,
      greedy = 0,
      dp = 0,
      data_structures = 0,
      brute_force = 0,
      constructive_algorithms = 0,
      graphs = 0,
      sortings = 0,
      binary_search = 0,
      dfs_and_similar = 0,
      trees = 0,
      strings = 0,
      number_theory = 0,
      combinatorics = 0,
      special = 0,
      geometry = 0,
      bitmasks = 0,
      two_pointers = 0,
      dsu = 0,
      shortest_paths = 0,
      probabilities = 0,
      divide_and_conquer = 0,
      hashing = 0,
      games = 0,
      flows = 0,
      interactive = 0,
      matrices = 0,
      string_suffix_structures = 0,
      fft = 0,
      graph_matchings = 0,
      ternary_search = 0,
      expression_parsing = 0,
      meet_in_the_middle = 0,
      var_2_sat = 0,
      chinese_remainder_theorem = 0,
      schedules = 0;

    for (let i = 0; i < unique.length; i++) {
      for (let j = 0; j < unique[i].problem.tags.length; j++) {
        let here = unique[i].problem.tags[j];
        if (here == "2-sat") {
          var_2_sat++;
        }
        if (here == "binary search") {
          binary_search++;
        }
        if (here == "bitmasks") {
          bitmasks++;
        }
        if (here == "brute force") {
          brute_force++;
        }
        if (here == "chinese remainder theorem") {
          chinese_remainder_theorem++;
        }
        if (here == "combinatorics") {
          combinatorics++;
        }
        if (here == "constructive algorithms") {
          constructive_algorithms++;
        }
        if (here == "data structures") {
          data_structures++;
        }
        if (here == "dfs and similar") {
          dfs_and_similar++;
        }
        if (here == "divide and conquer") {
          divide_and_conquer++;
        }
        if (here == "dp") {
          dp++;
        }
        if (here == "dsu") {
          dsu++;
        }
        if (here == "expression parsing") {
          expression_parsing++;
        }
        if (here == "fft") {
          fft++;
        }
        if (here == "flows") {
          flows++;
        }
        if (here == "games") {
          games++;
        }
        if (here == "geometry") {
          geometry++;
        }
        if (here == "graph matchings") {
          graph_matchings++;
        }
        if (here == "graphs") {
          graphs++;
        }
        if (here == "greedy") {
          greedy++;
        }
        if (here == "hashing") {
          hashing++;
        }
        if (here == "implementation") {
          implementation++;
        }
        if (here == "interactive") {
          interactive++;
        }
        if (here == "math") {
          math++;
        }
        if (here == "matrices") {
          matrices++;
        }
        if (here == "meet-in-the-middle") {
          meet_in_the_middle++;
        }
        if (here == "number theory") {
          number_theory++;
        }
        if (here == "probabilities") {
          probabilities++;
        }
        if (here == "schedules") {
          schedules++;
        }
        if (here == "shortest paths") {
          shortest_paths++;
        }
        if (here == "sortings") {
          sortings++;
        }
        if (here == "string suffix structures") {
          string_suffix_structures++;
        }
        if (here == "strings") {
          strings++;
        }
        if (here == "ternary search") {
          ternary_search++;
        }
        if (here == "trees") {
          trees++;
        }
        if (here == "two pointers") {
          two_pointers++;
        }
      }
    }

    let sum = 0;

    for (let i = 0; i < unique.length; i++) {
      if (unique[i].problem.rating == 800) {
        p800++;
      }
      if (unique[i].problem.rating == 900) {
        p900++;
      }
      if (unique[i].problem.rating == 1000) {
        p1000++;
      }
      if (unique[i].problem.rating == 1100) {
        p1100++;
      }
      if (unique[i].problem.rating == 1200) {
        p1200++;
      }
      if (unique[i].problem.rating == 1300) {
        p1300++;
      }
      if (unique[i].problem.rating == 1400) {
        p1400++;
      }
      if (unique[i].problem.rating == 1500) {
        p1500++;
      }
      if (unique[i].problem.rating == 1600) {
        p1600++;
      }
      if (unique[i].problem.rating == 1700) {
        p1700++;
      }
      if (unique[i].problem.rating == 1800) {
        p1800++;
      }
      if (unique[i].problem.rating == 1900) {
        p1900++;
      }

      if (unique[i].problem.rating == 2000) {
        p2000++;
      }
      if (unique[i].problem.rating == 2100) {
        p2100++;
      }
      if (unique[i].problem.rating == 2200) {
        p2200++;
      }
      if (unique[i].problem.rating == 2300) {
        p2300++;
      }
      if (unique[i].problem.rating == 2400) {
        p2400++;
      }
      if (unique[i].problem.rating == 2500) {
        p2500++;
      }
      if (unique[i].problem.rating == 2600) {
        p2600++;
      }
      if (unique[i].problem.rating == 2700) {
        p2700++;
      }
      if (unique[i].problem.rating == 2800) {
        p2800++;
      }
      if (unique[i].problem.rating == 2900) {
        p2900++;
      }

      if (unique[i].problem.rating == 3000) {
        p3000++;
      }
      if (unique[i].problem.rating == 3100) {
        p3100++;
      }
      if (unique[i].problem.rating == 3200) {
        p3200++;
      }
      if (unique[i].problem.rating == 3300) {
        p3300++;
      }
      if (unique[i].problem.rating == 3400) {
        p3400++;
      }
      if (unique[i].problem.rating == 3500) {
        p3500++;
      }
      sum += unique[i].problem.rating;
    }

    let average = sum / unique.length;

    res.send({
      ID: req.query.id,
      average: average,
      p800: p800,
      p900: p900,
      p1000: p1000,
      p1100: p1100,
      p1200: p1200,
      p1300: p1300,
      p1400: p1400,
      p1500: p1500,
      p1600: p1600,
      p1700: p1700,
      p1800: p1800,
      p1900: p1900,
      p2000: p2000,
      p2100: p2100,
      p2200: p2200,
      p2300: p2300,
      p2400: p2400,
      p2500: p2500,
      p2600: p2600,
      p2700: p2700,
      p2800: p2800,
      p2900: p2900,
      p3000: p3000,
      p3100: p3100,
      p3200: p3200,
      p3300: p3300,
      p3400: p3400,
      p3500: p3500,
      implementation,
      math,
      greedy,
      dp,
      data_structures,
      brute_force,
      constructive_algorithms,
      graphs,
      sortings,
      binary_search,
      dfs_and_similar,
      trees,
      strings,
      number_theory,
      combinatorics,
      special,
      geometry,
      bitmasks,
      two_pointers,
      dsu,
      shortest_paths,
      probabilities,
      divide_and_conquer,
      hashing,
      games,
      flows,
      interactive,
      matrices,
      string_suffix_structures,
      fft,
      graph_matchings,
      ternary_search,
      expression_parsing,
      meet_in_the_middle,
      var_2_sat,
      chinese_remainder_theorem,
      schedules,
    });
  });
});

//error routes
app.get("*", (req, res) => {
  res.render("error");
});

var PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`SERVER RUNNING AT ${PORT}`);
});
