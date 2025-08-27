import { supabase } from "../supabaseClient";

export const uploadFile = async (file) => {
  try {
    // Upload the thumbnail to Supabase Storage
    const uniqueFileName = `${Date.now()}_${file?.name || "file"}`;
    const { data, error: uploadError } = await supabase.storage
      .from("thumbnails")
      .upload(`images/${uniqueFileName}`, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type, // Important for images
      });

    if (uploadError) {
      throw uploadError;
    }

    // Get the public URL of the uploaded thumbnail
    const { data: imageData, error: urlError } = supabase.storage
      .from("thumbnails")
      .getPublicUrl(data.path);

    if (urlError) {
      throw urlError;
    }
    return imageData.publicUrl;
  } catch (error) {
    console.log("Error uploading thumbnail file:", error);
  }
};

export const uploadPost = async (
  title,
  description,
  niche,
  thumbnail_url,
  ytUrl,
  fundingGoal,
  fundersOnly
) => {
  try {
    // Insert post metadata into the database
    const { error: dbError } = await supabase.from("posts").insert([
      {
        title,
        description,
        niche,
        ytUrl,
        fundingGoal,
        fundersOnly,
        thumbnail_url,
      },
    ]);

    if (dbError) {
      throw dbError;
    }

    return { success: true };
  } catch (error) {
    console.error("Error uploading post:", error);
    return { success: false, error: error.message };
  }
};
