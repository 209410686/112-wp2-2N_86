import supabase from './supabase';
import supabase, { supabaseUrl } from './supabase';

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from('booking_86')
    .select('*, cabin_86(*),guest_86(*)')
    .eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
};
