export const API_HOST = "http://localhost:5000";
export const API_GET_DATA = `${API_HOST}/posts/1`; // ✅ 確保只宣告一次
export const API_DELETE_ITEM = `${API_GET_DATA}/data`; // 讓刪除請求指向 data