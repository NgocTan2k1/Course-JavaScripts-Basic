import {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from "../constant.js";

function logger_folder(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger_folder;