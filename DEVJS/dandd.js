//드래그 & 드롭
const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  })
})

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    const afterElement = getDragAferElement(container, e.clientX);
    const draggable = document.querySelector(".dragging");
    if(afterElement === undefined) {
      container.appendChild(draggable)
    }else {
      container.insertBefore(draggable, afterElement);
    }
  })
})

function getDragAferElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging")
  ];

  return draggableElements.reduce((child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;
    if(offset < 0 && offset > closeset.offset) {
      return { offset: offset, element: child};
    }else {
      return closeset;
    }

  }, {offset: Number.NEGATIVE_INFINITY}).element;
}