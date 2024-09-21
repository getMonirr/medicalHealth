import { USER_ROLE } from "@/constant/role";

export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export type TUserRole = keyof typeof USER_ROLE;
