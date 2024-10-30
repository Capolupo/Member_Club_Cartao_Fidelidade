import { apiConfig } from "./api-config";

export async function fetchClientInformation(clientId) {
  //124-537-835-230
  console.log(`${apiConfig.baseURL}/clients/${clientId}`)

  console.log('qqq')
  const result = await fetch(`${apiConfig.baseURL}/clients/${clientId}`);

  console.log(result.status) 
  if (result.status === 404) {
    return null;
  }
  
  const data = await result.json();
  return data;
}
