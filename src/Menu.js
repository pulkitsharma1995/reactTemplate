const Menu = [
  {
    name: "My Work",
    icon: "icon-speedometer",
    //translate: "sidebar.nav.DASHBOARD",
    submenu: [
      {
        name: "Assigned to me",
        path: "/dashboardv1",
      },
      {
        name: "Starred",
        path: "/dashboardv2",
      },
    ],
  },
  {
    name: "Projects",
    icon: "icon-grid",
    //path: "/widgets",
    //translate: "sidebar.nav.WIDGETS",
    submenu: [
      {
        name: "Add Project",
        path: "/buttons",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Project Board",
        path: "/project-board",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Backlog View",
        path: "/buttons",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Project Settings",
        path: "/buttons",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Project Access",
        path: "/buttons",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Sprint Board",
        path: "/buttons",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Roadmap",
        path: "/buttons",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Release",
        path: "/buttons",
        //translate: "sidebar.nav.element.BUTTON",
      },
    ],
  },
  {
    name: "Configurations",
    icon: "icon-settings",
    //translate: "sidebar.nav.DASHBOARD",
    submenu: [
      {
        name: "Project Template",
        path: "/buttons",
      },
      {
        name: "Project Type",
        path: "/dashboardv2",
      },
      {
        name: "Project Category",
        path: "/dashboardv2",
      },
      {
        name: "Issue Types",
        path: "/dashboardv2",
      },
      {
        name: "Ticket Stage Config",
        path: "/dashboardv2",
      },
      {
        name: "Ticket Workflow",
        path: "/dashboardv2",
      },
      {
        name: "Labels",
        path: "/dashboardv2",
      },
      {
        name: "Linked Issue Types",
        path: "/dashboardv2",
      },
      {
        name: "Resolution",
        path: "/dashboardv2",
      },
      {
        name: "Components",
        path: "/dashboardv2",
      },
      {
        name: "Issue Priority",
        path: "/dashboardv2",
      },
      {
        name: "Issue Variables",
        path: "/dashboardv2",
      },
    ],
  },
  {
    name: "People",
    icon: "icon-people",
    //translate: "sidebar.nav.DASHBOARD",
    submenu: [
      {
        name: "Manage Team",
        path: "/people",
      },
    ],
  },
  {
    name: "Create",
    icon: "icon-plus",
    //translate: "sidebar.nav.DASHBOARD",
    submenu: [
      {
        name: "Create New Ticket",
        path: "/buttons",
      },
    ],
  },
];

export default Menu;
