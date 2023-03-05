let finArray = ["82mp5ty", "t92pmy5", "7mau9qp", "5slp6gn"];
const regex = /^[0-9|A-H|J-N|P-Z|a-h|j-n|p-z]{7}$/;
let flag = true;
let check = false;
do {
  let finKod = window.prompt("Enter your fincode: ");
  if (regex.test(finKod)) {
    for (let i = 0; i < finArray.length; i++) {
      if (finKod.toLowerCase() == finArray[i]) {
        alert("User found. Fincode index is: " + i);
        check = true;
        flag = false;
        break;
      }
    }
    if (!check) {
      alert("finCode not found");
    }
  } else {
    alert("Wrong format");
  }
} while (flag);
