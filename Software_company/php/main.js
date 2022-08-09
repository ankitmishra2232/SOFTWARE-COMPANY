let id = $("input[name*='proj_id']");
id.attr("readonly", "readonly");

$(".btnedit").click((e) => {
  let textvalues = displayData(e);

  let projname = $("input[name*='proj_name']");
  let projcost = $("input[name*='proj_cost']");
  let projdos = $("input[name*='proj_dos']");

  id.val(textvalues[0]);
  projname.val(textvalues[1]);
  projcost.val(textvalues[2].replace("$", ""));
  projdos.val(textvalues[3]);
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
