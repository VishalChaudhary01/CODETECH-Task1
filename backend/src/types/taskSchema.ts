import { z } from "zod";

const taskSchema = z.object({
     title: z.string(),
     description: z?.string(),
});

export { taskSchema }