function Calculadora() {
  this.display = document.querySelector('.display');

  this.pressEnter = () => {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.doCalc();
      }
    })
  };

  this.removeOne = () => {
    this.display.value = this.display.value.slice(0, -1)
  };

  this.doCalc = () => {
    let calc = this.display.value;

    try {
      calc = eval(calc);
      if (!calc) {
        alert('Conta inválida!')
        return
      }
      this.display.value = String(calc);
    } catch (e) {
      alert('Conta inválida!');
    }
  };

  this.cliqueBotoes = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) this.btnParaDisplay(el);
      if (el.classList.contains('btn-clear')) this.display.value = '';
      if (el.classList.contains('btn-del')) this.removeOne();
      if (el.classList.contains('btn-eq')) this.doCalc();

    })
  };

  this.btnParaDisplay = (el) => {
    this.display.value += el.innerText;
  }
  this.inicia = () => {
    this.cliqueBotoes();
  };

}


const calculadora = new Calculadora();
calculadora.inicia()