import React from 'react';

/**
 * Common
 */
export interface CommonReduxAction {
  type: string;
}

export interface CommonReactProps {
  children: React.ReactNode;
}

/**
 * Menu
 */
export interface SidebarMenuState {
  menu: {
    isOpen: boolean;
  };
}

/**
 * User
 */
export interface UserReduxState {
  user: {
    email: string;
    userName: string;
    full_name: string;
    token: string;
    role: string;
    isStaff?: boolean;
  };
}
/**
 * Theme
 */
export type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;

    'secondary-color'?: string;
    'success-color'?: string;
    'danger-color'?: string;
    'state-color-gold'?: string;
    'state-color-orange'?: string;
    'btn-color-orange'?: string;
    'state-color-green'?: string;
    'background-color'?: string;
    'border-color'?: string;
    'black-color'?: string;
    'white-color'?: string;
  };
};
