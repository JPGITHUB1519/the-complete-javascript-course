var modelModule = (function() {

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

export default modelModule;