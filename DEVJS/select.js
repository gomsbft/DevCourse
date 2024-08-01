const selects = document.getElementById("major");
selects.addEventListener("change", (e) => {
  document.getElementById("check-text").innerHTML = "내가 선택한 학과는 " + e.target.value + " 입니다."
});

const selected = document.querySelector("input[name='subject']:checked");
selected.addEventListener("click", (e) => {
  document.getElementById("check-radio").innerHTML = "내가 선택한 분야는 " + e.target.value + " 입니다."
})

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function() {
  const userName = document.getElementById("userName").value;

  const majorSelect = document.getElementById("major");
  const selectedMajor = majorSelect.value || "선택되지 않음";

  const selected = document.querySelector("input[name='subject']:checked");
  const subjectValue = selected.value || "선택되지 않음";

  const selectedStudy = document.querySelector("input[name='study']:checked");
})
