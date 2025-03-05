export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/$3');
}






