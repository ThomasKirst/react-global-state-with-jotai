import { useAtom } from "jotai";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

import { currentLights } from "../../store/lights";

export default function Light({ name }) {
  const [lights, setLights] = useAtom(currentLights);

  const { id, isOn } = lights.find((light) => light.name === name);

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

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(id);
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
