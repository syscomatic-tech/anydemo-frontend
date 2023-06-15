import Footer from "../shared/footer/footer";
import Header from "../shared/header/header";

export default function MainLayout({ children }) {
  return (
    <div className="mainLayout">
      <div className="bgEffect1"></div>
      <div className="bgEffect2"></div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}