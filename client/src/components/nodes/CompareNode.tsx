import { Handle, Position } from "reactflow";

export default function CompareNode({ data }: any) {
  return (
    <div className="node">
      <strong>Сравнение</strong>

      <Handle type="target" position={Position.Left} id="a" />
      <Handle type="target" position={Position.Left} id="b" />

      <select
        value={data.operator}
        onChange={e => data.setOperator(e.target.value)}
      >
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
        <option value="==">==</option>
      </select>

      <Handle type="source" position={Position.Right} id="result" />
    </div>
  );
}
