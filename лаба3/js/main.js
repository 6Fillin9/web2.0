


const burgerMenu = document.querySelector('.burgerMenu');
    const handleBurgerClick = (evt) => {
      evt.preventDefault();
      burgerMenu.classList.toggle('active');
    }
   
    burgerMenu.addEventListener('click', handleBurgerClick);




document.addEventListener('DOMContentLoaded', function () {
  const house3 = document.querySelector('.house__3');
  const house2 = document.querySelector('.house__2');
  const house1 = document.querySelector('.house__1');
  const houseLine = document.querySelector('.house__line'); 
  const houseNeighbors = document.querySelector('.house__neighbors'); 
  const houseWhy = document.querySelector('.house__why'); 

  function handleElementClick(element, textElement) {
    element.addEventListener('click', function () {
        textElement.classList.toggle('text-active');
    });
}

handleElementClick(house2, houseLine);
handleElementClick(house1, houseNeighbors);
handleElementClick(house3, houseWhy);
});


