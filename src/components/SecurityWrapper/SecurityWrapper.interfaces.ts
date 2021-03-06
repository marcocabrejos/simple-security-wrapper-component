import React from "react";

export interface ISecurityWrapperProps {
  children?: React.ReactNode;
  requiredRoles?: Role[];
  componentId?: string;
  userRoles?: string[];
}

export type Role = {
  id: string;
  description: string;
  parent: string;
  roles: string[];
  type: string;
}