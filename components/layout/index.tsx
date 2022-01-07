import Footer from "./footer/index";
import Main from "./main/index";
import Navbar from "./navbar";

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
