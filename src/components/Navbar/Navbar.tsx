interface NavbarProps {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: NavbarProps) => {
  return <div>Navbar {cartItemsCount}</div>;
};

export default Navbar;
