import {IUseSecurityWrapperState} from "./useSecurityWrapperState.interfaces";
import {ISecurityWrapperProps} from "../SecurityWrapper.interfaces";
import {useEffect, useState} from "react";

export const useSecurityWrapperState = (props: ISecurityWrapperProps): IUseSecurityWrapperState => {
  const {componentId, requiredRoles, userRoles} = props;
  const [disabled, setDisabled] = useState(false);

  const getRoles = (): string[] => {
    if(requiredRoles!== undefined) {
      const returnRoles = [];
      const arrRoles = requiredRoles
        .filter((value) => value.id === componentId);
      for(let i=0; i<arrRoles.length;i++){
        returnRoles.push(...arrRoles[i].roles)
      }
      return returnRoles;
    }
    return [];
  };

  const checkIfRoleIsInArray = (role: string):boolean => {
    const roles = getRoles();
    for(let i=0; i<roles.length;i++){
      if(roles[i] === role){
        return true;
      }
    }
    return false;
  };

  const checkIfIdIsInRequiredRoles = (id: string):boolean => {
    return requiredRoles!.filter((item)=>item.id===id).length>0;
  };

  useEffect(()=>{
    if(requiredRoles===undefined || requiredRoles.length===0){
      setDisabled(false);
      return;
    }
    if(userRoles!==undefined){
      for(let i=0; i<userRoles.length;i++){
        if(checkIfRoleIsInArray(userRoles[i])){
          setDisabled(false);
          return;
        }
      }
    }
    if(componentId !== undefined
      && !checkIfIdIsInRequiredRoles(componentId)){
      setDisabled(false);
      return;
    }
    setDisabled(true);
  },[userRoles,requiredRoles]);

  return {disabled};
};