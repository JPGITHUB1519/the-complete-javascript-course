/*
  Module Pattern

  IIFE(Anonymous function + autoexecuted) that returns an object
*/

// Budget Controller
var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  }

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
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

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  return {
    addItem: function(type, des, val) {
      var newItem;
      var ID;  // ID = next ID + 1

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

    deleteItem: function(type, id) {
      var ids, index;

      // create an array with all the ids
      // ids = [1, 2, 4, 6, 8];
      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      // get the index of the element
      index = ids.indexOf(id);

      if (index !== -1) {
        // remove the element from the array
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {
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

    calcPercentages: function() {
      /*
        a = 20,
        b = 10
        c = 40
        income = 100
        a = 20 / 100 = 20%
        b = 10 / 100 = 10%
        c = 40 / 100 = 40%
      */

      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function() {
      var allPerc = data.allItems.exp.map(function(cur) {
        return cur.getPercentage();
      });
      
      return allPerc
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }
    },

    testing: function() {
      console.log(data);
    }
  }

})();

// UI Controller
var UIController = (function() {
  
  var DOMstrings = {
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
    expensesPercLabel: '.item__percentage'
  };


  var formatNumber = function(num, type) {
    /*
      + or - before number
      exactly 2 decimal points
      comma separating the thousands

      2310.4567 -> 2,310.46
      2000 -> 2,000.00
    */  

    var numSplit;
    var int;
    var dec;
    
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;  
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,  // will be either inc or exp,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
      }
    },

    addListItem: function(obj, type) {
      var html;
      var newHtml;
      var element;

      // Create HTML string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // Replace the PlaceHolder with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    deleteListItem: function(selectorID) {
      // remove Element from the dom;
      /* 
        Basically the DOM does not support removing an object directly. 
        You have to go to its parent and remove it from there. 
        Javascript won't let an element commit suicide, but it does permit infanticide (XD JOKE)
      */
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFields: function() {
      var fields = [];

      // This will return NodeList
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      // Convert NodeList to array 
      fieldsArr = Array.prototype.slice.call(fields);

      // clearing fields
      fieldsArr.forEach(function(current, index, array) {
        current.value = "";
      }); 

      // Set the focus to the first element
      fieldsArr[0].focus();
    },

    displayBudget: function(obj) {
      var type;

      obj.budget > 0 ? type = 'inc' : type = 'exp';

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
      document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    displayPercentages: function(percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      }

      nodeListForEach(fields, function(current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    getDomstrings: function() {
      return DOMstrings;
    },
  }
})();



// Global APP Controller
// the model and the UI are separate modules and should not communicate each other
// this controller is for join the model and the UI
var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UICtrl.getDomstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

      // which is for older browser
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
  }

  var updateBudget = function() {
    // 1. Calculate Budget
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);
  }

  var updatePercentages = function() {
    // 1. Calculate Percentages
    budgetCtrl.calcPercentages();
    
    // 2. Read Percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with the new Percentages
    UICtrl.displayPercentages(percentages);
  }

  var ctrlAddItem = function() {
    var input;
    var newItem;

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

  var ctrlDeleteItem = function(event) {
    var itemID;
    var SplitID;
    var type;
    var ID;

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
    init: function() {
      console.log('Application has started');
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