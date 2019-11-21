// file where i put the code related to sortable package
import Sortable from 'sortablejs';
// import the code of sortable library that is located inside of my node modules
// you can acces the node modules by doing ll -a
// go inside the node modules
// ls to list of all the packages

const initSortable = () => {
  const list = document.querySelector('#results');
  Sortable.create(list, {
  ghostClass: "ghost",
  animation: 300,
  onEnd: (event) => {
    alert(`${event.oldIndex} moved to ${event.newIndex}`);
  }
  }); // Sortable.create come form the doc
};

export { initSortable };
