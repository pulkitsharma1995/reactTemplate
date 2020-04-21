export const projectBoard = {
  projectsHeading: "Projects",
};

export const teamViewer = {
  AVAILABITY: "AVAILABITY",
  MANAGE_TEAM: "Manage Team",
  TASKS: "TASKS",
  TEAM_BUDGET: "BUDGET",
  YOUR_TEAM: "Your Teams",
};

export const contactList = {
  PEOPLE: "PEOPLE",
  VIEW: "VIEW",
};

export const createTask = {
  CREATE_ISSUE: "Create Issue",
  IMPORT_ISSUES: "Import Issues",
  PROJECT: "Project",
  ISSUE_TYPE: "Issue Type",
  SUMMARY: "Summary",
  DESCRIPTION: "Enter Description",
  ASSIGNEE: "Assignee",
  LABELS: "Labels",
  START_DATE: "Start Date",
  DUE_DATE: "Due Date",
  REPORTER: "Reporter",
  SELECT_REASON: "Select reason",
  ISSUES: "Issues",
  FLAGGED: "Flagged",
  IMPEDIMENT: "Impediment",
  CREATE_ANOTHER: "Create Another",
  CREATE: "Create",
  CANCEL: "Cancel",
  IMPEDIMENT_NOTE: "Allows to flag issues with impediments.",
  ISSUE_NOTE:
    " Begin typing to search for issues to link. If you leave it blank, no link will be made.",
};

export const Options = {
  options: [
    "inline",
    "blockType",
    "fontSize",
    "fontFamily",
    "list",
    "textAlign",
  ],
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["bold", "italic", "underline", "strikethrough"],
  },
  blockType: {
    inDropdown: true,
    options: [
      "Normal",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "Blockquote",
      "Code",
    ],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  fontSize: {
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  fontFamily: {
    options: [
      "Arial",
      "Georgia",
      "Impact",
      "Tahoma",
      "Times New Roman",
      "Verdana",
    ],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["unordered", "ordered", "indent", "outdent"],
  },
  textAlign: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["left", "center", "right", "justify"],
  },
};
