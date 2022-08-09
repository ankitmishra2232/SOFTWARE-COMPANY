let id = $("input[name*='pkg_id']");
id.attr("readonly", "readonly");

$(".btnedit").click((e) => {
  let textvalues = displayData(e);

  let pkgname = $("input[name*='pkg_name']");
  let pkgmemory = $("input[name*='pkg_memory']");
  let pkghds = $("input[name*='pkg_hds']");

  id.val(textvalues[0]);
  pkgname.val(textvalues[1]);
  pkgmemory.val(textvalues[2]);
  pkghds.val(textvalues[3]);
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
