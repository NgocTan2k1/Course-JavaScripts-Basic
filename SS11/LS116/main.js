var title = 'Responsive web design';
var courses = ['JavaScript', 'PHP', 'Ruby'];

console.log('==================== String ====================');
console.log('title.includes(\'Responsive\')\t\t:', title.includes('Responsive'));
console.log('title.includes(\'Responsive\', 1)\t\t:', title.includes('Responsive', 1));
console.log('title.includes(\'web\', 0)\t\t\t:', title.includes('web', 0));
console.log('title.includes(\'design\', -5)\t\t:', title.includes('design', -5));
console.log('===================== Array ====================');
console.log('courses.includes(\'JavaScript\')\t\t:', courses.includes('JavaScript'));
console.log('courses.includes(\'HTML&CSS\', 1)\t\t:', courses.includes('HTML&CSS', 1));
console.log('courses.includes(\'JavaScript\', 1)\t:', courses.includes('JavaScript', 10));
console.log('courses.includes(\'JavaScript\', -3)\t:', courses.includes('JavaScript', -3));
