import Section from "components/Section/Section";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Section>
      <div>
        <h1>Hi, I’m your phonebook</h1>
        <p>
          To save or view your contacts press
          <NavLink to="/register"> Register </NavLink>
          or
          <NavLink to="/login"> LogIn </NavLink>.
        </p>
      </div>
    </Section>
  );
}
