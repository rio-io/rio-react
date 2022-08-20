export default function Stamp() {
  return (
    <>
        <div>
            <h1>
                Org Name
            </h1>
        </div>
        <div>
            <form action="/send-data-here" method="post">
                <label>Event:</label>
                <input type="text" id="event" name="event"/>
                <label>Receiver's Wallet ID:</label>
                <input type="text" id="last" name="last"/>
                <select>
                    <option value="competition">Competition</option>
                    <option value="work">Work</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}
