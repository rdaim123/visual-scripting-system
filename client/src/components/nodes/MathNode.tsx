import { Handle, Position } from "reactflow";

export default function MathNode({ data }: any) {
  return (
    <div className="node">
      <strong>Математика</strong>

      <input
        type="number"
        value={data.a}
        onChange={e => data.setA(+e.target.value)}
      />

      <select
        value={data.op}
        onChange={e => data.setOp(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        type="number"
        value={data.b}
        onChange={e => data.setB(+e.target.value)}
      />

      <Handle type="source" position={Position.Right} id="res" />
    </div>
  );
}
