import { permanentRedirect } from "next/navigation"

/**
 * The Abu Dhabi hub lives at /locations/abu-dhabi-musaffah (its URL predates
 * the district pages). This path exists only as the parent of
 * /locations/abu-dhabi/[area], so send anyone who trims the URL to the hub.
 */
export default function AbuDhabiIndex() {
  permanentRedirect("/locations/abu-dhabi-musaffah")
}
