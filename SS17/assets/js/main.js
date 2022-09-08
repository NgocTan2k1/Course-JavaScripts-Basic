function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            } 

            element = element.parentElement;
        };
    };

    var selectorRules = {};


    //
    function Validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        //var errorMessage = getParent(inputElement, '.form-group'); 

        //Get all rule
        var rules = selectorRules[rule.selector];

        //Loop to find rule 
        for(var i = 0; i < rules.length; i++) {
            switch(inputElement.type)   {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            
            if(errorMessage) { break; }
        }

        if (errorMessage) { 
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }


    // Get Element of Form
    var formElement = document.querySelector(options.form)
    if (formElement) {

        formElement.onsubmit = function(event) {
            event.preventDefault();

            var isFormValid = true; 
            
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = Validate(inputElement, rule);

                if (!isValid) {
                    isFormValid = false;
                }
                

                
            });

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        switch (input.type) {
                            case 'radio':
                                if (input.matches(':checked')) {
                                    values[input.name] = input.value;
                                }
                                break;
                            case 'checkbox':
                                if (input.matches(':checked')) {
                                    if (Array.isArray(values[input.name])){
                                        values[input.name].push(input.value);
                                    } else {
                                        values[input.name] = [input.value];
                                    }
                                }
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {})
                    
                    options.onSubmit(formValues);
                } else {

                }
            }
        }


        // Handle loop rules (blur, input)
        options.rules.forEach(function(rule) {
            //save rules for every input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }


            var inputElements = formElement.querySelectorAll(rule.selector);
            
            Array.from(inputElements).forEach(function(inputElement) {
                if (inputElement) {
                    // handle when blur
                    inputElement.onblur = function() {
                        Validate(inputElement, rule);
                    }
    
                    // handle when input
                    inputElement.oninput = function() {
                        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                        errorElement.innerText = '';
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    }
                }
            });

            
        })
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || "Vui lòng nhập lại"
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regax.test(value) ? undefined : message || "Đây không phải là Email"
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmedValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmedValue() ? undefined : message || 'Giá trị nhập vào không đúng';
        }
    }
}    
