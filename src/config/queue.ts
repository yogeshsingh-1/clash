// 🧠 BullMQ se types import kar rahe hain:
// ConnectionOptions → Redis connection ke liye config define karta hai
// DefaultJobOptions → har job ke default behavior (retry, delay, cleanup etc.) set karta hai
import { ConnectionOptions, DefaultJobOptions } from "bullmq"


// ⚙️ Redis ke connection details define kar rahe hain
export const redisConnection: ConnectionOptions = {
    // 🔹 Redis server ka host name — environment variable se read ho raha hai
    // Isse tu production me secure tarike se Redis host define kar sakta hai
    host: process.env.REDIS_HOST,

    // 🔹 Redis port number (default: 6379)
    // Yahi port par BullMQ apni queue operations perform karega
    port: 6379,

    // 🔹 (Optional) Agar Redis me password protection enabled hai,
    // toh yahan `password` property likh sakte ho:
    // password: process.env.REDIS_PASSWORD,
}


// 🧩 Default configuration for all BullMQ jobs
// Yani ye settings har job par apply hongi jab tak tu override na kare
export const defaultQueueOptions: DefaultJobOptions = {

    // 🧹 removeOnComplete: ye decide karta hai job complete hone ke baad queue se kab delete karna hai
    removeOnComplete: {
        // 🔸 count: 20 → sirf last 20 completed jobs queue me history ke liye rakhega
        count: 20,

        // 🔸 age: 60 * 60 → 1 hour (in seconds)
        // Job agar 1 ghante se purani ho gayi hai to Redis se remove kar do
        age: 60 * 60,   // 1 hour
    },

    // 🔁 attempts: agar job fail hoti hai to usko kitni baar retry karna hai
    attempts: 3,   // Yani ek job total 3 baar try hogi

    // ⏳ backoff: retry ke beech ka delay logic
    backoff: {
        // 🔹 type: "exponential" → har fail ke baad delay double hota rahega
        // 1st fail → 3s, 2nd fail → 6s, 3rd fail → 12s
        type: "exponential",

        // 🔹 delay: initial delay 3000 ms (3 seconds)
        delay: 3000,
    },

    // ❌ removeOnFail: agar job fail ho jaye to Redis se delete na karo
    // false means — failed job Redis me rahegi (for debugging/logging)
    removeOnFail: false
}
