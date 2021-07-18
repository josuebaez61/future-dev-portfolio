import React from "react";

export interface SidebarContextInterface {
    sidebarIsVisible: boolean;
    setSidebarIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = React.createContext<SidebarContextInterface>({} as SidebarContextInterface);