import { supabase } from "./config.js";


// ---------- SIGN UP ----------
const signupForm = document.querySelector("#signup-form button");
if (signupForm) {
  signupForm.addEventListener("click", async () => {
    const email = document.querySelector("#signup-form input[type='email']").value;
    const password = document.querySelector("#signup-form input[type='password']").value;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Sign Up Successful! Now Sign In Please.");
    showForm("signin"); // switch form
  });
}

// ---------- SIGN IN ----------
const signinForm = document.querySelector("#signin-form button");
if (signinForm) {
  signinForm.addEventListener("click", async () => {
    const email = document.querySelector("#signin-form input[type='email']").value;
    const password = document.querySelector("#signin-form input[type='password']").value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    // redirect to thankyou page
    window.location.href = "thankyou.html";
  });
}
