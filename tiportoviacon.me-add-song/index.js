var song = {
  id: "",
  "album-id": "",
  "album-name": "",
  title: "",
  image: "",
  youtube: "",
  text: "",
  spotify: "",
  objectID: ""
};

document.getElementById("submit").addEventListener(
  "click",
  e => {
    song["id"] = document.getElementById("id-canzone").value;
    song["album-id"] = document.getElementById("id-album").value;
    song["album-name"] = document.getElementById("album-name").value;
    song["title"] = document.getElementById("title").value;
    song["image"] = document.getElementById("image").value;
    song["youtube"] = document.getElementById("youtube").value;
    song["spotify"] = document.getElementById("spotify").value;
    song["objectID"] = document.getElementById("id-canzone").value;

    var text = document.getElementById("text").value.replace(/\n/g, " \n ");

    song["text"] = text;

    print(song);
  },
  false
);

function print(v) {
  document.getElementById("result").innerText = JSON.stringify(v, null, 4);
}
