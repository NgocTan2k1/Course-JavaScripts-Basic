export const type_log = 'log';
export const type_warn = 'warn';
export const type_error = 'error';
function logger(log, type = 'log') {
    console[type](log);
}

export default logger;