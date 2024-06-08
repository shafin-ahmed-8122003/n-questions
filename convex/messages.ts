import { query } from "./_generated/server";

export const getMessages = query({
    args: {},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        // Check if we've already stored this identity before.
        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("tokenIdentifier"), identity?.tokenIdentifier))
            .unique();

        const messages = await ctx.db
            .query("messages")
            .filter((q) => q.eq(q.field("userId"), user?._id))
            .collect();

        return messages;
    },
});
