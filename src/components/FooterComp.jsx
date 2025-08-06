import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const FooterComp = () => {
  return (
    <Footer className="p-2">
      <FooterCopyright
        href="#"
        by="BerdayaBersama™"
        year={2025}
        className="mb-1"
      />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};

export default FooterComp;
