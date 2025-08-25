import { supabase } from "../supabaseClient.js";

export const signUpUser = async ({ email, password, username, role }) => {
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (authError) throw authError;
    const userId = authData.user?.id;
    if (!userId) throw new Error("No user ID returned.");

    const { data: profileData, error: profileError } = await supabase
      .from("users")
      .insert([
        {
          id: userId,
          username,
          email,
          role,
        },
      ])
      .select()
      .single();

    console.log("Profile Data:", profileData, "Profile Error:", profileError);
    if (profileError) throw profileError;

    return { profile: profileData };
  } catch (error) {
    return { error: error.message };
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
