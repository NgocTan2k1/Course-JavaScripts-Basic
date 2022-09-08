var headingElement = document.querySelector('.heading');
console.log("headingElement:", headingElement);
console.log("headingElement.innerText\t:", headingElement.innerText);
console.log("headingElement.textContent\t:", headingElement.textContent);

console.log("");
console.log("========== Overwrite ==========");
headingElement.innerText = "Heading Test innerText & textContent";
console.log("headingElement.innerText\t:", headingElement.innerText);
headingElement.innerText = "Heading test innerText & textContent";
console.log("headingElement.textContent\t:", headingElement.textContent);

headingElement = document.querySelectorAll('.heading-test');
console.log("");
console.log("=== Different between innerText and textContent ==="); 

console.log("headingElement.innerText\t:", headingElement[0].innerText);
console.log("headingElement.textContent\t:", headingElement[1].textContent);

console.log("");
console.log("========== Different Overwrite  ==========");
headingElement[0].innerText = `





<i>Heading TEST innerText</i>






`;

headingElement[1].textContent = `








<i>Heading TEST textContent</i>







`;



