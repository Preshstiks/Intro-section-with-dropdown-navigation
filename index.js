var Menu = document.querySelector('.menu-icon');
var Close = document.querySelector('.close-icon');
var Nav = document.querySelector('nav');
var Features = document.querySelector('.main-features');
var Company = document.querySelector('.main-company');
var FeaturesContent = document.querySelector('.features');
var CompanyContent = document.querySelector('.company');

Menu.addEventListener('click', function(){
    Nav.classList.add('show');
    document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
});
Close.addEventListener('click', function(){
    Nav.classList.remove('show');
    document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 98%)';
});
Features.addEventListener('click', function(){
    FeaturesContent.classList.toggle('eve');
});
Company.addEventListener('click', function(){
    CompanyContent.classList.toggle('adam');
})