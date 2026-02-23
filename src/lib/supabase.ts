import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://blsqvhepbxfpuomfdzeg.supabase.co";
const supabaseKey = "sb_publishable_iyyi6gx6kTXO1gWYRSNnLg_1PfFGwSD";

export const supabase = createClient(supabaseUrl, supabaseKey);