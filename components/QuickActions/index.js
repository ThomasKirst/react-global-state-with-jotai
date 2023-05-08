import { useAtom } from "jotai";

import styled from "styled-components";
import Button from "../Button";

import { currentLights } from "../../store/lights";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const [lights, setLights] = useAtom(currentLights);

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

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleLights("off");
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleLights("on");
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
