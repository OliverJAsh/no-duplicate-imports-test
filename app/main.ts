import { foo } from "helpers/foo";
// This should error but it doesn't ❌
import { bar } from "./helpers/foo";

foo;
bar;