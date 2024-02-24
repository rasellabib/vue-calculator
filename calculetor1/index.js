const data = () => {
  const myData = {
    output: "0",
  };
  return myData;
};

const methods = {
  displayShowButton(event) {
    const value = event.target.value;
    if (this.output === "0") {
      this.output = value;
    } else {
      this.output += value;
    }
  },
  handleClear() {
    this.output = "0";
  },
  backspace() {
    if (this.output.length == 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  },
  calculate() {
    this.output = eval(this.output).toString();
  },
};

const app = Vue.createApp({ data, methods });

app.mount("#app");
