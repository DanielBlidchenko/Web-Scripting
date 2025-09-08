import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 12, fontFamily: "Arial, sans-serif" }}>
      <Header />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
          marginTop: 12,
        }}
      >
        <Card
          title="Card One"
          text="first card."
          img="https://picsum.photos/seed/one/400/240"
        />
        <Card
          title="Card Two"
          text="second card"
          img="https://picsum.photos/seed/two/400/240"
        />
        <Card
          title="Card Three"
          text="No image here"
        />
      </section>

      <Footer />
    </main>
  );
}
