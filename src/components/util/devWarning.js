import devWarning, { resetWarned } from 'rc-util/lib/warning';

export { resetWarned };

export default (valid, component, message) => {
  devWarning(valid, `[CXC: ${component}] ${message}`);
};
