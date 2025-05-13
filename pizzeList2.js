var menuPizze = [
    { nome: "Biancaneve", ingredienti: "Mozzarella, olio, origano", prezzo: 5.50 },
    { nome: "Bruschetta", ingredienti: "Pomodoro a dadini, ricotta salata", prezzo: 6.00 },
    { nome: "Capricciosa", ingredienti: "Salasa, mozzarella, prosciutto cotto, funghi freschi, uovo, olio, origano", prezzo: 6.50 },
    { nome: "Deliziosa", ingredienti: "Mozzarella, funghi porcini, salsiccia, cipolla, scaglie di parmigiano, olio, origano", prezzo: 9.50 },
    { nome: "Estiva", ingredienti: "Mozzarella di bufala, rucola, ciliegino, scaglie di parmigiano, olio, origano", prezzo: 9.00 },
    { nome: "Etna", ingredienti: "Salasa, bacon, peperoni fritti, olive, uovo, olio, origano", prezzo: 7.00}
]

const button = document.getElementById('goToMenu');
const menuDiv = document.getElementById('menu_pizze');

let menuVisible = false;

button.addEventListener('click', function () {
  if (!menuVisible){
    menuDiv.innerHTML = "";

    menuPizze.forEach(pizza => {
        // Crea un div per ogni pizza
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('pizza-item'); // Aggiungiamo una classe CSS
      
        // Inseriamo il contenuto formattato
        pizzaDiv.innerHTML = `
          <strong>${pizza.nome}</strong> - €${pizza.prezzo.toFixed(2)}<br>
          <span class="ingredienti">${pizza.ingredienti}</span>
        `;
      
        // Aggiungiamo questo blocco al div principale
        menuDiv.appendChild(pizzaDiv);
      });
    
    menuDiv.style.display = 'block';
    menuDiv.scrollIntoView({ behavior: 'smooth' });

    button.textContent = "Nascondi menu";
    menuVisible = true;
  } else {
    menuDiv.style.display = 'none';
    button.textContent = "Mostra menu";
    menuVisible = false;
  }
});