import { supabase } from "Config.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) return alert("Fill all fields");

  const { data: admin, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .eq("role", "admin")
    .single();

  if (error || !admin) return alert("Invalid credentials");

  localStorage.setItem("adminLoggedIn", "true");
  window.location.href = "dashboard.html";
});
