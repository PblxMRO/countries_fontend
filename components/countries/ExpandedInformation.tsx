import { useState } from "react";
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';

export default function ExpandableComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
    <div>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? <FaArrowUp size={40} color="#1D77C0" /> : <FaArrowRight size={40} color="#1D77C0" />}
      </button>
    </div>
    {expanded && (
        <div className="expanded-content text-black">
          <p>Información adicional del pais</p>
          <ul>
            <li>Más información 1</li>
            <li>Más información 2</li>
            <li>Más información 3</li>
          </ul>
        </div>
      )}
     </> 
  );
}