import { BadgeType, RISK_LEVEL } from "../types";

export function getRiskName(risk: RISK_LEVEL) {
  switch (risk) {
    case RISK_LEVEL.NONE:
      return "None";
    case RISK_LEVEL.LOW:
      return "Low";
    case RISK_LEVEL.MEDIUM:
      return "Medium";
    case RISK_LEVEL.HIGH:
      return "High";
    case RISK_LEVEL.CRITICAL:
      return "Critical";
    default:
      return "";
  }
}

export function getRiskBadgeType(risk: RISK_LEVEL) {
  switch (risk) {
    case RISK_LEVEL.NONE:
      return BadgeType.DARK;
    case RISK_LEVEL.LOW:
      return BadgeType.GRAY;
    case RISK_LEVEL.MEDIUM:
      return BadgeType.YELLOW;
    case RISK_LEVEL.HIGH:
      return BadgeType.ORANGE;
    case RISK_LEVEL.CRITICAL:
      return BadgeType.RED;
    default:
      return BadgeType.GRAY;
  }
}
