interface data {
  name: string;
  github: string;
}

export default interface baseResponse {
  status_code: number;
  status: boolean;
  message: string;
  data: data;
}
