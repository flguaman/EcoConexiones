export const filterByCategory = <T extends { category: string }>(
  items: T[],
  category: string
): T[] => {
  if (category === 'Todos') return items
  return items.filter(item => item.category === category)
}

export const searchItems = <T extends { title: string; description: string }>(
  items: T[],
  query: string
): T[] => {
  const searchTerm = query.toLowerCase()
  return items.filter(
    item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
  )
}