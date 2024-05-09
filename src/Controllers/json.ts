import "wasi";
import { Console } from "as-wasi";
import { JSONEncoder } from 'assemblyscript-json';

export function handleRequest(): void {

    let encoder = new JSONEncoder();

    encoder.pushObject("obj");
    encoder.setInteger("int", 10);
    encoder.setString("str", "");
    encoder.popObject();

    Console.log("content-type: application/json");
    Console.log("");
    Console.log("{ " + encoder.toString() + " }");
}
