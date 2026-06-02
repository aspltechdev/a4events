// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";


// function PublicLayout({ children }) {
//   return (
//     <>
//       <Navbar />
//       {children}
//       <Footer/>
//     </>
//   );
// }

// export default PublicLayout;


import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./PublicLayout.css";

function PublicLayout({ children }) {
  return (
    <div className="a4-layout">

      <Navbar />

      <main className="a4-layout-main">
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default PublicLayout;