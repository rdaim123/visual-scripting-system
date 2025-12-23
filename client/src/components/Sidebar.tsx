export function Sidebar({ templates, onCreateNode }: any) {
  return (
    <div className="sidebar">
      {templates.map((t: any) => (
        <button
          key={t.type}
          onClick={() => onCreateNode(t.type)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
