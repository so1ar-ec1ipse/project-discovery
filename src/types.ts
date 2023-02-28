export enum RISK_LEVEL {
  NONE,
  LOW,
  MEDIUM,
  HIGH,
  CRITICAL,
}

export enum BadgeType {
  DARK = "dark",
  GRAY = "gray",
  YELLOW = "yellow",
  ORANGE = "orange",
  RED = "red",
  BLUE = "blue",
}

export type Vulnerability = {
  id: string;
  title: string;
  tags: Array<string>;
  activity: null | number;
  foundedDate: Date | string;
  risk: RISK_LEVEL;
  affectedAssets: Array<string>;
  jiraUrl: null | string;
};
