"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
/****************** Routes ******************/
const tax_route_1 = __importDefault(require("./routes/tax.route"));
const status_route_1 = __importDefault(require("./routes/status.route"));
const orden_route_1 = __importDefault(require("./routes/orden.route"));
const item_route_1 = __importDefault(require("./routes/item.route"));
const employee_route_1 = __importDefault(require("./routes/employee.route"));
const customer_route_1 = __importDefault(require("./routes/customer.route"));
const authentication_route_1 = __importDefault(require("./routes/authentication.route"));
const assign_route_1 = __importDefault(require("./routes/assign.route"));
/****************** Routes Quickbook ******************/
const quickbook_route_1 = __importDefault(require("./routes/quickbook.route"));
const db = require('./database');
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.DB();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use('/tax', tax_route_1.default);
        this.app.use('/status', status_route_1.default);
        this.app.use('/orden', orden_route_1.default);
        this.app.use('/item', item_route_1.default);
        this.app.use('/employee', employee_route_1.default);
        this.app.use('/customer', customer_route_1.default);
        this.app.use('/login', authentication_route_1.default);
        this.app.use('/assign', assign_route_1.default);
        this.app.use('/quickbook', quickbook_route_1.default);
    }
    DB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield db
                .authenticate()
                .then(() => console.log('Database connected...'))
                .catch((err) => console.log('Error: ' + err));
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port', this.app.get('port'));
        });
    }
}
exports.App = App;
