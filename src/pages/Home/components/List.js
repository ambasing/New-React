import Item from "./Item"; // ✅ 確保 `Item` 被正確引入

const List = ({ listData = [], deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.length > 0 ? (
        listData.map((item) => {
          const { note, date, time, id } = item;
          return (
            <Item
              key={id}
              id={id}
              note={note || "無標題"} // 避免 undefined
              date={date || "未設定"} // 避免 undefined
              time={time || "未設定"} // 避免 undefined
              deleteData={deleteData}
              submittingStatus={submittingStatus}
            />
          );
        })
      ) : (
        <p>暫無備忘錄</p>
      )}
    </div>
  );
};

export default List; // ✅ 確保 `export default List;`
