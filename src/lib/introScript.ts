import { INTRO_SEEN_HTML_ATTRIBUTE, INTRO_SEEN_STORAGE_KEY } from "@/constants/intro";

/**
 * Inline script run in <head> before first paint. If the intro was already seen,
 * it flags <html> so styles/intro.css hides the overlay with no flash.
 */
export const INTRO_SEEN_SCRIPT = `try{if(sessionStorage.getItem(${JSON.stringify(
  INTRO_SEEN_STORAGE_KEY,
)})){document.documentElement.setAttribute(${JSON.stringify(
  INTRO_SEEN_HTML_ATTRIBUTE,
)},"")}}catch(e){}`;
