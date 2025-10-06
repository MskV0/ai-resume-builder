export const translateToEnglish = (text) => {
  if (!text) return '';
  
  const patterns = {
    'kaam': 'work', 'banaya': 'created', 'sikha': 'learned', 'padha': 'studied',
    'mein': 'in', 'aur': 'and', 'hai': 'is', 'tha': 'was',
    '\\bu\\b': 'you', '\\bur\\b': 'your', '\\b2\\b': 'to', '\\b4\\b': 'for',
    'coz': 'because', 'gonna': 'going to', 'wanna': 'want to'
  };

  let result = text;
  Object.keys(patterns).forEach(key => {
    result = result.replace(new RegExp(key, 'gi'), patterns[key]);
  });
  
  return result.replace(/(^\w|[.!?]\s+\w)/g, m => m.toUpperCase());
};