// document.getElementById("myinput").oninput = function() {
//   var value = (this.value-this.min)/(this.max-this.min)*100
//   this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
// };


const root = document.querySelector(":root")
const inputSlider = document.getElementById("myinput")
const pageviews = document.querySelector(".pageviews")
const price = document.querySelector(".price")
const sliderIcon = document.querySelector(".slider-icon")



inputSlider.oninput = ( () => {
  let value = inputSlider.value
  pageviews.textContent = `${value}K`
  let tempPrice = parseFloat(value) * .16
  price.textContent = `$${tempPrice.toFixed(2)}`
  // sliderIcon.style.left = (value/2)+ "%"
  root.style.setProperty('--range-progress', `${value/2}%`)
})