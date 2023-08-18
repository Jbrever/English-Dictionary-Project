let input = document.querySelector(".input1");
let btn = document.querySelector(".btn");
let title = document.querySelector(".title");
let meaning1 = document.querySelector(".meaning1");
let audio = document.querySelector("audio");
let error1 = document.querySelector(".error1");
let meanResp = document.querySelector(".response");
btn.innerText = 'Search';
console.log(meanResp);

let fetchurl = async (value) => {
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;

  try {
    let api = await fetch(`${url}`).then((reslove) => {
      return reslove.json();
    });

    if (api.title) {
      error1.innerText = api.message;

      meanResp.style.display = "none";
      
      audio.style.display = "none";
    }

    title.innerText = api[0].word;

    meaning1.innerText = api[0].meanings[0].definitions[0].definition;

    audio.src = api[0].phonetics[1].audio;
    console.log(api);

    meanResp.style.display = "contents";
  
    error1.innerText = api[0].sourceUrls[0];
    
  } catch (err) {
    console.log("error" + err);
  }
};

btn.addEventListener("click", (e) => {
  if (input.value == "") {
    alert("please enter a word");
  }

  fetchurl(input.value);

  input.value = "";
});
