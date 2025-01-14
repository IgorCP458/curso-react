import './styles.css'

export const Button = ({ text, onClick, disabled = false }) => (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );