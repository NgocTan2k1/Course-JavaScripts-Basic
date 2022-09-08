import logger, {
    type_error,
    type_warn,
    type_log,
} from './logger.js';

console.log(logger);
logger("Ngoc Tan is handsome", type_log);
logger("Ngoc Tan is handsome", type_warn);
logger("Ngoc Tan is handsome", type_error);

import logger_folder from './logger/index.js';
import * as constants from "./constant.js";
console.log(logger_folder);
logger_folder("Ngoc Tan is handsome", constants.TYPE_LOG);
logger_folder("Ngoc Tan is handsome", constants.TYPE_WARN);
logger_folder("Ngoc Tan is handsome", constants.TYPE_ERROR);

