import apiClient from "./api-client";
import create from "./http-service";

export interface UserProp {
  id: number;
  name: string;
}

export default create("/users");
