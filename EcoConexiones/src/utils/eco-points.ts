export interface EcoActivity {
  id: string
  type: 'project' | 'event' | 'resource' | 'challenge'
  points: number
  timestamp: number
}

export const calculatePoints = (activities: EcoActivity[]): number => {
  return activities.reduce((total, activity) => total + activity.points, 0)
}

export const getLevel = (points: number): number => {
  return Math.floor(points / 100) + 1
}

export const getNextLevelProgress = (points: number): number => {
  const currentLevelPoints = (getLevel(points) - 1) * 100
  const progress = ((points - currentLevelPoints) / 100) * 100
  return Math.min(Math.max(progress, 0), 100)
}