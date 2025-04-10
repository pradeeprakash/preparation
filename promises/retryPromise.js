function dummyAPI() {
  return Promise.reject("Failed");
}

function retry({ cb, delay, retries } = {}) {
  if (
    typeof cb === "function" &&
    typeof delay === "number" &&
    typeof retries === "number"
  ) {
    cb()
      .then((res) => console.log("Response"))
      .catch((error) => {
        if (retries === 0) {
          console.log("Error", error);
        } else {
          console.log("Attempt", retries);
          setTimeout(() => retry({ cb, delay, retries: retries - 1 }), delay);
        }
      });
  } else {
    console.log("Pass a valid parameters");
    return;
  }
}

retry({ cb: dummyAPI, delay: 1000, retries: 5 });
