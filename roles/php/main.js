let id = $("input[name*='prog_id']");
id.attr("readonly", "readonly");

$(".btnedit").click((e) => {
  let textvalues = displayData(e);

  let rollname = $("input[name*='roll_name']");
  let rollstatus = $("input[name*='roll_status']");

  id.val(textvalues[0]);
  rollname.val(textvalues[1]);
  rollstatus.val(textvalues[2]);
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
