const form = document.querySelector("form");
const search = document.querySelector("input");
const username = document.querySelector("#username");
const average = document.querySelector("#average");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  username.textContent = "Looking for users...";
  const userID = search.value;
  const url = "http://localhost:3000/data/?id=" + userID + "";
  fetch(url).then((response) => {
    console.log(
      response.json().then((data) => {
        if (data.error) {
          username.textContent = data.error;
        } else {
          username.textContent = "User found: "+ data.ID;
          data.average = Number((data.average).toFixed(2));
          average.textContent = data.average;
          var ctx = document.getElementById("myChart");
          var myChart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: [
                "800",
                "900",
                "1000",
                "1100",
                "1200",
                "1300",
                "1400",
                "1500",
                "1600",
                "1700",
                "1800",
                "1900",
                "2000",
                "2100",
                "2200",
                "2300",
                "2400",
                "2500",
                "2600",
                "2700",
                "2800",
                "2900",
                "3000",
                "3100",
                "3200",
                "3300",
                "3400",
                "3500",
              ],
              datasets: [
                {
                  label: "Number of solved",
                  data: [
                    data.p800,
                    data.p900,
                    data.p1000,
                    data.p1100,
                    data.p1200,
                    data.p1300,
                    data.p1400,
                    data.p1500,
                    data.p1600,
                    data.p1700,
                    data.p1800,
                    data.p1900,
                    data.p2000,
                    data.p2100,
                    data.p2200,
                    data.p2300,
                    data.p2400,
                    data.p2500,
                    data.p2600,
                    data.p2700,
                    data.p2800,
                    data.p2900,
                    data.p3000,
                    data.p3100,
                    data.p3200,
                    data.p3300,
                    data.p3400,
                    data.p3500,
                  ],
                  backgroundColor: [
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                  ],
                  borderColor: [
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                    "rgba(0, 0, 255, 0.7)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });

          let implementation = data.implementation,
            math = data.math,
            greedy = data.greedy,
            dp = data.dp,
            data_structures = data.data_structures,
            brute_force = data.brute_force,
            constructive_algorithms = data.constructive_algorithms,
            graphs = data.graphs,
            sortings = data.sortings,
            binary_search = data.binary_search,
            dfs_and_similar = data.dfs_and_similar,
            trees = data.trees,
            strings = data.strings,
            number_theory = data.number_theory,
            combinatorics = data.combinatorics,
            special = data.special,
            geometry = data.geometry,
            bitmasks = data.bitmasks,
            two_pointers = data.two_pointers,
            dsu = data.dsu,
            shortest_paths = data.shortest_paths,
            probabilities = data.probabilities,
            divide_and_conquer = data.divide_and_conquer,
            hashing = data.hashing,
            games = data.games,
            flows = data.flows,
            interactive = data.interactive,
            matrices = data.matrices,
            string_suffix_structures = data.string_suffix_structures,
            fft = data.fft,
            graph_matchings = data.graph_matchings,
            ternary_search = data.ternary_search,
            expression_parsing = data.expression_parsing,
            meet_in_the_middle = data.meet_in_the_middle,
            var_2_sat = data.var_2_sat,
            chinese_remainder_theorem = data.chinese_remainder_theorem,
            schedules = data.schedules;

          var ctx = document.getElementById("circularChart");
          var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
              labels: [
                "implementation",
                "math",
                "greedy",
                "dp",
                "data_structures",
                "brute_force",
                "constructive_algorithms",
                "graphs",
                "sortings",
                "binary_search",
                "dfs_and_similar",
                "trees",
                "strings",
                "number_theory",
                "combinatorics",
                "special",
                "geometry",
                "bitmasks",
                "two_pointers",
                "dsu",
                "shortest_paths",
                "probabilities",
                "divide_and_conquer",
                "hashing",
                "games",
                "flows",
                "interactive",
                "matrices",
                "string_suffix_structures",
                "fft",
                "graph_matchings",
                "ternary_search",
                "expression_parsing",
                "meet_in_the_middle",
                "var_2_sat",
                "chinese_remainder_theorem",
                "schedules",
              ],
              datasets: [
                {
                  label: "CF Anaylser",
                  data: [
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
                  ],
                  backgroundColor: [
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                    "rgb(255, 99, 132)",
                    "rgb(25, 99, 132)",
                  ],
                  hoverOffset: 4,
                },
              ],
            },
          });
        }
      })
    );
  });
});
