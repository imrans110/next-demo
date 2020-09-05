export default function Footer() {
  return (
    <>
      <footer>
        <strong>Developed by : </strong> &nbsp; &copy; Syed Imran Abidi
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  );
}
