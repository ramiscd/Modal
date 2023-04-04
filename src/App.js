import Modal from "react-modal";
import { useState } from "react";
import "./styles.css";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Conteiner">
      <button onClick={openModal}>openModal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemple Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>Hello - I am a modal! </h2>
        <hr />
        <p>
          Proin nisi dui, mollis nec lobortis et, hendrerit ut magna. Etiam
          feugiat suscipit gravida. Suspendisse interdum, risus id egestas
          hendrerit, eros lectus lacinia nibh, ut vulputate est ipsum vitae
          justo. Nulla dui augue, mollis quis nisl ut, volutpat pretium lacus.
          Phasellus lacinia risus purus, nec porttitor lectus convallis quis.
          Aliquam ut consectetur urna, id fermentum neque. Vestibulum sed mauris
          ultricies, dignissim dui et, rutrum tortor. Suspendisse vulputate orci
          sit amet eleifend volutpat.
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
