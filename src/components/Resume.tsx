import { useLocation } from "react-router-dom";

export default function Resume() {
  const location = useLocation();
  console.log(location.state);

  return <div></div>;
}
