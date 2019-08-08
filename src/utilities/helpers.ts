export const fetchImage = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
};

export const httpToHttps = (url: string) => {
  return url.replace('http', 'https');
};
