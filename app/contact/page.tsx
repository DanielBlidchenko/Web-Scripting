export default function ContactPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p>You can email me at  <span className="font-mono">DanielBlid@email.com</span></p>
      <img 
        src="contact.jpg" 
        alt="Contact page picture"
        className="rounded shadow"
        style={{ width: "100px", height: "100px" }}
      />
    </main>
  );
}
