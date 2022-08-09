let id = $("input[name*='m_id']");
id.attr("readonly", "readonly");

$(".btnedit").click((e) => {
  let textvalues = displayData(e);

  let mname = $("input[name*='m_name']");
  let mdob = $("input[name*='m_dob']");
  let msal = $("input[name*='m_sal']");

  id.val(textvalues[0]);
  mname.val(textvalues[1]);
  mdob.val(textvalues[2]);
  msal.val(textvalues[3].replace("$", ""));
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
