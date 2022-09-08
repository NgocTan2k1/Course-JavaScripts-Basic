function Validator(formSelector) {

    var _this = this;

    function getParent(element, selector) {
        while (element.parentElement) {   
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var formRules = {};
    var validatorRules = {

        // if it "has" error => return `errormessage`
        // if it "doesn't have" error => return undefined
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },

        email: function(value) {
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regax.test(value) ? undefined : 'Vui lòng nhập email'
        },

        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`;
            };
        },

        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            };
        },
    }


    //Get form element in DOM from "formSelector" and save into variable "formElement"
    var formElement = document.querySelector(formSelector);
    
    //Handling when formElement is exist
    if (formElement) {

        // Get all tag has atributes with name are 'name' and 'rules' 
        var inputs = formElement.querySelectorAll('[name][rules]');

        // Loop input 
        for(var input of inputs) {

            //Get value of attribute rules: required, min:6, email, ...
            var rules = input.getAttribute('rules').split('|');

            // loop value of attribute rules: required, min:6, email, ...
            for(var rule of rules) {

                //check min:6, max:18, ...
                var isRuleHasValue = rule.includes(':');

                // create variable ruleInfo;
                var ruleInfo;

                // create variable ruleFunc;
                var ruleFunc;

                //if true
                if (isRuleHasValue) {

                    // split: ruleInfo = ['min', '6'], ['max', '18'], ...
                    ruleInfo = rule.split(':');

                    // overwrite rule = ruleInfo[0] = 'min'
                    rule = ruleInfo[0];

                    // assign property of object validatorRules have name is value of "rule"
                    ruleFunc = validatorRules[rule];

                    // run function in function
                    // ruleFunction will receive value return of
                    ruleFunc = ruleFunc(ruleInfo[1])

                } else {
                    ruleFunc = validatorRules[rule];
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }

            //Listener event handlers
            input.onblur = handleValidate;
            input.oninput = handleClearErrors;

        }

        // function to handle validate
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;

            for(var rule of rules) {
                errorMessage = rule(event.target.value);
                if(errorMessage) {
                    break;
                }
            }

            // if it has error
            if(errorMessage) {

                // get tag parent of tag present => save into variable 'formGroup'
                var formGroup = getParent(event.target, '.form-group');

                //  if not exist => return (out function handleValidate)
                if(!formGroup) return;
                //else add class = "invalid" for formGroup, tag contain value 
                formGroup.classList.add('invalid');

                // querySelector from formGroup to tag has class = "form-message"
                // => save into variable 'formMessage'
                var formMessage = formGroup.querySelector('.form-message');

                

                // if exist
                if(formMessage) { 
                    formMessage.innerText = errorMessage;
                }
            }

            //return false if it has error
            return !errorMessage;
        };


        // function clear error message when input data
        function handleClearErrors(event) {
            // get tag parent of tag present => save into variable 'formGroup'
            var formGroup = getParent(event.target, '.form-group');

            // if exist class = "invalid" in tag has class = "form-group"
            if(formGroup.classList.contains('invalid')) {

                // remove class = "invalid"
                formGroup.classList.remove('invalid');

                //
                var formMessage = formGroup.querySelector('.form-message');

                // if exist
                if(formMessage) { 
                    // delete text of tag has class = 'form-message'
                    formMessage.innerText = '';
                }
            }
        };


    }

    formElement.onsubmit = function(event) {
        event.preventDefault();

        // this.onSubmit();

        // Get all tag has atributes with name are 'name' and 'rules' 
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        for(var input of inputs) {
            //function handleValidate(event) {}
            //    event.target.name <=> [{}.target].name : get tag "input" 
            // if it has errorMessage
            //    handleValidate({ target: input })  return false 
            // => !handleValidate({ target: input }) return true
            if (!handleValidate({ target: input })) {
                
                // if it has error
                isValid = false;
            }
        }


        //when not error => isValid = true => submit form
        if(isValid) {

            if(typeof _this.onSubmit === 'function') {

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
                }, {});

                _this.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }

    }

    // console.log(formRules);
}



