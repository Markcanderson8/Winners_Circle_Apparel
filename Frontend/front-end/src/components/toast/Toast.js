import { useCallback, useEffect } from "react";
import style from "./Toast.module.css";

const Toast = ({ toastlist, position, setList }) => {
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <div className={`${style.container} ${style[position]}`}>
      {toastlist.map((toast, i) => (
        <div
          key={i}
          className={`${style.notification} ${style.toast}  ${style[position]}`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div>
            <p className={style.title}>{toast.title}</p>
            <p className={style.description}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Toast;