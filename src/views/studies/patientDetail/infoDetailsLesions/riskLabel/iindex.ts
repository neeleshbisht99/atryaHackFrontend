
export enum ERiskLevel {
  VERY_HIGH = 'very-high',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  VERY_LOW = 'very-low',
}

export enum ERiskType {
  RISK_SCORE = 'risk_score',
  WILDFIRE = 'wild_fire_risk',
  GROWIN = 'grow_in_risk',
  HAZARD_TREE = 'hazard_tree_risk',
}


export const SEVERITY_BCKGRND_COLOR_MAP: any = {
  [ERiskLevel.VERY_HIGH]: '#FFEBE6',
  [ERiskLevel.HIGH]: '#FFEBE6',
  [ERiskLevel.MEDIUM]: '#FFECD4',
  [ERiskLevel.LOW]: '#C0DAFF',
  [ERiskLevel.VERY_LOW]: '#C0DAFF',
}

export const SEVERITY_ICON_COLOR_MAP: any = {
  [ERiskLevel.VERY_HIGH]: '#BF2600',
  [ERiskLevel.HIGH]: '#BF2600',
  [ERiskLevel.MEDIUM]: '#FF8B00',
  [ERiskLevel.LOW]: '#0747A6',
  [ERiskLevel.VERY_LOW]: '#0747A6',
}

export const LABEL_TEXT_MAP: any = {
  [ERiskLevel.VERY_HIGH]: 'Very High',
  [ERiskLevel.HIGH]: 'High',
  [ERiskLevel.MEDIUM]: 'Medium',
  [ERiskLevel.LOW]: 'Low',
  [ERiskLevel.VERY_LOW]: 'Very Low',
}
