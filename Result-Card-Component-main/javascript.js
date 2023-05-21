const percent = document.querySelectorAll(
  "div.summary-container > div > p > span"
);

fetch("data.json") // local data only, no malicious code...
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < percent.length; i++) {
      percent[i].innerHTML = data[i].score; // adding attack here.
    }
  });
