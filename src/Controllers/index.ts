// import "wasi";
// import { Console } from "as-wasi";

// export function handleRequest(): void {
//     Console.log("content-type: text/plain");
//     Console.log("");
//     Console.log("Welcome to the AssemblyScript REST API!");
// }


// import "wasi";
import { Console, Environ, CommandLine } from "as-wasi";

export function handleRequest(): void {
    let env = new Environ();
    let host = env.get("HTTP_HOST");
    if (host !== null) {
        Console.error(host);
    }

    Console.log("content-type: text/plain");
    Console.log("");
    Console.log("Welcome to the AssemblyScript REST API!");
}