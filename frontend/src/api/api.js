import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/';

export const singleFileUpload = async (data, options) => {
  try {
    await axios.post(apiUrl + 'singleFile', data, options);
  } catch (error) {
    throw error;
  }
};
export const getSingleFiles = async (options) => {
  try {
    const { data } = await axios.get(apiUrl + 'getSingleFiles',options);
    return data;
  } catch (error) {
    throw error;
  }
};

export const multipleFilesUpload = async (data, options) => {
  try {
    await axios.post(apiUrl + 'multipleFiles', data, options);
  } catch (error) {
    throw error;
  }
};
export const getMultipleFiles = async (options) => {
  try {
    const { data } = await axios.get(apiUrl + 'getMultipleFiles', options);
    return data;
  } catch (error) {
    throw error;
  }
};
