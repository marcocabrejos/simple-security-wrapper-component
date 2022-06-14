import React, {createContext, FC} from "react";
import {ISecurityContextValue, ISecurityModuleWrapperProps} from "./ModuleSecurityWrapper.interfaces";
import { useSecurityWrapperState } from "./hook/useSecurityWrapperState";

export const SecurityContext = createContext<ISecurityContextValue>({
  requiredRoles:[],
  userRoles:[]
});

export const ModuleSecurityWrapper: FC<ISecurityModuleWrapperProps> = (props: ISecurityModuleWrapperProps) => {
  const { allow, requiredRoles, userRoles } = useSecurityWrapperState(props);

  const { children } = props;
  return (<>
    {
      !allow && (<>nopermitido</>)
    }
    {allow &&
        (<SecurityContext.Provider value={{requiredRoles, userRoles}}>
          {children}
        </SecurityContext.Provider>)
    }
  </>);
};

export default ModuleSecurityWrapper;