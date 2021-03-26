import Box from "@material-ui/core/Box";
import TimerCard from "../components/TimerCard";
import { RecoilRoot } from "recoil";

export default function Timer() {
  return (
    <Box width="50%" m={1}>
      <RecoilRoot>
        <TimerCard />
      </RecoilRoot>
    </Box>
  );
}
