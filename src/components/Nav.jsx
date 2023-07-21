import React, { useEffect } from "react";
import "./Nav.css";
import OrderedList from "./navCategories";
import { NotificationsOutlined, SearchOutlined } from "@material-ui/icons";

function Nav() {
  const [show, setShow] = React.useState(false);
  const itensLista = ["Início", "Séries", "Filmes", "Bombando", "Minha lista", "Navegar por idiomas"]

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });

    return () => {
   //   window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png"
        alt="Netflix"
        className="nav-logo"
      />
      <OrderedList items={itensLista} />
      <div className="three">
        <SearchOutlined />
        <span>Infantil</span>
        <NotificationsOutlined />
        <img
        src="https://occ-0-4676-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQnOnMxhb19v9lQZScL86ZpnI21__HC3fseri3xG_4k-rYBafycfVvfsw_SqXVYXJJrelgRPF-eed5E69w1GQ3rq-CxZLW0.png?r=a4b"
        alt="Marco"
        className="nav-avatar"
        />
        </div>
    </div>
  );
}

export default Nav;
