const dragble = document.querySelectorAll(".minions");
const contain = document.querySelectorAll("img");

dragble.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("droing");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("droing")
  });
})

contain.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const after = getafer(container, e.clientX);
    const draggable = document.querySelector("droing");
    if(after === undefined) {
      container.append(draggable);
    }else {
      container.insertBefore(draggable, after);
    }
  })
})

function getafer(container, x) {
  const dragEl = [
    ...container.querySelectorAll(".dragble:not(.droing)")
  ];

  return dragEl.reduce((child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;
    
    if(offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    }else {
      return closest;
    }
  }, {offset: Number.NEGATIVE_INFINITY}).element;
}