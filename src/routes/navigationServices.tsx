import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name?: any, params?: object): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const navigatePush = (name: string, params?: object): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

export const navigateAndReset = (
  routes: string[] = [],
  index: number = 0,
): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: routes.map(route => ({name: route})),
      }),
    );
  }
};

export const navigateAndSimpleReset = (
  name: string,
  index: number = 0,
): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    );
  }
};

export function navigateReplace(name: string, param?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.replace(name, {
        param,
      }),
    );
  }
}

export const goBack = (): void => {
  navigationRef.goBack();
};
