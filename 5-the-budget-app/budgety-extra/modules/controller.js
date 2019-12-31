import modelModule from './model.js';
import viewModule from './view.js';
import { USE_LOCAL_STORAGE } from './constants.js';

// Global APP Controller
// the modelModule and the UI are separate modules and should not communicate each other
// this controller is for join the modelModule and the UI
var controller = (function(model, view) {
  var setupEventListeners = function() {
    var DOM = view.getDomstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      // which is for older browser
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    // ESC key does not work for keypress event. So this is a fix for that
    // for more info look on https://github.com/electron/electron/issues/2264
    document.addEventListener('keyup', function(event) {
      if (event.keyCode === 27 || event.which === 27) {
        view.clearFields();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.inputType).addEventListener('change', view.changedType);
    document.querySelector(DOM.hardResetBtn).addEventListener('click', ctrlHardReset);
  }

  var updateBudget = function() {
    // 1. Calculate Budget
    model.calculateBudget();

    // 2. Return the budget
    var budget = model.getBudget();

    // 3. Display the budget on the UI
    view.displayBudget(budget);
  }

  var updatePercentages = function() {
    // 1. Calculate Percentages
    model.calcPercentages();
    
    // 2. Read Percentages from the budget controller
    var percentages = model.getPercentages();

    // 3. Update the UI with the new Percentages
    view.displayPercentages(percentages);
  }

  var ctrlAddItem = function() {
    var input;
    var newItem;

    // 1. Get the field input data
    input = view.getInput();

    // data validation
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      newItem = model.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      view.addListItem(newItem, input.type);

      // 4. Clear the fields
      view.clearFields();

      // 5. Calculate, update and Display the budget on the UI
      updateBudget();

      // 6. Calculate and update percentages
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function(event) {
    var itemID;
    var splitID;
    var type;
    var ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      // inc1 or exp1
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. Delete Item from the datastructure
      model.deleteItem(type, ID);

      // 2. Delete the item from the UI
      view.deleteListItem(itemID);

      // 3. Update and show the new budget
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();
    }
  }

  var ctrlHardReset = function() {
    view.clearItems();
    model.hardResetData();
  };

  // Sync the data with localStorage and Update the UI
  var loadDataFromLocalStorage = function() {
    model.syncDataFromLocalStorage();

    var incomes = model.getIncomes();
    var expenses = model.getExpenses();

    incomes.forEach(function(value) {
      view.addListItem(value, 'inc');
    });

    expenses.forEach(function(value) {
      view.addListItem(value, 'exp');
    });

    updateBudget();
    updatePercentages();
  };

  return {
    init: function() {
      console.log('Application has started');
      if (USE_LOCAL_STORAGE) {
        loadDataFromLocalStorage();
      } else {
        view.displayBudget({
          budget: 0,
          totalInc: 0,
          totalExp: 0,
          percentage: -1
        });
      }

      view.displayMonth();
      setupEventListeners();
    },
  }
})(modelModule, viewModule);

export default controller; 