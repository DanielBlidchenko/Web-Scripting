type Props = {
  title: string;
  text: string;
  img?: string; 
};

export default function Card({ title, text, img }: Props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 10, borderRadius: 6 }}>
      {img && (
        <img
          src={img}
          alt={title}
          style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 4, marginBottom: 8 }}
        />
      )}
      <h3 style={{ margin: "6px 0" }}>{title}</h3>
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  );
}
