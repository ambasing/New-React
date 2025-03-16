import { API_GET_DATA } from "../../../global/constants"; // ✅ 確保從 `src/global/constants.js` 讀取

const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {

  async function deleteItem() {
    submittingStatus.current = true;

    // 先取得當前 `data`
    const res = await fetch(API_GET_DATA);
    const json = await res.json();

    // ✅ 刪除特定 `id` 的資料
    const updatedData = json.data.filter(item => item.id !== id);

    // ✅ 更新 `db.json`
    await fetch(API_GET_DATA, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...json, data: updatedData }) // ✅ 只更新 `data`
    });

    // ✅ 更新 React state
    deleteData(updatedData);
    submittingStatus.current = false;
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;
