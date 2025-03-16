import { useState } from "react"; 
import { v4 } from "uuid";
import { API_GET_DATA } from "../../../global/constants"; // ✅ 確保從 `src/global/constants.js` 讀取

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  async function addItem() {
    submittingStatus.current = true;

    const newItem = {
      id: v4(), // ✅ 使用 `uuid` 產生唯一 ID
      note,
      date,
      time,
    };

    // 1️⃣ **先取得當前 `data`**
    const res = await fetch(API_GET_DATA);
    const json = await res.json();

    // 2️⃣ **把新資料加入 `data` 陣列**
    const updatedData = [newItem, ...json.data];

    // 3️⃣ **用 `PUT` 更新 `db.json`**
    await fetch(API_GET_DATA, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...json, data: updatedData }) // ✅ 只更新 `data`
    });

    // 4️⃣ **更新 React state**
    add(updatedData);
    submittingStatus.current = false;

    // 5️⃣ **清空輸入框**
    setNote("");
    setDate("");
    setTime("");
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
