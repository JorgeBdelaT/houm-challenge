import Main from "./Main";
import Navbar from "./navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
