const convertData = (data, type) => {
  const convertedData = data[type].map((item) => {
    return {
      data: item[0], // Assuming this is the date or label
      [type]: item[1], // Assuming this is the numeric value
    };
  });
  return convertedData;
};

export { convertData };
