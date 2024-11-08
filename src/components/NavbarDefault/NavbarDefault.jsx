import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
  PersonaAvatar,
} from "@saas-ui/react";

export const NavbarDefault = () => {
  return (
    <Navbar
      position="sticky"
      borderBottomWidth="2px"
      background="rgb(22, 10, 81)"
      color="white"
      backdropFilter="blur(10px)"
    >
      <NavbarBrand>
        <h5>Alih Bahasa</h5>
      </NavbarBrand>

      <NavbarContent display={{ base: "hidden", sm: "flex" }}>
        <NavbarItem>
          <NavbarLink color="foreground" href="#">
            Produk
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink color="foreground" href="#">
            Hubungi Kami
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink color="foreground" href="#">
            Layanan
          </NavbarLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justifyContent="end">
        <Menu>
          <MenuButton>
            <PersonaAvatar
              src="/showcase-avatar.jpg"
              name="Beatriz"
              size="sm"
              presence="online"
            />
          </MenuButton>
          <MenuList color={"#3b1676"}>
            <MenuGroup title="ajopi">
              <MenuItem color={"#3b1676"} _hover={{ bg: "#d3d4d5" }}>
                Profile
              </MenuItem>
              <MenuItem color={"#3b1676"} _hover={{ bg: "#d3d4d5" }}>
                Settings
              </MenuItem>
              <MenuItem color={"#3b1676"} _hover={{ bg: "#d3d4d5" }}>
                Help &amp; feedback
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem color="#d2140a" _hover={{ bg: "#d3d4d5" }}>
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </NavbarContent>
    </Navbar>
  );
};
