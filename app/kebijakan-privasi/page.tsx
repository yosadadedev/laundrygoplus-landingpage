import { permanentRedirect } from "next/navigation";
import { PRIVACY_URL } from "../site";

// The legal texts live with the app (packages/shared/src/legal.ts) and are served by the API,
// so the app, Google and the stores all link the same page. Old links land there.
export default function Page() {
  permanentRedirect(PRIVACY_URL);
}
