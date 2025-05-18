import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "gadgetinventory/gadgetinventory-api",
    },
    {
      type: "category",
      label: "Eszközök",
      items: [
        {
          type: "doc",
          id: "gadgetinventory/uj-eszkoz-letrehozasa",
          label: "Új eszköz létrehozása",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "gadgetinventory/az-osszes-eszkoz-listazasa-szuresi-lehetoseggel",
          label: "Az összes eszköz listázása, szűrési lehetőséggel.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "gadgetinventory/egy-konkret-eszkoz-lekerdezese-azonosito-alapjan",
          label: "Egy konkrét eszköz lekérdezése azonosító alapján.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
