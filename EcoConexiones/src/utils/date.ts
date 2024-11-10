export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const isUpcoming = (date: string | Date): boolean => {
  return new Date(date) > new Date()
}

export const getDaysRemaining = (date: string | Date): number => {
  const diff = new Date(date).getTime() - new Date().getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}