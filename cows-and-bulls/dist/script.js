function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', cows: 0, bulls: 0, number: randomInteger(10000, 99999), images: [], arraa: [], images2: [], arraa2: [], last: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let tmp = this.state.value;
    let zagad = [];
    let poluch = [];
    this.state.cows = 0;
    this.state.bulls = 0;
    while (tmp != 0)
    {
      poluch.push(tmp % 10);
      tmp /= 10;
      tmp = Math.floor(tmp);
    }
    let agg = this.state.number;
    while (agg != 0)
    {
      zagad.push(agg % 10);
      agg /= 10;
      agg = Math.floor(agg);
    }

    for (let i = 0; i < 5; ++i)
    {
      if (poluch[i] == zagad[i])
      {
        this.state.cows++;
        zagad[i] = -1;
        poluch[i] = -2;
      }
    }
    for (let i = 0; i < 5; ++i)
    {
      for (let j = 0; j < 5; ++j)
      {
        if (poluch[i] == zagad[j])
        {
          this.state.bulls++;
          zagad[j] = -1;
          break;
        }
      }
    }

    this.state.images = [];
    this.state.arraa = [];
    this.state.images2 = [];
    this.state.arraa2 = [];
    for (let y = 0; y < this.state.cows; ++y)
    {
      this.state.arraa.push(y);

    }
    this.state.images = this.state.arraa.map(image => /*#__PURE__*/React.createElement("img", { src: "https://d.newsweek.com/en/full/1561066/holstein-cows.jpg", width: "300", height: "150" }));
    for (let y = 0; y < this.state.bulls; ++y)
    {
      this.state.arraa2.push(y);

    }
    this.state.images2 = this.state.arraa2.map(image => /*#__PURE__*/React.createElement("img", { src: "https://www.thesun.co.uk/wp-content/uploads/2019/10/NINTCHDBPICT000527192832-e1569948394140.jpg", width: "300", height: "150" }));
    this.state.last = this.state.value;
    this.setState({ last: this.state.value });
    event.preventDefault();
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("label", null, "Your Number:", /*#__PURE__*/

      React.createElement("input", { type: "text", value: this.state.value, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("input", { type: "submit", value: "Submit" }), /*#__PURE__*/
      React.createElement("h1", null, "Last Submit: " + this.state.last, " "), /*#__PURE__*/
      React.createElement("h2", null, " ", "Cows: " + this.state.cows + "/5", " "), " ", this.state.images, /*#__PURE__*/
      React.createElement("h2", null, " ", "Bulls: " + this.state.bulls + "/5", " "), " ", this.state.images2)));




  }}

ReactDOM.render( /*#__PURE__*/
React.createElement(NameForm, null),
document.getElementById('root'));