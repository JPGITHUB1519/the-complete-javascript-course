/*
  Module Pattern

  IIFE(Anonymous function + autoexecuted) that returns an object
*/

// Budget Controller
const budgetController = (() => {

  class Expense {
    constructor(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
    }
  
    calcPercentage(totalIncome) {
      if (totalIncome > 0) {
        this.percentage = Math.round((this.value / totalIncome) * 100);
      } else {
        this.percentage = -1;
      }
    }
  
    getPercentage() {
      return this.percentage;
    }
  }

  class Income {
    constructor(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    }
  }

  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  const calculateTotal = type => {
    let sum = 0;
    data.allItems[type].forEach(cur => sum += cur.value);
    data.totals[type] = sum;
  };

  return {
    addItem: (type, des, val) => {
      let newItem;
      let ID;  // ID = next ID + 1

       // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length -1].id + 1;
      } else {
        ID = 0;
      }

      // Create new Item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val); 
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // Push it into our datastructure
      data.allItems[type].push(newItem);

      // Return new Item
      return newItem;
    },

    deleteItem: (type, id) => {
      let ids;
      let index;

      // create an array with all the ids
      // ids = [1, 2, 4, 6, 8];
      ids = data.allItems[type].map(current => current.id);

      // get the index of the element
      index = ids.indexOf(id);

      if (index !== -1) {
        // remove the element from the array
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: () => {
      // Calculate tota income and expenses
      calculateTotal('exp');
      calculateTotal('inc');
      
      // Calculate the budget: income- expenses
      data.budget = data.totals.inc - data.totals.exp;

      // Calculate the percentage of income we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calcPercentages: () => {
      data.allItems.exp.forEach(cur => cur.calcPercentage(data.totals.inc));
    },

    getPercentages: () => {
      const allPerc = data.allItems.exp.map(cur => cur.getPercentage());
      
      return allPerc;
    },

    getBudget: () => {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }
    },

    testing: () => {
      console.log(data);
    }
  }

})();

// UI Controller
const UIController = (() => {
  
  const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };


  const formatNumber = (num, type) => {
    let numSplit;
    let int;
    let dec;
    
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 3) {
      int = `${int.substr(0, int.length - 3)}, ${int.substr(int.length - 3, 3)}`;
    }

    return (type === 'exp' ? '-' : '+') + `${int}.${dec}`;  
  };


  const nodeListForEach = (list, callback) => {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value,  // will be either inc or exp,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
      }
    },

    addListItem: (obj, type) => {
      let html;
      let element;

      // Create HTML string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = `
          <div class="item clearfix" id="inc-${obj.id}">
            <div class="item__description">
              ${obj.description}
            </div>
            <div class="right clearfix">
                <div class="item__value">${formatNumber(obj.value, type)}</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
          </div>`;
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = `
          <div class="item clearfix" id="exp-${obj.id}">
            <div class="item__description">
              ${obj.description}
            </div>
            <div class="right clearfix">
                <div class="item__value">${formatNumber(obj.value, type)}</div>
                <div class="item__percentage">21%</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
          </div>`;
      }

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', html);
    },

    deleteListItem: selectorID => {
      // remove Element from the dom;
      /* 
        Basically the DOM does not support removing an object directly. 
        You have to go to its parent and remove it from there. 
        Javascript won't let an element commit suicide, but it does permit infanticide (XD JOKE)
      */
      const el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFields: () => {
      let fields = [];

      // This will return NodeList
      fields = document.querySelectorAll(`${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`);

      // Convert NodeList to array 
      fieldsArr = Array.prototype.slice.call(fields);

      // clearing fields
      fieldsArr.forEach((current, index, array) => current.value = ""); 

      // Set the focus to the first element
      fieldsArr[0].focus();
    },

    displayBudget: obj => {
      let type;

      obj.budget > 0 ? type = 'inc' : type = 'exp';

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
      document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = `${obj.percentage}%`;
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    displayPercentages: percentages => {
      const fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      nodeListForEach(fields, (current, index) => {
        if (percentages[index] > 0) {
          current.textContent = `${percentages[index]}%`;
        } else {
          current.textContent = '---';
        }
      });
    },

    displayMonth: () => {
      let now;
      let months;
      let month;
      let year;

      now = new Date();
      months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = `${months[month]} ${year}`;
    },

    changedType: () => {
      const fields = document.querySelectorAll(
        `${DOMstrings.inputType}, 
        ${DOMstrings.inputDescription},
        ${DOMstrings.inputValue}`
      );

      nodeListForEach(fields, cur => cur.classList.toggle('red-focus'));

      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
    },

    getDomstrings: () => {
      return DOMstrings;
    },
  }
})();



// Global APP Controller
// the model and the UI are separate modules and should not communicate each other
// this controller is for join the model and the UI
const controller = ((budgetCtrl, UICtrl) => {
  const setupEventListeners = () => {
    const DOM = UICtrl.getDomstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', event => {
      // which is for older browser
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
  }

  const updateBudget = () => {
    // 1. Calculate Budget
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    const budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);
  }

  const updatePercentages = () => {
    // 1. Calculate Percentages
    budgetCtrl.calcPercentages();
    
    // 2. Read Percentages from the budget controller
    const percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with the new Percentages
    UICtrl.displayPercentages(percentages);
  }

  const ctrlAddItem = () => {
    let input;
    let newItem;

    // 1. Get the field input data
    input = UICtrl.getInput();

    // data validation
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear the fields
      UICtrl.clearFields();

      // 5. Calculate, update and Display the budget on the UI
      updateBudget();

      // 6. Calculate and update percentages
      updatePercentages();
    }
  };

  const ctrlDeleteItem = event => {
    let itemID;
    let SplitID;
    let type;
    let ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      // inc1 or exp1
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. Delete Item from the datastructure
      budgetCtrl.deleteItem(type, ID);

      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemID);

      // 3. Update and show the new budget
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();
    }

  }

  return {
    init: () => {
      console.log('Application has started');
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      })
      setupEventListeners();
    },
  }
})(budgetController, UIController);

controller.init();