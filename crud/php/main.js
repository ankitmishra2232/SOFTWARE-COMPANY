let id = $("input[name*='prog_id']");
id.attr("readonly", "readonly");

$(".btnedit").click((e) => {
  let textvalues = displayData(e);

  let progname = $("input[name*='prog_name']");
  let progadd = $("input[name*='prog_add']");
  let progsal = $("input[name*='prog_sal']");
  let progdob = $("input[name*='prog_dob']");
  let progdoj = $("input[name*='prog_doj']");
  let proggender = $("input[name*='prog_gender']");

  id.val(textvalues[0]);
  progname.val(textvalues[1]);
  progadd.val(textvalues[2]);
  progsal.val(textvalues[3].replace("$", ""));
  progdob.val(textvalues[4]);
  progdoj.val(textvalues[5]);
  proggender.val(textvalues[6]);
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
