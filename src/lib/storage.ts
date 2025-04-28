
import { supabase } from "@/integrations/supabase/client";

export const getPublicImageUrl = (path: string) => {
  const { data } = supabase.storage.from('website-assets').getPublicUrl(path);
  return data.publicUrl;
};

export const uploadImage = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from('website-assets')
    .upload(path, file);

  if (error) {
    console.error('Error uploading file:', error);
    throw error;
  }

  return getPublicImageUrl(path);
};
