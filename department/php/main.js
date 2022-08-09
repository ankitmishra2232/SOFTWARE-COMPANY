let id = $("input[name*='dep_id']");
id.attr("readonly", "readonly");

$(".btnedit").click((e) => {
  let textvalues = displayData(e);

  let depname = $("input[name*='dep_name']");

  id.val(textvalues[0]);
  depname.val(textvalues[1]);
});

function displayData(e) {
  let id = 0;
  const td = $("#tbody tr td");
  let textvalues = [];

  for (const value of td) {
    if (value.dataset.id == e.target.dataset.id) {
      textvalues[id++] = value.textContent;
    }
  }
  return textvalues;
}
