import { getDatabase, onValue, push, ref, set } from "firebase/database";
import app from "./firebaseconfig";

const db = getDatabase(app);

export const sendData = (nodeName: string, data: any) => {
  data.id = push(ref(db, `${nodeName}`)).key;

  const reference = ref(db, `${nodeName}/${data.id}`);
  console.log(data.id);
  set(reference, data);
};

export const getData = (nodeName: string, id?: any) => {
  const reference = ref(db, `${nodeName}/${id ? id : ""}`);
  onValue(reference, (dt) => {
    console.log(dt.val());
  });
};
