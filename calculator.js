var calculator = {
    value: 0,
    clear: function() {
        this.value = 0;
        console.log('Total has been cleared.')
    },

    add: function(num1, num2 = 0) {
        let result = num1 + num2;
        this.value = this.value + result;
        console.log('Result = ' + result);
        console.log('Total = ' + this.value);
    },

    multiply: function(num1, num2 = 1) {
        let result = num1 * num2;
        if (this.value === 0) {
            this.value = num1 * num2;
        } else {
        this.value = this.value * num1 * num2;
        }
        console.log('Result = ' + result);
        console.log('Total = ' + this.value);        


    },

    divide: function(num1, num2 = 1) {
        if (num2 === 0) {
            console.log("YOU FOOL!!! You can't divide by 0!")
        } else {
        let result = num1 / num2;
        if (this.value === 0) {
            this.value = num1 / num2;
        } else {
        this.value = this.value / num1 / num2;
        }
        console.log('Result = ' + result);
        console.log('Total = ' + this.value);
    }
    },

    subtract: function(num1, num2 = 0) {
        let result = num1 - num2;
        this.value = this.value - num1 - num2;
        console.log('Result = ' + result);
        console.log('Total = ' + this.value);
    },

    exponents: function(num, exp = 1) {
        let result = num ** exp;
            console.log(arguments)
        if (arguments.length === 1) {
            this.value = this.value ** num;
        } else {
        this.value = this.value ** exp;
        }
        console.log('Result = ' + result);
        console.log('Total = ' + this.value);
    }
}
