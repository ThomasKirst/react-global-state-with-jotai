import Link from "../components/Link";
import { useAtom } from "jotai";

import { currentLights } from "../store/lights";

export default function HomePage() {
  const [lights, setLights] = useAtom(currentLights);

  const activeLights = lights.filter((light) => light.isOn);

  return (
    <div>
      <h1>Home</h1>
      <p>{activeLights.length} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
