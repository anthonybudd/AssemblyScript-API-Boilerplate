import "wasi";
import { Console } from "as-wasi";

export function handleRequest(): void {
    Console.log("content-type: text/plain");
    Console.log("");
    Console.log("healthy");
}
