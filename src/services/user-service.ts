import apiClient from "./api-client";

export interface UserProp {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<UserProp[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  createUser(user: UserProp) {
    return apiClient.post("/users", user);
  }

  updateUser(user: UserProp) {
    return apiClient.patch("/users/" + user.id, user);
  }
}

export default new UserService();
