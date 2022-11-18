window.addEventListener("load", solve);

function solve() {

    let inputElements = document.querySelectorAll('form input, select');
    let publishBtnEl = document.getElementById('form-btn');
    let tableBodyEl = document.getElementById('preview-list');
    let soldCarsListEl = document.getElementById('cars-list');
    
    publishBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        let carDetails = {};

        let hasEmptyInput = Array.from(inputElements).some(x => !x.value || x.value.trim() === '');

        if (hasEmptyInput) {
            return;
        }

        Array.from(inputElements).forEach(x => {
            carDetails[x.id] = x.value;
            console.log(x.value);
        });

        
        let trRowEl = document.createElement('ul');
        trRowEl.classList.add('story-info');

        

        Object.keys(carDetails).forEach(key => {
            let tdEl = document.createElement('p');
            tdEl.textContent = `${carDetails[key]}: + ${carDetails[key]}`;
            trRowEl.appendChild(tdEl);
            console.log(tdEl);            
        });
        






        let tdBtnsEl = document.createElement('td');
        let saveBtnEl = document.createElement('button');
        saveBtnEl.textContent = 'Save Story';
        saveBtnEl.classList.add('save-btn')
        //saveBtnEl.classList.add('edit')
        let editBtnEl = document.createElement('button');
        editBtnEl.textContent = 'Edit Story';
        editBtnEl.classList.add('edit-btn')
       //editBtnEl.classList.add('edit')
        let sellBtnEl = document.createElement('button');
        sellBtnEl.textContent = 'Delete Story'
        sellBtnEl.classList.add('delete-btn');
        //sellBtnEl.classList.add('sell');

        tdBtnsEl.appendChild(saveBtnEl);
        tdBtnsEl.appendChild(editBtnEl);
        tdBtnsEl.appendChild(sellBtnEl);

        trRowEl.appendChild(tdBtnsEl);
        tableBodyEl.appendChild(trRowEl);

        Array.from(inputElements).forEach(x => {
            x.value = '';
        })


        editBtnEl.addEventListener('click', (e) => {
          Array.from(inputElements).forEach(x => {
              // console.log(carDetails);
              x.value = carDetails[x.id];
          })

          tableBodyEl.removeChild(trRowEl);
      })

      sellBtnEl.addEventListener('click', (e) => {
          let liEl = document.createElement('li');
          liEl.classList.add('each-list');

          let carModelAndNameEl = document.createElement('span');
          carModelAndNameEl.textContent = carDetails.make + ' ' + carDetails.model;

          let yearEl = document.createElement('span');
          yearEl.textContent = carDetails.year;

          let profitEl = document.createElement('span');
          profitEl.textContent = Number(carDetails['selling-price']) - Number(carDetails['original-cost']);

          liEl.appendChild(carModelAndNameEl);
          liEl.appendChild(yearEl);
          liEl.appendChild(profitEl);

          soldCarsListEl.appendChild(liEl);
          totalProfit += Number(carDetails['selling-price']) - Number(carDetails['original-cost']);

          
          tableBodyEl.removeChild(trRowEl);
      })
  })
}