export const DATA_TYPES = {
  STRING: "string",
  NUMBER: "number",
  DATE: "date",
};

export const FEATURES_TABLE_COLUMNS = {
  place: {
    label: "Title",
    property: "place",
    type: "string",
  },
  mag: {
    label: "Magnitude",
    property: "mag",
    type: "number",
  },
  time: {
    label: "Time",
    property: "time",
    type: "date",
  },
};

export const META_INFO = [
  {
    label: "First name",
    key: "firstName",
  },
  {
    label: "Last name",
    key: "lastName",
  },
  {
    label: "Phone",
    key: "phone",
    linkPre: "tel:",
  },
  {
    label: "Email",
    key: "email",
    linkPre: "mailto:",
  },
  {
    label: "Bio",
    key: "bio",
  },
];

export const FEATURE_DETAIL_TYPES = [
  {
    label: "Title",
    key: "title",
  },
  {
    label: "Magnitude",
    key: "mag",
  },
  {
    label: "Time",
    key: "time",
  },
  {
    label: "Status",
    key: "status",
  },
  {
    label: "Tsunami",
    key: "tsunami",
  },
  {
    label: "Type",
    key: "type",
  },
];
