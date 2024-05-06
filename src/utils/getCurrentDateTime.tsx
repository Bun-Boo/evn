const getCurrentDateTime = () => {
  const date = new Date();
  return date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
}

export default getCurrentDateTime;