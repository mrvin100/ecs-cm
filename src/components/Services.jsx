import { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };
  return (
    <div className="tabs_container">
      <h2 className="heading">Something about our services</h2>
      <nav className="tabs">
        {tabsContent.map((tabItem, index) => (
          <span
            onClick={() => handleOnClick(index)}
            className={`tab ${currentTabIndex === index ? "active" : ""}`}
            key={index}
          >
            <i className="bx bx-note"></i>
            {tabItem.label}
          </span>
        ))}
      </nav>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default function Services() {
  const tabs = [
    {
      label: "location véhicule",
      content:
        "La location de voiture courte durée ou location de véhicule est un service proposé par une entreprise offrant aux clients la location des automobiles pour de courtes périodes pouvant aller de quelques heures à quelques semaines.",
    },
    {
      label: "vente véhicule",
      content:
        "De quoi s'agit-il, où se trouve-t-il, comment l'obtenir, est-il possible de faire une carte grise sans code de cession véhicule ? Ou encore combien de temps pour l'obtenir ? Nous allons répondre à toutes ces questions, et bien d'autres encore, dans ce dossier consacré au code de cession",
    },
    {
      label: "tourisme",
      content:
        "Le mot tourisme désigne le fait de voyager pour son plaisir hors de ses lieux de vie habituels, et d'y résider de façon temporaire, mais aussi un secteur économique qui comprend en plus de l' hôtellerie l'ensemble des activités liées à la satisfaction et aux déplacements des touristes .",
    },
  ];
  const handleOnChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return (
    <section className="services container">
      <h1 className="heading">Our Services</h1>
      <div className="box_container">
        <Tabs tabsContent={tabs} onChange={handleOnChange} />
      </div>
    </section>
  );
}
