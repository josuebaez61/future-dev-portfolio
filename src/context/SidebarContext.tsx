import React, { useState } from "react";

export interface SidebarContext {
    sidebarIsVisible: boolean;
    setSidebarIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = React.createContext<SidebarContext>({} as SidebarContext);