import { useLocation } from "react-router-dom";
import Header from './Header'

export default function Resume() {
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <Header/>    
    </>
  );
}
