import { useAtom } from "jotai";
import { currentLights } from "../store/lights";

export function useLights() {
  const [lights, setLights] = useAtom(currentLights);

  const activeLights = lights.filter((light) => light.isOn);

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        if (light.id === id) {
          return {
            ...light,
            isOn: !light.isOn,
          };
        } else {
          return light;
        }
      })
    );
  }

  function handleLights(state) {
    setLights(
      lights.map((light) => {
        return {
          ...light,
          isOn: state === "on",
        };
      })
    );
  }

  return {
    lights,
    activeLights,
    handleLights,
    handleToggle,
  };
}
