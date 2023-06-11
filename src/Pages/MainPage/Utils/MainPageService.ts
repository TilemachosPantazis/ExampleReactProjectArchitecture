import { axiosClient } from '../../../Utils/BasicAxios';
import { API_ENDPOINTS } from '../../../Utils/Routes';

export const exampleApiCall = (loginInfo: any) => {
  return axiosClient.post<any>(`${API_ENDPOINTS.exampleCall}`, loginInfo);
};

export const getAddressApiCall = (address: string) => {
  return axiosClient.get<any>(`${API_ENDPOINTS.getAddress(address)}`);
};