import { supabase } from "../supabaseClient.js";

const resolveErrorMessage = (error) => {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (error?.message) return error.message;
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
};

const withTimeout = async (promise, ms = 15000) => {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(
        new Error(
          "Signup is taking too long. Check your network and redirect URL settings."
        )
      );
    }, ms);
  });
  try {
    const result = await Promise.race([promise, timeout]);
    clearTimeout(timeoutId);
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

export const signUpUser = async ({ email, password, username, role }) => {
  try {
    const health = await withTimeout(
      fetch(import.meta.env.VITE_SUPABASE_URL + "/auth/v1/health", {
        headers: { apikey: import.meta.env.VITE_SUPABASE_ANON_KEY },
      })
    );
    if (!health.ok) throw new Error("Supabase health failed: " + health.status);

    let { data: authData, error: authError } = await withTimeout(
      supabase.auth.signUp({
        email,
        password,
      })
    );

    if (authError) throw authError;

    const { data, error } = await supabase
      .from("users")
      .insert([{ id: authData.user.id, username, email, role }])
      .select();

    console.log("initial", email, password, username, role);
    console.log("after", data, error);
    if (error) throw error;
    return { profile: authData.user };
  } catch (error) {
    let message = resolveErrorMessage(error);
    if (message.toLowerCase().includes("already registered")) {
      message =
        "Email already registered. Try logging in or check your confirmation email.";
    }
    console.error("Signup error:", error);
    return { error: message };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    return { session: data.session };
  } catch (error) {
    return { error: error.message };
  }
};

// ======== Google OAuth Login/Signup ========
export const loginWithGoogle = () => {
  const { error } = supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin,
    },
  });
  if (error) {
    alert("Error signing in with Google: " + error.message);
  }
};

export const signUpWithGoogle = () => {
  const { error } = supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin,
    },
  });
  if (error) {
    alert("Error signing in with Google: " + error.message);
  }
};
