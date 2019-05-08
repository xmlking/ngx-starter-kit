// https://medium.com/ngxs/ngxs-state-operators-8b339641b220
// https://ngxs.gitbook.io/ngxs/v/master/advanced/operators
import { StateOperator } from '@ngxs/store';

function setLoading<T extends { loading: boolean }>(newValue: boolean): StateOperator<T> {
  return (state: Readonly<T>) => {
    if (state && state.loading === newValue) {
      return state;
    }
    return { ...state, loading: newValue };
  };
}

export function startLoading() {
  return setLoading(true);
}
export function finishedLoading() {
  return setLoading(false);
}

export function setProgress<T extends { progress: number }>(newProgress: number): StateOperator<T> {
  return (state: Readonly<T>) => {
    if (state && state.progress === newProgress) {
      return state;
    }
    return { ...state, progress: newProgress };
  };
}
