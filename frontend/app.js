setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("chatApp").classList.remove("hidden");
}, 3500);

async function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  if (!input.value) return;

  chat.innerHTML += `<div class="msg user">${input.value}</div>`;

  const res = await fetch("https://YOUR-RENDER-URL/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input.value })
  });

  const data = await res.json();
  chat.innerHTML += `<div class="msg ai">${data.reply}</div>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
