export default function MainPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Happy Birthday! 🎉</h1>

      <p style={styles.message}>
        I hope today brings you smiles, warmth, and a little bit of magic.
        This was made just for you 💛
      </p>

      <div style={styles.cakeContainer}>
        🎂
        <p style={styles.cakeHint}>Click the cake</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "24px",
  },
  title: {
    fontSize: "20px",
    marginBottom: "16px",
  },
  message: {
    fontSize: "10px",
    maxWidth: "420px",
    lineHeight: "1.8",
    marginBottom: "32px",
  },
  cakeContainer: {
    fontSize: "64px",
    cursor: "pointer",
    userSelect: "none",
    transition: "transform 0.3s ease",
  },
  cakeHint: {
    fontSize: "8px",
    marginTop: "8px",
    opacity: 0.6,
  },
};