import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from './Header';

export default function Stamp() {
  const location = useLocation();
  const issuer = location.state;
  const [event, setEvent] = useState("");
  const [reciever, setReciever] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <Header/>
      <div>
        <h1>Org Name</h1>
      </div>
      <div>
        <input
          value={event}
          onChange={(e) => {
            setEvent(e.target.value);
          }}
        />
        <input
          value={reciever}
          onChange={(e) => {
            setReciever(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="competition">Competition</option>
          <option value="work">Work</option>
        </select>
        <button>Submit</button>
      </div>
    </>
  );
}
