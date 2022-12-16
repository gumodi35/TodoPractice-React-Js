import { withStorageListener } from "./withStorageListener"

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) { 
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container"> 
        <p>Parece que cambiaste tus TODOS en otra pestaña o ventana del nevegado</p>
        <p>¿Quieres sincronizar tus TODOS?</p>
        <button 
          className="TodoForm-button TodoForm-button--add"
          onClick={toggleShow}
        >
          Yes!
        </button>
       </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };
 