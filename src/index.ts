import { json } from "@angular-devkit/core";
import { SchemaObject as GreetingSchema } from "./schema";
import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from "@angular-devkit/architect";
import { Observable, of } from "rxjs";

type GreetingBuilderSchema = GreetingSchema & json.JsonObject;

export const createGreetingBuilder = (
  options: GreetingBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> => {
  context.logger.info(`Hello from Greeting Builder | ${JSON.stringify(options)}`, options);

  return of({ success: true });
};

export default createBuilder<GreetingBuilderSchema>(createGreetingBuilder);
