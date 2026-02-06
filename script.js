document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", (e)=>{
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:"smooth", block:"start"});
    history.replaceState(null, "", id);

    // close drawer if open
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("drawerBackdrop");
document.getElementById("tocOpen").addEventListener("click", ()=>{
  drawer.classList.add("open");
  backdrop.classList.add("open");
});
document.getElementById("tocClose").addEventListener("click", ()=>{
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
});
backdrop.addEventListener("click", ()=>{
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
});
