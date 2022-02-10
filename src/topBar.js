function topBar() {
  const tpBar = document.createElement("div");
  const tpTitle = document.createElement("h1");
  tpBar.className = "tpBar";
  tpTitle.className = "tpTitleStyle";

  tpTitle.textContent = "TODO LIST";

  tpBar.appendChild(tpTitle);

  return tpBar;
}
document.body.appendChild(topBar());

export default topBar;
