import { supabase } from "../supabaseClient.js";

export const getPosts = async () => {
  let { data: posts, error } = await supabase.from("posts").select("*");
  if (error) {
    console.log("Error fetching posts:", error);
    return [];
  }
  return posts;
};
