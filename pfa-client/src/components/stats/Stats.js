import GlobalContext from "@src/globalContext";
import { useContext, useEffect } from "react";

const Stats = () => {
  const { setContext } = useContext(GlobalContext);

  useEffect(() => {
    setContext({ displayDatePicker: false});
  }, []);

  return (
    <div>stats</div>
  );
};

export default Stats;

