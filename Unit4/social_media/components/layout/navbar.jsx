import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, Container, Icon } from "semantic-ui-react";

const Navbar = () => {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;
  return (
    <Menu fluid borderless>
      <Container>
        <Link href="./login">
          <Menu.Item header active={isActive(`./login`)}>
            <Icon name=" sign in " size="large" />
              Login

          </Menu.Item>
        </Link>
      </Container>
    </Menu>
    
  );
};

export default Navbar;
