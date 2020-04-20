const Menu = [
  {
    name: "My Work",
    icon: "icon-speedometer",
    //translate: "sidebar.nav.DASHBOARD",
    submenu: [
      {
        name: "Assigned to me",
        path: "/assigned-task",
      },
      {
        name: "Starred",
        path: "/starred-task",
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
        path: "/add-project",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Project Board",
        path: "/project-board",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Backlog View",
        path: "/backlog-view",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Project Settings",
        path: "/project-settings",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Project Access",
        path: "/project-access",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Sprint Board",
        path: "/sprint-board",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Roadmap",
        path: "/roadmap",
        //translate: "sidebar.nav.element.BUTTON",
      },
      {
        name: "Release",
        path: "/release",
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
        path: "/project-template",
      },
      {
        name: "Project Type",
        path: "/project-type",
      },
      {
        name: "Project Category",
        path: "/project-category",
      },
      {
        name: "Issue Types",
        path: "/issue-types",
      },
      {
        name: "Ticket Stage Config",
        path: "/ticket-config",
      },
      {
        name: "Ticket Workflow",
        path: "/ticket-workflow",
      },
      {
        name: "Labels",
        path: "/labels",
      },
      {
        name: "Linked Issue Types",
        path: "/linked-issue-type",
      },
      {
        name: "Resolution",
        path: "/resolution",
      },
      {
        name: "Components",
        path: "/components",
      },
      {
        name: "Issue Priority",
        path: "/issue-priority",
      },
      {
        name: "Issue Variables",
        path: "/issue-variables",
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
        path: "/create-task",
      },
    ],
  },
];

export default Menu;
