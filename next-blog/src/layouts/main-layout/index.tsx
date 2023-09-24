import MainNav from "../main-nav"

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainNav />

      <main>{children}</main>
    </>
  )
}

export default MainLayout;
