import LeaderLine from "react-leader-line";
import { useEffect, useRef, forwardRef } from "react";

// import "./styles.css";

const showEffect = {
  default: "fade",
  none: "none",
  draw: "draw"
};

const RectComp = forwardRef(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
));

export default function App() {
  const startRef = useRef();
  const endRef = useRef();
  const startRef1 = useRef();
  const endRef1 = useRef();

  const hoverStartRef = useRef();
  const hoverEndRef1 = useRef();
  const hoverEndRef2 = useRef();
  const hoverEndRef3 = useRef();

  useEffect(() => {
    const lineOptions = {
      // color: window.getComputedStyle(document.getElementById("bibliography")).color,
      startPlug: "disc",
      endPlug: "behind"
      // size: 2,
      // startSocket: "left",
      // endSocket: "right"
    };

    new LeaderLine(
      document.getElementById("start"),
      document.getElementById("end"),
      lineOptions
    );
  }, []);

  return (
    <div className="App">
      <div id="start">start</div>
      <div id="end">end</div>
    </div>
  );
}
