const rangeInput = document.querySelector('input[type="range"]');
const pageViews = document.getElementById("pageviews");
const price = document.getElementById("price");
const discountInput = document.getElementById("discount");

class App {
  #prices = [8, 12, 16, 24, 36];
  #views = ["10k", "50k", "100k", "500k", "1M"];
  constructor() {
    this.val = 2;

    rangeInput.addEventListener("input", this._handleInputChange.bind(this));
    discountInput.addEventListener("change", this._handleDiscount.bind(this));
  }

  _handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    this.val = target.value;

    target.style.backgroundSize =
      ((this.val - min) * 100) / (max - min) + "% 100%";
    pageViews.textContent = `${this.#views[this.val]} PAGEVIEWS`;
    this._handleDiscount();
  }

  _handleDiscount() {
    price.textContent = !discountInput.checked
      ? `$${this.#prices[this.val]}.00`
      : `$${this.#prices[this.val] * 0.75}.00`;
  }
}
const app = new App();
