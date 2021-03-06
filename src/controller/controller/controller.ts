import {IController} from "./i-controller";
import {Request} from "../../server/i-request";
import {ControllerMethod} from "./controller-method";
import {Method} from "../../server/method";
import {Path} from "../../server/path";

/**
 * A controller can handle a request and return a response for it
 */
export abstract class Controller implements IController {
	// noinspection JSPotentiallyInvalidConstructorUsage
	/**
	 * The controller method listeners of this concrete Controller instance
	 * @type {Map<RegExp, ControllerMethod>}
	 */
	readonly controllerMethods: Map<Method, Map<Path[] | Path, ControllerMethod>> = (this as {
		constructor: {prototype: {controllerMethods: Map<Method, Map<Path[] | Path, ControllerMethod>>}};
	}).constructor.prototype.controllerMethods;

	/**
	 * Returns a ControllerMatch for the given request, if any exists
	 */
	match(request: Request): ControllerMethod | undefined {
		const controllerMethodListener = this.controllerMethods.get(request.method);
		if (controllerMethodListener == null) {
			return undefined;
		}

		// Find the listener that matches the request
		for (const [path, method] of controllerMethodListener.entries()) {
			const normalizedPath = Array.isArray(path) ? path : [path];
			for (const part of normalizedPath) {
				if (typeof part === "string" ? part === request.url.pathname : part.test(request.url.pathname)) {
					return method.bind(this);
				}
			}
		}

		return undefined;
	}
}
