export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] border-t py-4 text-center">
      <p className="text-sm text-[var(--color-text)]">
        © {new Date().getFullYear()} Kalakaar. Made with ❤️ in India.
      </p>
      <p className="text-sm text-[var(--color-text)]">This project was made by Team uDGX.</p>

    </footer>
  );
}
